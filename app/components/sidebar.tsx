"use state"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarHeader
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
 
const content = {
    title:'beginner',
    items:[
      {
        title:'front-end',
        items:[
          {
            title:'html',
            items:[
              'what is html?',
              'divs,rows,blocks?'
            ]
          },
          {
            title:'css',
            items:[]
          }
        ]
      },
      {
        title:'back-end'
      }
    ]
}


export function AppSidebar() {
  return (
    <Sidebar className="mt-[10vh]">
      <div className="p-2">
      <SidebarHeader>{content.title}</SidebarHeader>
      <SidebarContent className="">
        {content.items.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((content,index)=>(
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="w-full">
                      <SidebarMenuButton>
                        <span>{content.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                      <div className=" border-l pl-4 mt-2 ml-4 gap-2 flex flex-col">
                        {content.items.map((item, index)=>(
                        <CollapsibleContent key={index}>
                          <span>{item}</span>
                        </CollapsibleContent>
                        ))}
                      </div>
                    </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      </div>
    </Sidebar>
  )
}