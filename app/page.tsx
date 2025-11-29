"use client";

import { Large, } from "./components/typography";
import { ReactNode, useEffect, useState } from "react";
import './components/slideIn.css'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, BookOpen, Users, Rocket, Sparkles, Github, Twitter, Youtube, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const content = {
    title: "FULLSTACK.IO",
    body: '"teaching developers how to build full-stack projects"',
    card: {
        beginner: {
            title: "Start Learning",
            desc: "Beginner",
            body: "Create a Full-Stack Web App using stack components such as HTML, CSS, JavaScript, PHP, and MongoDB",
            icon: <BookOpen className="h-6 w-6" />,
        },
        intermediate: {
            title: "Know Stuff Already?",
            desc: "Intermediate",
            body: "Advance your skills with modern frameworks, APIs, and database optimization techniques",
            icon: <Users className="h-6 w-6" />,
        },
        advanced: {
            title: "I Want to Improve",
            desc: "Advanced",
            body: "Master advanced concepts like microservices, DevOps, and system architecture design",
            icon: <Rocket className="h-6 w-6" />,
            url:'advanced'
        },
        custom: {
            title: "Explore",
            desc: "Custom Path",
            body: "Create your own learning journey with personalized projects and mentorship",
            icon: <Sparkles className="h-6 w-6" />,
        }
    },
    explanation: {
        head: 'WHAT IS A FULLSTACK APP?',
        sub: 'Understanding the Technology Stack',
        paragraph: 'A full-stack application encompasses both front-end and back-end development. The front-end (client-side) handles user interface and experience, while the back-end (server-side) manages data, logic, and server operations. Together, they create complete, functional web applications.'
    },

    herosection: {
        head: 'OUR GOAL',
        sub: 'Make it Simpler',
        paragraph: 'Are you tired of being given the advice \"Just Google It\" But even googling it takes time and Information is all over the place Me too so that\'s why I made this website. Software Engineering is already hard, compiling all the materials to learn software engineering makes it even harder. This Website was made not to be the one-size fits all in developing full-stack applications, but it was meant to fast-track developers into learning how to do fullstack. ',
    },

    socials: [
        { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: '#' },
        { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#' },
        { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: '#' },
        { name: 'Email', icon: <Mail className="h-5 w-5" />, url: '#' },
    ]
}

export default function Page() {
    return (
        <div className="flex flex-col h-auto align-middle bg-linear-to-b from-background to-muted/20">
            {/* Hero Section */}
            <div className="h-[180vh] flex flex-col justify-center items-center p-8 gap-8 text-center">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <Animated element={
                        <div className="space-y-4">
                            <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                {content.title}
                            </h1>
                            <Large text={content.body} className="text-xl text-muted-foreground italic" />
                        </div>
                    } method="slideIn" />
                    
                    <Animated element={<Cards />} method="fadeIn" delay={200} />
                </div>
            </div>

            {/* Explanation Section */}
            <div className="py-20 px-8 bg-background">
                <div className="max-w-4xl mx-auto">
                    <Animated element={<Explanation />} method="slideIn" />
                </div>
            </div>

            {/* Socials Section */}
            <div className="py-16 px-8 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <Animated element={<Socials />} method="fadeIn" />
                </div>
            </div>
        </div>
    )
}

function Cards(){
    type levels = 'beginner' | 'intermediate' | 'advanced' | 'custom'
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-6 max-w-4xl mx-auto w-full">
            {(Object.keys(content.card) as levels[]).map((level,index) => {
                    const card = content.card[level];
                    return (
                        <div key={index} className="overflow-hidden">
                            <Animated element={<CardLinks title={card.title} desc={card.desc.toLowerCase()} content={card.body} icon={card.icon} />} 
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
    const [node,setNode] = useState<ReactNode>(<div className="opacity-0">{element}</div>)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setNode(
                <div className={`${method} opacity-100 transition-all duration-500`}>
                    {element}
                </div>
            )
        },delay)

        return () => clearTimeout(timer)
    },[delay, element, method])
    
    return node
}

interface CardLinksProps {
    title:string,
    desc:string,
    content:string,
    icon: ReactNode
}

function CardLinks({ title, desc, content, icon }: CardLinksProps) {
    const getVariant = (desc: string) => {
        switch(desc) {
            case 'beginner': return 'default';
            case 'intermediate': return 'secondary';
            case 'advanced': return 'destructive';
            default: return 'outline';
        }
    }

    return (
        <Card className="w-full h-full group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 flex flex-col">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {icon}
                    </div>
                    <Badge variant={getVariant(desc)} className="text-xs">
                        {desc}
                    </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {content}
                </p>
            </CardContent>
            <CardFooter>
                <Link href={`/${desc}/what-even-is-a-tech-stack-`}>
                    <Button variant="ghost" className="w-full group/btn justify-between">
                    Start Learning
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                </Link>
                
            </CardFooter>
        </Card>
    );
}

function Explanation() {
    return (
        <div className="text-center space-y-8">
            <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-4 py-1">
                    Understanding Full-Stack
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight">
                    {content.explanation.head}
                </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="text-left space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                        {content.explanation.sub}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {content.explanation.paragraph}
                    </p>
                </div>
                
                <Card className="bg-linear-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-6">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                                <span className="font-medium">Frontend</span>
                                <Badge variant="secondary">Client</Badge>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                                <span className="font-medium">Backend</span>
                                <Badge variant="secondary">Server</Badge>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                                <span className="font-medium">Database</span>
                                <Badge variant="secondary">Storage</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                
            </div>

            <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-4 py-1">
                    Understanding our M.O
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight">
                    {content.herosection.head}
                </h2>
                <div className="text-left space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">
                        {content.herosection.sub}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {content.herosection.paragraph}
                    </p>
                </div>

            </div>
        </div>
    )
}

function Socials() {
    return (
        <div className="text-center space-y-8">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold">Join Our Community</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    Connect with other developers and stay updated with the latest tutorials and resources.
                </p>
            </div>
            
            <div className="flex justify-center gap-4">
                {content.socials.map((social, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full hover:scale-110 transition-transform"
                    >
                        {social.icon}
                    </Button>
                ))}
            </div>
        </div>
    )
}