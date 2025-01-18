'use client';

import type { QueryFilters } from '@tanstack/react-query';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TriangleAlert } from 'lucide-react';
import { parseAsInteger, useQueryState } from 'nuqs';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatName } from '@/lib/utils';
import * as Schemas from '@/prisma/generated/zod';

interface DynamicTableProps {
  routeName: string;
  schemaName: string;
}

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface ApiResponse {
  data: {
    result: any[];
    pagination: PaginationData;
  };
}

// Helper function to get appropriate default value based on schema type
function getDefaultValueForField(schema: any, fieldName: string) {
  const fieldSchema = schema.shape?.[fieldName];
  if (!fieldSchema)
    return '';

  switch (fieldSchema._def.typeName) {
    case 'ZodNumber':
      return null;
    case 'ZodString':
      return '';
    case 'ZodBoolean':
      return false;
    case 'ZodDate':
      return null;
    default:
      return '';
  }
}

export default function DynamicTable({
  routeName,
  schemaName,
}: DynamicTableProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const formattedName = formatName(schemaName);

  interface SchemaMap {
    [key: string]: any;
  }

  const schema = (Schemas as SchemaMap)[`${schemaName}Schema`];

  interface FieldSchema {
    _def: {
      typeName: string;
    };
    shape?: {
      [key: string]: FieldSchema;
    };
  }

  const columns = useMemo(() => {
    const schemaFields = Object.keys(schema.shape || {}).filter(
      key => !['id', 'createdAt', 'updatedAt'].includes(key), // Filter out id and timestamp fields
    );
    return schemaFields;
  }, [schema]);

  // Initialize form with validation that changes based on edit vs create mode
  const form = useForm({
    resolver: zodResolver(editingId ? schema : schema.omit({ id: true })),
    defaultValues: columns.reduce<Record<string, any>>((acc, column) => {
      acc[column] = getDefaultValueForField(schema.shape, column);
      return acc;
    }, {}),
  });

  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: [routeName, page],
    queryFn: async () => {
      const res = await fetch(`/api/v1/${routeName}?page=${page}&limit=10`);
      if (res.status === 401 || res.status === 403) {
        setErrorMessage('You do not have permission to view this data.');
        throw new Error('Permission denied');
      }
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleApiError = (error: any) => {
    console.error('API Error:', error);
    if (error.status === 401 || error.status === 403) {
      setErrorMessage('You do not have permission to perform this action.');
    }
    else {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const createMutation = useMutation({
    mutationFn: async (newItem: any) => {
      const response = await fetch(`/api/v1/${routeName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Creation failed:', errorData);
        throw response;
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routeName] } as QueryFilters);
      setIsDialogOpen(false);
      form.reset();
      setErrorMessage(null);
    },
    onError: (error) => {
      console.error('Creation error:', error);
      handleApiError(error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (updatedItem: any) =>
      fetch(`/api/v1/${routeName}/${updatedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      }).then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routeName] } as QueryFilters);
      setIsDialogOpen(false);
      setEditingId(null);
      form.reset();
      setErrorMessage(null);
    },
    onError: handleApiError,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      fetch(`/api/v1/${routeName}/${id}`, { method: 'DELETE' }).then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [routeName] } as QueryFilters);
      setErrorMessage(null);
    },
    onError: handleApiError,
  });

  const onSubmit = async (values: any) => {
    setErrorMessage(null);
    if (editingId) {
      updateMutation.mutate({ ...values, id: editingId });
    }
    else {
      try {
        await createMutation.mutateAsync(values);
      }
      catch (error) {
        console.error('Creation failed:', error);
      }
    }
  };

  const openCreateDialog = () => {
    setEditingId(null);
    const initialValues = columns.reduce<Record<string, any>>((acc, column) => {
      acc[column] = getDefaultValueForField(schema, column);
      return acc;
    }, {});
    form.reset(initialValues);
    setIsDialogOpen(true);
    setErrorMessage(null);
  };

  const openEditDialog = (item: any) => {
    setEditingId(item.id);
    form.reset(item);
    setIsDialogOpen(true);
    setErrorMessage(null);
  };

  if (isLoading)
    return <div>Loading...</div>;
  if (error) {
    return (
      <Alert variant="destructive">
        <TriangleAlert className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {error instanceof Error ? errorMessage : 'An unknown error occurred'}
        </AlertDescription>
      </Alert>
    );
  }

  const pagination = data?.data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  };

  const { currentPage, totalPages, totalItems, itemsPerPage } = pagination;

  return (
    <div>
      {errorMessage && (
        <Alert variant="destructive" className="mb-4">
          <TriangleAlert className="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Button onClick={openCreateDialog} className="mb-4">
        Add new
        {' '}
        {formattedName.toLowerCase()}
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingId ? 'Edit' : 'Create'}
              {' '}
              {formattedName}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {columns.map(column => (
                <FormField
                  key={column}
                  control={form.control}
                  name={column}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {column}
                        {(column === 'profileId' || column === 'contentId')
                        && ' *'}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={
                            schema.shape?.[column]?._def.typeName
                            === 'ZodNumber'
                              ? 'number'
                              : 'text'
                          }
                          value={field.value ?? ''}
                          onChange={(e) => {
                            const value
                              = e.target.type === 'number'
                                ? e.target.value === ''
                                  ? null
                                  : Number(e.target.value)
                                : e.target.value;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="submit"
                disabled={createMutation.isPending || updateMutation.isPending}
                className={
                  createMutation.isPending || updateMutation.isPending
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                }
              >
                {editingId
                  ? updateMutation.isPending
                    ? 'Updating...'
                    : 'Update'
                  : createMutation.isPending
                    ? 'Creating...'
                    : 'Create'}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {data?.data?.result && data.data.result.length > 0
        ? (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    {columns.map(column => (
                      <TableHead key={column}>{column}</TableHead>
                    ))}
                    <TableHead className="text-end">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.data.result.map((item: any) => (
                    <TableRow key={item.id}>
                      {columns.map(column => (
                        <TableCell key={`${item.id}-${column}`}>
                          {item[column]}
                        </TableCell>
                      ))}
                      <TableCell className="flex justify-end gap-2">
                        <Button onClick={() => openEditDialog(item)}>Edit</Button>
                        <AlertDialog>
                          <AlertDialogTrigger
                            className={buttonVariants({ variant: 'destructive' })}
                          >
                            Delete
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this
                                {' '}
                                {formattedName.toLowerCase()}
                                ?
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteMutation.mutate(item.id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  Showing
                  {' '}
                  {(currentPage - 1) * itemsPerPage + 1}
                  {' '}
                  to
                  {' '}
                  {Math.min(currentPage * itemsPerPage, totalItems)}
                  {' '}
                  of
                  {' '}
                  {totalItems}
                  {' '}
                  entries
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setPage(page => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() =>
                      setPage(page => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )
        : (
            <div className="py-10 text-center">
              <p className="mb-4 text-lg">
                No
                {' '}
                {formattedName.toLowerCase()}
                {' '}
                found.
              </p>
              <Button onClick={openCreateDialog}>
                Create your first
                {' '}
                {formattedName.toLowerCase()}
              </Button>
            </div>
          )}
    </div>
  );
}
