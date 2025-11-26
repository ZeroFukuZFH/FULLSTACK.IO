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
            body:"Create a Full-Stack Web App using stack components such as HTML,CSS,javascript,PHP, and mongoDB"
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
    },
    explanation:{
        head:[
            'WHAT IS A FULLSTACK APP?',
        ],
        sub:[
            'what is a stack?'
        ],
        paragraph:[
            'lorem ipsum'
        ],

    }
}

export default function Page(){
    
    return (
        <>
        <div className="h-[120vh] flex flex-col justify-center p-4 gap-10">
            <div className=" flex flex-col p-4 text-center gap-4 overflow-hidden">
                <Animated element={<Large text={content.title}/>} method="slideIn"/>
                <Animated element={<Small text={content.body}/>} method="fadeIn"/> 
            </div>          
            <Cards/>
        </div>    
        <div className="flex w-full  flex-col align-middle  gap-4">
            <Explanation/>
        </div>
        <div className="flex items-center w-full justify-center ">
            <Socials/>  
        </div>  
        </>
    )
}

function Cards(){
    type levels = 'beginner' | 'intermediate' | 'advanced' | 'custom'
    return (
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
        
    )
}

interface AnimatedProps {
    element:ReactNode,
    delay?:number,
    method:string
}

export function Animated({element,delay = 0,method}:AnimatedProps){
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

function Explanation(){
    return (
        <>
        <Large text={content.explanation.head[0]}/>
        <br/>
        <Large text={content.explanation.sub[0]}/>
        <Small text={content.explanation.paragraph[0]}/>

        </>
    )
}

function Socials(){
    return <Large text="Socials"></Large>
}
