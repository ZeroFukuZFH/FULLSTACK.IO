"use client"

import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuViewport, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search, Code2 } from "lucide-react"

// test
const content = {
    beginner: {
        title: 'Beginner',
        body: [
        {
            title: 'HTML',
            href: 'html',
            desc: 'Learn the foundation of web development with HTML structure and semantics'
        },
        {
            title: 'CSS',
            href: 'css',
            desc: 'Style your websites with modern CSS techniques and responsive design'
        },
        {
            title: 'JavaScript',
            href: 'javascript',
            desc: 'Add interactivity and dynamic behavior to your web applications'
        },
        {
            title: 'PHP',
            href: 'php',
            desc: 'Server-side scripting for building dynamic web applications'
        },
        {
            title: 'MongoDB',
            href: 'mongodb',
            desc: 'NoSQL database management for modern web applications'
        }
        ]
    },
    intermediate: {
        title: 'Intermediate',
        body: [{
            title: 'REACT',
            href: '#',
            desc: 'Build modern user interfaces with the popular React library'
        },
        {
            title: 'Node.js',
            href: '#',
            desc: 'Server-side JavaScript runtime for building scalable applications'
        },
        {
            title: 'Express',
            href: '#',
            desc: 'Minimal and flexible Node.js web application framework'
        },
        {
            title: 'PostgreSQL',
            href: '#',
            desc: 'Powerful open-source relational database system'
        }]
    },
    advanced: {
        title: 'Advanced',
        body: [{
            title: 'Microservices',
            href: '#',
            desc: 'Architectural pattern for distributed systems'
        },
        {
            title: 'DevOps',
            href: '#',
            desc: 'Development operations and deployment strategies'
        },
        {
            title: 'System Design',
            href: '#',
            desc: 'Design scalable and maintainable system architectures'
        }]
    },
    allcontent: {
        title: 'References',
        body: [{
            title: 'Documentation',
            href: '#',
            desc: 'Comprehensive guides and API references'
        },
        {
            title: 'Cheat Sheets',
            href: '#',
            desc: 'Quick reference for common commands and syntax'
        },
        {
            title: 'Best Practices',
            href: '#',
            desc: 'Industry standards and coding conventions'
        }]
    }

} as const

type levels = keyof typeof content;

export default function NavBar() {
   const [wSize, setWSize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWSize(window.innerWidth);
    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (wSize === null) return null;
  return wSize < 1024 ? <Mobile/> : <Desktop/>
}

function Mobile() {
    return (
        <div className="lg:hidden flex justify-between items-center w-full fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 px-4 py-3 border-b h-16">
            <Button variant="ghost" className="font-bold text-lg">
                <Code2 className="h-5 w-5 mr-2" />
                FULLSTACK.IO
            </Button>
            <div className="flex items-center gap-2">
                <ModeToggle />
                <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

function Desktop() {
    return (
        <div className="hidden lg:flex items-center justify-between w-full fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 px-6 py-3 border-b h-16">
            <Button variant="ghost" className="font-bold text-lg hover:bg-transparent px-2">
                <Code2 className="h-5 w-5 mr-2" />
                FULLSTACK.IO
            </Button>

            <NavigationMenu className="flex-1 max-w-2xl mx-8">
                <NavigationMenuList className="gap-1">
                    {(Object.keys(content) as levels[]).map((item) => {
                        const level = content[item];
                        return (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuTrigger className="text-sm font-medium px-3">
                                    {level.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="p-4 w-[500px]">
                                        <div className="grid grid-cols-2 gap-4">
                                            {level.body.map((item, index) => (
                                                <ListItem 
                                                    key={index.toString()} 
                                                    title={item.title} 
                                                    desc={item.desc} 
                                                    href={item.href}
                                                />
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t">
                                            <NavigationMenuLink href="#" className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-sm">Fullstack for Native Apps Coming Soon!</h4>
                                                    <p className="text-xs text-muted-foreground mt-1">
                                                        currently under development
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
                <NavigationMenuViewport />
            </NavigationMenu>

            <div className="flex items-center gap-3">
                <InputGroup className="w-64">
                    <InputGroupInput placeholder="Search tutorials..." className="text-sm" />
                    <InputGroupAddon>
                        <Search className="h-4 w-4" />
                    </InputGroupAddon>
                </InputGroup>

                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Button variant="outline" size="sm" className="text-sm">
                        Login
                    </Button>
                    <Button variant="default" size="sm" className="text-sm">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}

interface ListItemProps {
    title: string,
    desc: string,
    href: string
}

function ListItem({ title = 'title', desc = 'children', href = '' }: ListItemProps) {
    return (
        <NavigationMenuLink 
            href={href}
            className="block p-3 rounded-lg hover:bg-accent transition-colors group"
        >
            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                {title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {desc}
            </p>
        </NavigationMenuLink>
    )
}