"use client"

import { Plus, Code2, Type, Eye, FileCode } from "lucide-react"
import { JSX, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TextBlock from "./add-text-edit-content-components/Text"
import VisualBlock from "./add-text-edit-content-components/Visual"
import CodeBlockComponent from "./add-text-edit-content-components/Code"
import HTMLBlock from "./add-text-edit-content-components/HTML"

// implement being able to change indentation and style later

export default function TextEditor() {
  const [children, setChildren] = useState<JSX.Element[]>([])
  
  const addChild = (variant: string) => {
    setChildren(prev => [...prev, <Child key={prev.length} variation={variant} />])
  }

  const removeChild = (index: number) => {
    setChildren(prev => prev.filter((_, i) => i !== index))
  }
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-4">
      {children.map((item, index) => (
        <div key={index} className="relative group">
          {item}
          <Button
            variant="destructive"
            size="sm"
            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
            onClick={() => removeChild(index)}
          >
            ×
          </Button>
        </div>
      ))}
      
      <Options method={addChild} />
    </div>
  )
}

function Options({ method }: { method: (variant: string) => void }) {
  const options = [
    { label: 'Text', value: 'Text', icon: <Type className="h-4 w-4" /> },
    { label: 'Code', value: 'Code', icon: <Code2 className="h-4 w-4" /> },
    { label: 'HTML', value: 'HTML', icon: <FileCode className="h-4 w-4" /> },
    { label: 'Visual', value: 'visual', icon: <Eye className="h-4 w-4" /> },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2 w-full max-w-xs mx-auto">
          <Plus className="h-4 w-4" />
          Add Content Block
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => method(option.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            {option.icon}
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function Child({ variation }: { variation: string }) {
  const opt: string = variation.toLowerCase()
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          <Badge variant="secondary" className="capitalize">
            {variation}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {opt === 'text' && <TextBlock />}
        {opt === 'code' && <CodeBlockComponent />}
        {opt === 'html' && <HTMLBlock />}
        {opt === 'visual' && <VisualBlock />}
      </CardContent>
    </Card>
  )
}