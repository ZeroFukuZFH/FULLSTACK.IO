import { useContext, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CodeTabs } from '@/components/animate-ui/components/animate/code-tabs';

import { Input } from "@/components/ui/input"

import { Large, Small } from "@/app/components/typography"

const useVisualizer = () => {
  const ctx = useContext(VisualContext);
  if (!ctx) throw new Error("useVisualizer must be used inside VisualContext.Provider");
  return ctx;
};

function AppVisualizerArea() {
  const { visualizer } = useVisualizer()
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full justify-end"><ToggleAppVisual /></div>
      {visualizer.hasContent && <ChooseVisual ContentType={visualizer.content.title}/>}
    </div>
  )
}

function ChooseVisual({ContentType}:{ContentType:string}){
    return (
        <>
        {ContentType === content[1].title && <MakeCode/>}
        {ContentType === content[2].title && <MakeVisual/>}
        {ContentType === content[3].title && <MakeHTML/>}
        </>
    )
}


function MakeCode() {
    
    const [codes,setCodes] = useState({Sample:`#include <stdio.h>

int main(void){
    printf("hello world");
    return 0;
}`
    })

    const [temp,setTemp] = useState({lang:'',body:''})

    const handleLang = (event) => {
        setTemp(prev => ({...prev,lang:event.target.value}))
    }

    const handleBody = (event) => {
        setTemp(prev => ({...prev,body:event.target.value}))
    }

    const handleSubmit = () => {
        try {
            if(temp.lang === '' || temp.body === ''){
                throw new Error('empty arguements')
            }
            setCodes(prev => ({...prev,[temp.lang]:temp.body}))
            setTemp({lang:'',body:''})
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
    <div className="flex flex-row items-center justify-between">   
    <div className="border-b pb-4 mb-4 w-full ">
        <Large text="Add Code Tabs"/>
    </div>
    
    </div>
    <div className="flex flex-col gap-2">
        <Textarea placeholder="Place Code here..." onChange={handleBody} value={temp.body} className="h-32 resize-none overflow-auto"/>
        <div className="flex flex-row gap-2">
            <Input type="text" placeholder="Language" onChange={handleLang} value={temp.lang}/>
            <Button onClick={handleSubmit}>submit</Button>
        </div>
    </div>
    
    <Small text="preview"/>
    
    <CodeTabs codes={codes} className="w-full"/> 
    </>
  );
}


function MakeVisual(){
    return(
        <>
        </>
    )
}

function MakeHTML(){
    return(
        <>
        </>
    )
}

function ToggleAppVisual() {
  const { visualizer, setVisualizer } = useVisualizer()

  const handleVisual = (item: typeof content[number]) => {
    setVisualizer({
      content: item,
      hasContent: item.title !== "none",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-[16%] justify-between flex items-center"
        >
          {visualizer.content.title}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          {content.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="flex justify-between items-center"
              onClick={() => handleVisual(item)}
            >
              {item.title}
              {item.icon}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}