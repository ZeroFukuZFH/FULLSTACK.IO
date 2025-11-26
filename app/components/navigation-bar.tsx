
import { NavigationMenu, NavigationMenuItem,NavigationMenuViewport, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"

// test
const content = {
    beginner:{
        title:'Beginner',
        body:[
        {
            title:'HTML',
            href:'html',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        },
        {
            title:'CSS',
            href:'css',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        },
        {
            title:'Javascript',
            href:'javascript',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        },
        {
            title:'PHP',
            href:'php',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        },
        {
            title:'MongoDB',
            href:'mongodb',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        }
        ]
    },
    intermediate:{
        title:'Intermediate',
        body:[{
            title:'REACT',
            href:'#',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        }]
    },
    advanced:{
        title:'Advanced',
        body:[{
            title:'idkl',
            href:'#',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        }]
    },
    allcontent:{
        title:'All References',
        body:[{
            title:'idkl',
            href:'#',
            desc:'Lorem ipsum dolor sit amet lorem luptatum diam consetetur consetetur no dolore lorem elitr. Aliquyam ut sed nam te molestie sadipscing invidunt at assum duis takimata sadipscing dolore eos dolores. Minim labore lorem et duo aliquyam. Consequat facilisis autem ut tempor eos et sit gubergren consectetuer tempor. Ea vero amet rebum ea et cum. Vero dolore stet euismod et amet at dolor imperdiet sea sit sanctus sit duis. Nonumy takimata eos volutpat sea ea est odio invidunt esse elitr eirmod eirmod. At vero accusam est takimata.'
        }]
    }

} as const

export default function NavBar() {
    type levels = keyof typeof content;

    return (
        <div className="flex flex-col sm:flex-row gap-2 justify-between w-full fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 px-4 py-2 border-b h-[10vh] items-center">
            <Button variant='default'>My Logo</Button>

            <NavigationMenu>
                <NavigationMenuList>
                    {(Object.keys(content) as levels[]).map((item) => {
                        const level = content[item];
                        return (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuTrigger>{level.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] h-[250px] shadow-[inset_0_-20px_60px_0px_rgba(0,0,0,0.3)] overflow-auto">
                                        {level.body.map((item,index)=>{
                                            return (
                                                <ListItem key={index.toString()} title={item.title} desc={item.desc} href={item.href}/>
                                            )
                                        })}
                                        <ListItem title={'NOT SURE?'} desc={'create a fullstack app with the given level of difficulty'} href={'#'}/>
                                    </ul>
                                    <NavigationMenuLink className="border-t">
                                        <u>Native App Version Coming Soon!</u>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
                <NavigationMenuViewport/>
            </NavigationMenu>
            
            <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                <Search />
                </InputGroupAddon>
            </InputGroup>

            <div className="flex items-center gap-2">
                <ModeToggle />
                <Button variant="outline">Login</Button>
                <Button variant="default">Sign Up</Button>
            </div>
        </div>
    );
}

interface ListItemProps {
    title:string,
    desc:string,
    href:string
}

function ListItem({title='title',desc='children',href=''}:ListItemProps){
    return (
        <li className="overflow-hidden">
            <NavigationMenuLink href={href}>
                <h1><b>{title}</b></h1>
                <p><i>{desc}</i></p>
            </NavigationMenuLink>
        </li>
    )
}