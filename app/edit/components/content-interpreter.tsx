"use client"

import {Code,CodeBlock,CodeHeader,} from '@/components/animate-ui/components/animate/code';
import { Large, Small} from '@/app/components/typography';


export function ContentInterpreter({item}:{item:string}){
    
    const interpreter = () => {
        let i:number = 0;
        while(item.charAt(i) !== '!' && i < item.length) i++
        return [item.slice(i+1,item.length),item.slice(0,i)]
    }

    const [body, first] = interpreter()

    return (
        <>
        {first === 'visual' && <>{body}</>}
        {first === 'code' && 
        <section className='flex justify-center w-full'>
        <Code code={body} className="w-[30vw] m-w-[320px] h-auto">
            <CodeHeader copyButton/>
            <CodeBlock
                cursor={true}
                lang="tsx"
                writing={true}
                duration={2000}
            />
        </Code>
        </section>
        }
        {first === 'text' && <><Small text={body}/></>}
        {first === 'heading' && <><Large text={body}/></>}
        {first === 'html' && <>{body}</>}
        {first === 'comment' && <i className='opacity-50'>{body}</i>}
        </>
    )
}

export default function ContentMapper({content}:{content:string[]}){
    return(
        <>
        <div className='flex flex-col gap-4 p-4'>
            {content.map((item:string,index:number)=>(
            <ContentInterpreter key={index} item={item}/>
            
            ))}              
        </div>
        </>
    )
}