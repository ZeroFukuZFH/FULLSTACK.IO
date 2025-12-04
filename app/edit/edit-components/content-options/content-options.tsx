"use client";

import { DeleteButton } from './components/delete';
import { ButtonGroup } from "@/components/ui/button-group";
import { AddButton } from './components/add';

import EditButton from "./components/edit";
export function ContentOptions() {

  return (
    <ButtonGroup>
      <AddButton/>
      <EditButton/>
      <DeleteButton/>
    </ButtonGroup>
  );
}




