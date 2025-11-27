"use client";

import { Large } from "../components/typography";
import TextEditor from "./components/add-text-edit-content"
import Visualizer, { VisualizerProvider } from "./components/add-visualizer-content"
import { Button } from "@/components/ui/button";
import { Animated } from "../page";
import '../components/slideIn.css'
import { useState } from "react";

export default function Page(){
    return (
        <>
        <div className="flex items-center pt-[10vh] w-screen">
        <div className="m-4 w-full flex flex-col h-screen">
            <div className=" w-full h-[20vh] flex items-center justify-center">
                <Animated element={<Large text="Create new page"/>} method="slideIn"/>
            </div>
            <AddSection/>
        </div>
        </div>
        </>
    )
}

function AddSection(){
    const [state,setState] = useState({toggle:false,isNew:false})
   
    const handleIsExisting = () => {
        setState({toggle:true,isNew:false})
    }

    const handleIsNew = () => {
        setState({toggle:true,isNew:true})
    }
    return (
        <>
        <div className="flex flex-row justify-center items-center w-full gap-2">
            <Button variant="default" className="w-full max-w-[140px] cursor-pointer" onClick={handleIsNew}>Create</Button>
            <Button variant="outline" className="w-full max-w-[140px] cursor-pointer" onClick={handleIsExisting}>Existing</Button>
        </div>
        {state.toggle && <AddContent/>}
        </>
    )
}

function AddContent() {
  return (
    <VisualizerProvider>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-evenly p-4 gap-10 flex-wrap">
          <div className="flex-1"><TextEditor /></div>
          <div className="flex-1"><Visualizer /></div>
        </div>
      </div>
    </VisualizerProvider>
  );
}
