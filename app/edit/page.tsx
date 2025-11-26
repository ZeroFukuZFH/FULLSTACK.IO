"use client";

import { AppSidebar } from "../components/sidebar";
import { SidebarProvider} from "@/components/ui/sidebar"
import { Large, Small } from "../components/typography";
import  AddContent from "./components/add-text-content"
import { Button } from "@/components/ui/button";
import { Animated } from "../page";
import '../components/slideIn.css'
import { useState } from "react";

export default function Page(){
    return (
        <>
        <div className="flex items-center pt-[10vh] w-screen">
        <SidebarProvider >
        <AppSidebar />
        <div className="m-4 w-full flex flex-col h-screen">
            <div className=" w-full h-[20vh] flex items-center justify-center">
                <Animated element={<Large text="Create new page"/>} method="slideIn"/>
            </div>
            <AddSection/>
        </div>
        </SidebarProvider>
        </div>
        
        
        </>
    )
}

function AddSection(){
    const [state,setState] = useState({toggle:false,isNew:false})
    const handleIsNew = () => {
        setState({toggle:true,isNew:true})
    }

    const handleIsExisting = () => {
        setState({toggle:true,isNew:false})
    }
    return (
        <>
        <div className="flex flex-row justify-center items-center w-full gap-2">
            <Button variant="default" className="w-full max-w-40 cursor-pointer" onClick={handleIsNew}>Create</Button>
            <Button variant="outline" className="w-full max-w-40 cursor-pointer" onClick={handleIsExisting}>Existing</Button>
        </div>
        {state.toggle && <AddContent title={state.isNew ? 'Create New Page' : 'Create from Existing Page'}/>}
        </>
    )
}

