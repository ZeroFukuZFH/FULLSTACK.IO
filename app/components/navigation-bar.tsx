
import { NavigationMenu, NavigationMenuItem,NavigationMenuViewport, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"

const content = {
    beginner:{
        title:'Beginner',
        body:[
        {
            title:'HTML',
            href:'html',
            desc:'idk'
        },
        {
            title:'CSS',
            href:'css',
            desc:'idk'
        },
        {
            title:'Javascript',
            href:'javascript',
            desc:'idk'
        },
        {
            title:'HTML',
            href:'html',
            desc:'idk'
        },
        {
            title:'MongoDB',
            href:'mongodb',
            desc:'idk'
        }
        ]
    },
    intermediate:{
        title:'Intermediate',
        body:[{
            title:'REACT',
            href:'#',
            desc:'id'
        }]
    },
    advanced:{
        title:'Advanced',
        body:[{
            title:'idkl',
            href:'#',
            desc:'idk'
        }]
    },
    allcontent:{
        title:'All References',
        body:[{
            title:'idkl',
            href:'#',
            desc:'idk'
        }]
    }

} as const

export default function NavBar() {
    type levels = keyof typeof content;

    return (
        <div className="flex flex-col sm:flex-row gap-2 justify-between w-full fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 px-4 py-2 border-b">
            <Button variant='default'>My Logo</Button>

            <NavigationMenu>
                <NavigationMenuList>
                    {(Object.keys(content) as levels[]).map((item) => {
                        const level = content[item];
                        return (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuTrigger>{level.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {level.body.map((item,index)=>{
                                            return (
                                                <ListItem key={index.toString()} title={item.title} desc={item.desc} href={item.href}/>
                                            )
                                        })}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
                <NavigationMenuViewport/>
            </NavigationMenu>

            <div className="flex items-center gap-2">
                <ModeToggle />
                <Button variant="outline">Login</Button>
                <Button variant="default">Sign Up</Button>
            </div>
        </div>
    );
}

interface ListItemProps {
    key:string,
    title:string,
    desc:string,
    href:string
}

function ListItem({key,title='title',desc='children',href=''}:ListItemProps){
    return (
        <li key={key}>
            <NavigationMenuLink href={href}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </NavigationMenuLink>
        </li>
    )
}