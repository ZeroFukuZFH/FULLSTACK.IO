"use client";

import { Large, Small } from "./components/typography";
import { ReactNode, useEffect,useState } from "react";
import './components/slideIn.css'
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react"

const content = {
    title:"FULLSTACK.IO",
    body:'"teaching developers how to build full-stack projects"',
    card:{
        beginner:{
            title:"Start Learning",
            desc:"Beginner",
            body:""
        },
        intermediate:{
            title:"Know stuff already?",
            desc:"Intermediate",
            body:""
        },
        advanced:{
            title:"I Want to Improve",
            desc:"Advanced",
            body:""
        },
        custom:{
            title:"Explore",
            desc:"???",
            body:""
        }
    }
}

export default function Home(){
    type levels = 'beginner' | 'intermediate' | 'advanced' | 'custom'
    return (
        <div className="h-[120vh] flex flex-col justify-center p-4 gap-10">
            <div className=" flex flex-col p-4 text-center gap-4 overflow-hidden">
                <Animated element={<Large text={content.title}/>} method="slideIn"/>
                <Animated element={<Small text={content.body}/>} method="fadeIn"/> 
            </div>          
            <div className="grid grid-cols-2 grid-rows-2 gap-4 overflow-hidden">
                {(Object.keys(content.card) as levels[]).map((level,index) => {
                    const card = content.card[level];
                    return (
                        <div key={index} className="overflow-hidden">
                            <Animated element={<CardLinks title={card.title} desc={card.desc} content={card.body} />} 
                            delay={index * 100} method="slideIn"/>
                        </div>
                    );
                })}
            </div>
            
        </div>      
    )
}

interface AnimatedProps {
    element:ReactNode,
    delay?:number,
    method:string
}

function Animated({element,delay = 0,method}:AnimatedProps){
    const [node,setNode] = useState<ReactNode>(<div className=""></div>)
    useEffect(()=>{
        setTimeout(()=>{
            setNode(
                <div className={method}>
                    {element}
                </div>
            )
        },delay)

        console.log('re-rendered - slide in')
    },[])
    
    return node
}

interface CardLinksProps {
    title:string,
    desc:string,
    content:string
}

function CardLinks({ title, desc, content }: CardLinksProps) {
    return (
        <Card className="w-[40vw] max-w-[400px] h-[25vh] overflow-auto">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Difficulty : {desc}</CardDescription>
                <CardAction>
                    <Button variant="link">Start <ArrowRightIcon /></Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
            </CardContent>
        </Card>
    );
}


