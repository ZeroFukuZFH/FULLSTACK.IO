"use client";

import { DeleteButton } from './components/delete';
import { ButtonGroup } from "@/components/ui/button-group";
import { AddButton } from './components/add';
import EditButton from "./components/edit";

export function ContentOptions({topicId}:{topicId:string}) {
  return (
    <ButtonGroup className="flex-wrap sm:flex-nowrap gap-1 sm:gap-0">
      <AddButton topicId={topicId}/>
      <EditButton topicId={topicId}/>
      <DeleteButton topicId={topicId}/>
    </ButtonGroup>
  );
}