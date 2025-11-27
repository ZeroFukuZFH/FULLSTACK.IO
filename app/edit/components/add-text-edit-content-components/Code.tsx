"use client"

import { Code2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Code, CodeBlock } from '@/components/animate-ui/components/animate/code';
import { Small } from "@/app/components/typography"

export default function CodeBlockComponent() {
  const [preview, setPreview] = useState<string>('')
  const [isEditing, setIsEditing] = useState(true)
  
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPreview(event.target.value)
  }

  const handleClose = () => {
    setIsEditing(false)
  }

  const handleSave = () => {
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <div className="space-y-4">
      {isEditing ? (
        <div className="space-y-3">
          <Textarea 
            value={preview} 
            placeholder="Enter your code here..." 
            onChange={handleChange} 
            className="min-h-[200px] font-mono text-sm resize-none"
          />
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleClose} size="sm">
              Cancel
            </Button>
            <Button onClick={handleSave} size="sm">
              Save Code
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {preview ? (
            <div className="border rounded-lg overflow-hidden">
              <Code code={preview} className="w-full">
                <CodeBlock 
                  writing={true} 
                  duration={2000} 
                  delay={0} 
                  lang="typescript"
                />
              </Code>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Code2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <Small text="No code added yet" />
            </div>
          )}
          <Button variant="outline" onClick={handleEdit} size="sm">
            Edit Code
          </Button>
        </div>
      )}
    </div>
  )
}