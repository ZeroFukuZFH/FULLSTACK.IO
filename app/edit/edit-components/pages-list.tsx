"use client";

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useFilter } from './filter-provider';
import { PageContent } from './page-content';
import { PageFooter } from "./page-footer";
import { AddPageForm } from "./add-page-form";
import { useTopicData } from './topic-data-provider'
import { Plus } from "lucide-react";

export interface PageProps { 
  _id: string;
  title: string;
  type: string;
  items: string[];
}

export function PagesList() {
  const { state } = useFilter();
  const { pages} = useTopicData(); 
  
  const filteredPages = state.toLowerCase() === 'select level' 
    ? pages 
    : pages.filter((item) => item.type === state.toLowerCase());

  if (!pages.length) {
    return (
      <Card className="w-[80vw]">
        <CardHeader>
          <CardTitle>No topics found</CardTitle>
          <CardDescription>Create your first topic to get started</CardDescription>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Plus />
              </DropdownMenuTrigger>
              <AddPageForm/>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-[80vw]">
      <CardHeader>
        <CardTitle>
          {state === 'Select Level' ? 'All Levels' : state}
          <span className="ml-2 text-sm text-gray-500">
            ({filteredPages.length} topics)
          </span>
        </CardTitle>
        <CardDescription>Filtered by: {state}</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer flex items-center gap-2">
              <Plus size={16} />
              Add New Topic
            </DropdownMenuTrigger>
            <AddPageForm/>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <PageContent state={filteredPages}/>
      <PageFooter />
    </Card>
  );
}