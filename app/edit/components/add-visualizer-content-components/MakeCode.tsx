"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeTabs } from '@/components/animate-ui/components/animate/code-tabs';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Large, Small } from "@/app/components/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Code2, Eye } from "lucide-react"

export default function MakeCode() {
    const [codes, setCodes] = useState({
        Sample: `#include <stdio.h>

int main(void) {
    printf("hello world");
    return 0;
}`
    })

    const [temp, setTemp] = useState({ lang: '', body: '' })

    const handleLang = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTemp(prev => ({ ...prev, lang: event.target.value }))
    }

    const handleBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTemp(prev => ({ ...prev, body: event.target.value }))
    }

    const handleSubmit = () => {
        try {
            if (temp.lang === '' || temp.body === '') {
                throw new Error('Please fill in both language and code fields')
            }
            setCodes(prev => ({ ...prev, [temp.lang]: temp.body }))
            setTemp({ lang: '', body: '' })
        } catch (error) {
            console.error(error)
        }
    }

    const hasCode = Object.keys(codes).length > 0

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Code2 className="h-6 w-6 text-blue-600" />
                    <Large text="Code Editor" />
                </div>
                <Badge variant="secondary" className="px-3 py-1">
                    {Object.keys(codes).length} {Object.keys(codes).length === 1 ? 'Tab' : 'Tabs'}
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Plus className="h-5 w-5" />
                            Add New Code Tab
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div>
                                <Small text="Language" className="text-sm font-medium mb-2 block" />
                                <Input type="text" placeholder="e.g., javascript, python, cpp" onChange={handleLang} value={temp.lang} className="w-full"/>
                            </div>
                            
                            <div>
                                <Small text="Code" className="text-sm font-medium mb-2 block" />
                                <Textarea placeholder="Paste your code here..." onChange={handleBody} value={temp.body} className="min-h-[200px] font-mono text-sm resize-none"
                                />
                            </div>
                        </div>

                        <Button onClick={handleSubmit} className="w-full" disabled={!temp.lang || !temp.body}>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Code Tab
                        </Button>

                        {(!temp.lang || !temp.body) && (<Small text="Fill in both fields to add a code tab" className="text-muted-foreground text-center block"/>)}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-lg">
                            <Eye className="h-5 w-5" />
                            Live Preview
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {hasCode ? (
                            <div className="space-y-3">
                                <Small text="Your code tabs will appear below:" className="text-muted-foreground" />
                                <div className="border rounded-lg overflow-hidden">
                                    <CodeTabs codes={codes} />
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 space-y-3">
                                <Code2 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                                <div>
                                    <Small text="No code tabs yet" className="text-muted-foreground block mb-1" />
                                    <Small text="Add your first code tab using the form" className="text-muted-foreground/70 text-xs" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {hasCode && (
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Current Tabs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(codes).map((lang) => (
                                <Badge key={lang} variant="outline" className="px-3 py-1">
                                    {lang}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}