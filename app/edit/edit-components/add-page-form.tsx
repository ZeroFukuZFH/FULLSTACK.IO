"use client";

import { ChangeEvent,useState } from "react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import axios from 'axios'
import { useTopicData } from "./topic-data-provider";
interface PageProps {
  title: string;
  type: string;
}

export function AddPageForm() {

  const [newPage, setNewPage] = useState<PageProps>({ title: '', type: ''});

  const { refreshPages } = useTopicData(); 

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPage(prev => ({ ...prev, title: e.target.value }));
  };

  const handleType = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPage(prev => ({ ...prev, type: e.target.value }));
  };

  const handleSave = () => {
    const postNewTopic = async ({title,type}:PageProps) => {
      try {
        await axios.post("http://localhost:3001/topics",{
          title:title,
          type:type,
          items:[]
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        await refreshPages()
      } catch (error) {
        console.error(error)
      }
    } 
    postNewTopic(newPage)
  }
  const handleCancel = () => {
    setNewPage({ title: '', type: ''}); // Reset form
  };
  

  return (
    <DropdownMenuContent>
      <FieldSet className="w-[20vw] p-2 min-w-[120px]">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input 
              id='title' 
              value={newPage.title} 
              onChange={handleTitle} 
              autoComplete="off" 
              placeholder="place your title here" 
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="type">Type</FieldLabel>
            <Input 
              id='type' 
              value={newPage.type} 
              onChange={handleType} 
              autoComplete="off" 
              placeholder="e.g beginner/intermediate/advanced/custom" 
            />
          </Field>
          <Field orientation={'horizontal'} className="justify-end">
            <Button className="w-[100px]" variant={'default'} onClick={handleSave}>
              save
            </Button>
            <Button className="w-[100px]" variant={'outline'} onClick={handleCancel}>
              cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </DropdownMenuContent>
  );
}