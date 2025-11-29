import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/sidebar"
import { content } from "./content"

export default function Page(){
    return (
        <section>
            <SidebarProvider>
                <AppSidebar content={content}/>
            </SidebarProvider>
        </section>
    )
}