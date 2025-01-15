"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-zinc-800 rounded-lg w-full max-w-md max-h-[85vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-zinc-100">{title}</h2>
          <Button variant="ghost" onClick={onClose} className="p-1 hover:bg-zinc-700">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  )
}

