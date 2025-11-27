"use client"

import { Eye } from "lucide-react"
import { Small } from "@/app/components/typography"

export default function VisualBlock() {
  return (
    <div className="text-center py-8 text-muted-foreground">
      <Eye className="h-8 w-8 mx-auto mb-2 opacity-50" />
      <Small text="Visual Block - Coming Soon" />
    </div>
  )
}