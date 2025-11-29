import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"
import { content } from "../beginner/content"
import ContentMapper from "../edit/components/content-interpreter"

export default function PageLayout({PageContent}:{PageContent:string[]}){
    return (
        <>
        <SidebarProvider>
            <AppSidebar content={content}/>
                <div className="w-[80vw] mt-[20vh] flex flex-row flex-wrap justify-center gap-10">
                    <div className="flex-1 align-middle"><ContentMapper content={PageContent}/></div>
                    <div className="flex-1 align-middle"></div>
                </div>
            </SidebarProvider>
        </>
    )
}