import { notFound } from 'next/navigation';

import DynamicTable from '@/components/dynamic-table';
import { routeConfigurations } from '@/lib/routes';
import { formatName } from '@/lib/utils';

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ entity: string }>;
}) {
  const slug = (await params).entity;
  const routeConfig = Object.entries(routeConfigurations).find(
    ([_, config]) => config.routeName === slug,
  );

  if (!routeConfig) {
    notFound();
  }

  const [schemaName, config] = routeConfig;

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-5 text-2xl font-bold">
        {formatName(schemaName)}
        {' '}
        Dashboard
      </h1>
      <DynamicTable routeName={slug} schemaName={schemaName} />
    </div>
  );
}
