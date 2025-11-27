"use client"

import { useState, type ChangeEvent } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Small } from "@/app/components/typography"
import { Type } from "lucide-react"

export default function TextBlock() {
  const [preview, setPreview] = useState<string>('')
  const [isEditing, setIsEditing] = useState(true)

  const handleClose = () => {
    setIsEditing(false)
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPreview(event.target.value)
  }

  return (
    <div className="space-y-4">
      {isEditing ? (
        <div className="space-y-3">
          <Textarea 
            value={preview} 
            placeholder="Start typing your text..." 
            onChange={handleChange} 
            className="min-h-[150px] resize-none"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleClose} size="sm">
              Cancel
            </Button>
            <Button onClick={handleSave} size="sm">
              Save Text
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {preview ? (
            <div className="prose prose-sm max-w-none p-4 border rounded-lg bg-muted/50">
              {preview}
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              <Type className="h-6 w-6 mx-auto mb-2 opacity-50" />
              <Small text="No text added yet" />
            </div>
          )}
          <Button variant="outline" onClick={handleEdit} size="sm">
            Edit Text
          </Button>
        </div>
      )}
    </div>
  )
}
