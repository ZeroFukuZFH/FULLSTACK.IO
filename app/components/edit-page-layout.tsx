"use client"

import { Code, CodeHeader,CodeBlock } from "@/components/animate-ui/components/animate/code";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus } from "lucide-react";
import { useState } from "react";
import { KeyboardEvent,ChangeEvent } from "react";
interface ChildProps {
  id?: string; // unique ID
  type?: string; // heading / paragraph / code etc.
  items?: string[]; 
}

export default function EditSlug({ content_left, content_right }: { 
  content_left?: ChildProps[], 
  content_right?: ChildProps[] 
}) {
  // Assuming both arrays have the same length
  const length = content_left?.length || content_right?.length || 0;
  
  return (
    <section className="mt-20 flex flex-col gap-4 flex-wrap">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="flex flex-row gap-8">
          <div className="flex-1 flex-wrap">
            <BlockInterpreter content={content_left?.[index]} />
          </div>
          <div className="flex-1 flex-wrap">
            <BlockInterpreter content={content_right?.[index]} />
          </div>
        </div>
      ))}
      <span><AddBlock/></span>
    </section>
  );
}


function BlockInterpreter({ content }: { content?: ChildProps }) {
  if (!content) return null;
  
  const contentBody: string = content?.items ? content.items.join(' ') : '';
  
  switch(content?.type) {
    case 'h1': 
      return <h1 className="text-2xl font-bold mb-4">{contentBody}</h1>;
    case 'p': 
      return <p className="mb-4">{contentBody}</p>;   
    case 'code': 
      return (
       <Code code={contentBody} className="w-[30vw] m-w-[320px] h-auto">
            <CodeHeader copyButton/>
            <CodeBlock
                cursor={true}
                lang="tsx"
                writing={true}
                duration={2000}
            />
        </Code>
        )
    default: 
      return null;
  }
}

const available_blocks = {
  heading:['h1','h2','h3','h4','h5',],
  paragraph: ['p','italic','bold'],
  code:['code'],
  media:['image','video']
}

function AddBlock(){
  const [state,setState] = useState(false)
  const [block,setBlock] = useState<string>()
  const [block_content, setBlockContent] = useState<string>()

  const handleState = (item:string) => {
    setState(prev => !prev)
    setBlock(item)
    // hoist data to refresh
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement> ) => {
    setBlockContent(event.target.value)
  }

  const handleKeyEnter = (event:KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      // refresh and post req
    }
  }

  return (
    !state ?
    <DropdownMenu>
      <DropdownMenuTrigger>
          <Plus/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        
        {Object.entries(available_blocks).map(([item,block_type])=>(
          <div key={item}>
          <DropdownMenuLabel>{item.toUpperCase()}</DropdownMenuLabel>
          <DropdownMenuSeparator />
            {block_type.map(item=>(
              <DropdownMenuItem key={item} onClick={()=>handleState(item)}>{item}</DropdownMenuItem>
            ))}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu> :
    <>
      <input type="text" value={block_content} onChange={handleChange} title="Place your Text here" placeholder="Place your text here" onKeyDown={handleKeyEnter}></input>
      
    </>
  )
}