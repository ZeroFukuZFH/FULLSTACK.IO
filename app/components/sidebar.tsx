  "use client"

  import { Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarHeader } from "@/components/ui/sidebar"
  import { Collapsible,CollapsibleContent,CollapsibleTrigger } from "@/components/ui/collapsible"
  import { Button } from "@/components/ui/button"
  import Link from "next/link"
  import { createContext, useContext } from "react"
  interface ChildProps{
    title:string
    items:string[]
  }
  interface ParentProps {
      title:string
      items:ChildProps[]
  }
  export interface SidebarProps {
    title:string
    items:ParentProps[]
  }

  const ContentContext = createContext<string>('')

  export function AppSidebar({content}:{content?:SidebarProps}) {
    return (
      <ContentContext.Provider value={content?.title ? content.title : ''}>
        <Sidebar className="overflow-y-scroll ">
        <div>
        <SidebarHeader className="pt-[30%]"><b>{content?.title}</b></SidebarHeader>
        <SidebarContent>
          {content?.items.map((item, index) => (
            <ParentContent key={index} item={item}/>
          ))}
        </SidebarContent>
        </div>
      </Sidebar>
      </ContentContext.Provider>
    )
  }

  function ParentContent({ item }: { item: ParentProps }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {item.items?.map((child, index) => (
            <ChildContent key={index} content={child} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

  function ChildContent({ content }: { content: ChildProps }) {
  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger className="w-full">
        <SidebarMenuButton asChild>
          <span><b>{content.title}</b></span>
        </SidebarMenuButton>
      </CollapsibleTrigger>

      <div className="border-l pl-4 mt-2 ml-4 gap-2 flex flex-col">
        {content.items.map((item, index) => (
          <DropDownOptions key={index} item={item} />
        ))}
      </div>
    </Collapsible>
  );
}

  function DropDownOptions({ item }: { item: string }) {
    const parent = useContext(ContentContext).toLowerCase();
    const nextPath = item.replace(/[?\.\s]+/g, "-").toLowerCase();
    
  return (
    <CollapsibleContent>
      <Link href={`/${parent}/${nextPath}`}>
        <Button variant="link">{item}</Button>
      </Link>
    </CollapsibleContent>
  );
}


