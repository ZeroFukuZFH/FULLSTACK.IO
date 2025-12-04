'use client'

import EditSlug from "@/app/components/edit-page-layout";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { items_left, items_right } from "../temp-data";



export default function Page(){
    const path:string[] = usePathname().trim().split('/').filter(item => item !== '')
    const editPath = {
        type:path[0],
        title:path[1]
    }
    useEffect(()=>{
        console.log(editPath)
    },[])
    return <EditSlug content_left={items_left} content_right={items_right}/>
}
