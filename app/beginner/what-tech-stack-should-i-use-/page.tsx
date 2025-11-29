import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!So What Tech Stack Should I Use?',
    'text!Regarding this level, for beginners I highly recomend my personal beginner level stack called the "M.E.VA.N stack, this stack is combosed of,',
    'list!-M = MongoDB (the database)-E = Express JS (a serverside framework built on top of Node JS to make it easier to work with)-VA = vanilla javascript paired with html / css (front end)-N = Node JS (the server side runtime environment)',
    'comment!a server-side runtime environment is basically the connection or the bridge between the front and the back',
    'text!The reason why i recommend this stack is because it only requires you to learn the fundamentals of only 4 technologies, HTML/CSS, Javascript and MongoDB. To new comers that may seem to be alot, but as we progress to the latest technologies, fundamentally the practices stay the same. And Javascript is a pre-requisite on most-if not all Web Fullstack Applications anyways so having most of your tech be standardized into one language removes the hassle of learning other languages and decreases context-switching.',
    'text!for example, Express JS and Springboot are both frameworks with the same functionality but in different languages (javascript vs java) but their fundamentals are very similar, they just have different features',
    'comment!frameworks are tools with the primary goal of making it easier to build on existing technology',
    'heading!The Other Tech Stack',
    'text!'
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