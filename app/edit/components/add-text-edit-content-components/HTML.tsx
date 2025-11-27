"use client"

import { FileCode } from "lucide-react"
import { Small } from "@/app/components/typography"

export default function HTMLBlock() {
  return (
    <div className="text-center py-8 text-muted-foreground">
      <FileCode className="h-8 w-8 mx-auto mb-2 opacity-50" />
      <Small text="HTML Block - Coming Soon" />
    </div>
  )
}