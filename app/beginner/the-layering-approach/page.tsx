import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!The Layering Approach',
    'text!Having a standardized project structure is important, we can catch on to what is happening right away and keeps the flow predictable. that goes for code syntax as well.',
    'comment!Project structure will comprise of first->last',
    'heading!Front-End',
    'text!( HTML ) define UI/UX shape and layout -> ( CSS ) UI/UX stylization ( animations, colors, typography ) -> ( Javascript ) interactivity',
    'comment!Regardless of project and technology for web apps, HTML/CSS/JS will be a staple.'
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