"use client"

import { AppSidebar } from "@/app/components/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useState } from "react"

export default function Page(){

    const [data,setData] = useState()

    return (
        <SidebarProvider>
            <AppSidebar/>
        </SidebarProvider>
    )
}