import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!What Even is a Tech-Stack?',
    'text!A tech-stack is the collection of technologies that make up the front-end / back-end / database of our application',
]

export default function Page(){
    return(
        <>
        <section>
            <PageLayout PageContent={PageContent}/>
        </section>
        </>
    )
}