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
    <CardContent>
      {state.map((item, index) => (
        <div key={index} className=" flex flex-col justify-center items-center ">
            <div className="w-full">
                <div className="flex justify-between items-center border-b p-2">
                <span className="flex gap-10 w-full"><i className="opacity-50">title :</i> <div>{item.title}</div> <i className="opacity-50">type :</i> <GetLevelStyle level={item.type}/></span>
                <ContentOptions/>
            </div>
            </div>
            {item.items.map((parent,index)=>(
                <div key={index} className={`p-2 justify-between w-[90%] flex items-center ${index > 0 && 'border-t'}`}>
                    <div className="justify-center flex">Item no. {index}</div>
                    <div className="w-full justify-center flex">{parent}</div>
                    <ButtonGroup>
                        <Button variant={'outline'} size={'sm'}>
                            <Link href={`/${item.type}/${parent}/edit`} >
                                <Edit/>
                            </Link>
                        </Button>
                        
                        <Button variant={'outline'} size={'sm'}>
                            <Link href={`/${item.type}/${parent}`} >
                                <ArrowUpRightFromSquare/>
                            </Link>
                        </Button>
                        <Button variant={'destructive'} size={'sm'}>
                            <Trash/>
                        </Button>
                    </ButtonGroup>
                </div>
            ))}
        </div>
      ))}
    </CardContent>
  );
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

  return <p className={className}>{level}</p>;
}
