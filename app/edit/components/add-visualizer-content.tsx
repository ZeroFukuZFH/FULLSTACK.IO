"use client"

import { ChevronDown, Code2, Monitor, Subtitles } from "lucide-react"
import { useContext, useState, createContext } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import MakeCode from "./add-visualizer-content-components/MakeCode"
import MakeVisual from "./add-visualizer-content-components/MakeHTML"
import MakeHTML from "./add-visualizer-content-components/MakeVisual"

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

export const useVisualizer = () => {
  const ctx = useContext(VisualContext);
  if (!ctx) throw new Error("useVisualizer must be used inside VisualContext.Provider");
  return ctx;
};

export function VisualizerProvider({ children }: { children: React.ReactNode }) {
  const [visualizer, setVisualizer] = useState<VisualizerType>({
    content: content[0],
    hasContent: false,
  });

  return (
    <VisualContext.Provider value={{ visualizer, setVisualizer }}>
      {children}
    </VisualContext.Provider>
  );
}

export default function Visualizer() {
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
          className="max-w-[140px] justify-between flex items-center"
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