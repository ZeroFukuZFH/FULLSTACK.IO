"use client";

import { CardContent } from "@/components/ui/card";
import { ContentOptions } from "./content-options/content-options";
import { PageProps } from "./pages-list";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare, Edit, Trash } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import Link from "next/link";

export function PageContent({ state }:{state:PageProps[]}) {

  return (
    <CardContent className="p-4 md:p-6">
      {state.map((item, index) => (
        <div key={index} className="flex flex-col justify-center items-center mb-6 last:mb-0">
            <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 border-b p-4 sm:p-3">
                  <span className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 w-full sm:w-auto">
                    <div className="flex items-center gap-2">
                      <i className="opacity-50 text-sm sm:text-base whitespace-nowrap">title :</i>
                      <div className="font-medium truncate max-w-[150px] sm:max-w-[200px] md:max-w-none">{item.title}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="opacity-50 text-sm sm:text-base whitespace-nowrap">type :</i> 
                      <GetLevelStyle level={item.type}/>
                    </div>
                  </span>
                  <div className="mt-2 sm:mt-0">
                    <ContentOptions topicId={item._id}/>
                  </div>
                </div>
            </div>
            <Items item={item}/>
        </div>
      ))}
    </CardContent>
  );
}

function Items({item}:{item:PageProps}){
  return (
    <div className="w-full">
      {item.items.map((parent,index)=>(
        <div key={index} className={`p-4 sm:p-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-2 ${index > 0 && 'border-t'} w-full`}>
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="text-sm sm:text-base font-medium min-w-20 sm:min-w-[100px]">Item no. {index + 1}</div>
            <div className="text-sm sm:text-base truncate max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">{parent}</div>
          </div>
          <div className="w-full sm:w-auto flex justify-end sm:justify-normal">
            <ButtonGroup className="flex-wrap sm:flex-nowrap gap-1 sm:gap-0">
              <Button variant={'outline'} size={'sm'} className="h-8 sm:h-9 px-2 sm:px-3" asChild>
                <Link href={`/${item.type}/${parent}/edit`} >
                  <Edit className="h-3 w-3 sm:h-4 sm:w-4"/>
                </Link>
              </Button>
              
              <Button variant={'outline'} size={'sm'} className="h-8 sm:h-9 px-2 sm:px-3" asChild>
                <Link href={`/${item.type}/${parent}`} >
                  <ArrowUpRightFromSquare className="h-3 w-3 sm:h-4 sm:w-4"/>
                </Link>
              </Button>
              <Button variant={'destructive'} size={'sm'} className="h-8 sm:h-9 px-2 sm:px-3">
                <Trash className="h-3 w-3 sm:h-4 sm:w-4"/>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      ))}
    </div>
  )
}

function GetLevelStyle({level}:{level:string}) {
  let className;

  switch (level.toLowerCase()) {
    case "beginner":
      className = "text-green-500";
      break;
    case "intermediate":
      className = "text-orange-500";
      break;
    case "advanced":
      className = "text-red-500";
      break;
    default:
      className = "text-gray-500";
  }

  return <p className={`${className} font-medium text-sm sm:text-base`}>{level}</p>;
}