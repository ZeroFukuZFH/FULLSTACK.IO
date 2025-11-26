"use client"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown, Code2, Monitor, Subtitles, Plus } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Large, Small } from "@/app/components/typography"
import { Textarea } from "@/components/ui/textarea"
import { useContext, useState, type ChangeEvent, createContext } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CodeTabs } from '@/components/animate-ui/components/animate/code-tabs';
import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { Input } from "@/components/ui/input"

const content = [
  {
    title: 'none',
    icon: null
  },
  {
    title: 'code',
    icon: <Code2 />
  },
  {
    title: 'visual',
    icon: <Monitor />
  },
  {
    title: 'html',
    icon: <Subtitles />
  },
]

interface VisualizerType {
  content: typeof content[number];
  hasContent: boolean;
}

interface VisualContextType {
  visualizer: VisualizerType;
  setVisualizer: React.Dispatch<React.SetStateAction<VisualizerType>>;
}

const VisualContext = createContext<VisualContextType | undefined>(undefined);

const useVisualizer = () => {
  const ctx = useContext(VisualContext);
  if (!ctx) throw new Error("useVisualizer must be used inside VisualContext.Provider");
  return ctx;
};

export default function AddContent({ title }: { title: string }) {
  const [visualizer, setVisualizer] = useState<VisualizerType>({
    content: content[0],
    hasContent: false,
  });

  return (
    <VisualContext.Provider value={{ visualizer, setVisualizer }}>
      <div className="flex flex-col w-full">
        <Large text={title} />
        <div className="flex flex-row justify-evenly p-4 gap-2">
          <div className="w-[50%]"><AppTextArea /></div>
          <div className="w-[50%]"><AppVisualizerArea /></div>
        </div>
      </div>
    </VisualContext.Provider>
  );
}

function AppTextArea() {
  const [preview, setPreview] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPreview(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row justify-end gap-2 w-full">
        <ToggleTextStyleGroup />
        <ToggleTextIndentationGroup />
      </div>
      <Textarea value={preview} placeholder="start typing..." onChange={handleChange} className="" />
    </div>
  )
}

function ToggleTextIndentationGroup() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

function ToggleTextStyleGroup() {
  return (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

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
    
    const [codes,setCodes] = useState({Sample:`include <stdio.h>
        
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
    <Large text="Add Code Tabs"/>
    </div>
    <div className="flex flex-col gap-2">
        <Textarea placeholder="Place Code here..." onChange={handleBody} value={temp.body}/>
        <div className="flex flex-row gap-2">
            <Input type="text" placeholder="Language" onChange={handleLang} value={temp.lang}/>
            <Button onClick={handleSubmit}>submit</Button>
        </div>
    </div>
    
    <Small text="preview"/>
    
    <CodeTabs codes={codes} className="max-w-[40vw]"/> 
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