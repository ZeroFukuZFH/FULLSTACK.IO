"use client";

import { Card, CardAction,  CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useFilter } from './filter-provider'
import { PageContent } from './page-content'
import { PageFooter } from "./page-footer";
import { AddPageForm } from "./add-page-form";
import { useState } from "react";

export interface PageProps { 
  title: string; // introduction
  type: string; // from beginner
  items: string[] // what even is a tech stack
}

export function PagesList() {
  const { state } = useFilter();

  const [pages, setPages] = useState<PageProps[]>( // placeholder
    [
      { title: 'introduction', type: 'beginner', items:[
          'what-even-is-a-tech-stack-'
      ]},
    ]
  );

  const filteredPages = state.toLowerCase() === 'select level' 
    ? pages 
    : pages.filter((item) => item.type === state.toLowerCase());

    
  return (
    <Card className="w-[80vw]">
      <CardHeader>
        <CardTitle>{state === 'Select Level' ? 'All Levels' : state}</CardTitle>
        <CardDescription> - Filtered by -{state}-</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'outline'}>+</Button>
            </DropdownMenuTrigger>
            <AddPageForm />
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <PageContent state={filteredPages} />
      <PageFooter />
    </Card>
  );
}