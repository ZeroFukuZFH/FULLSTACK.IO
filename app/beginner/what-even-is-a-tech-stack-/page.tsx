import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!What Even is a Tech-Stack?',
    'text!A tech-stack is the collection of technologies that make up the front-end / back-end / database of our application',
    'heading!Full Stack? Front-End? Back-End?',
    'text!Ever used Facebook before? Ever wonder how it works under the hood? When you download Facebook, The App that you see, that is the front-end, the front-end contains the UI/UX of the application, what you see is what the front-end is, interactivity like search bars, watching videos, notifications the list goes on and on.',
    'text!Under the hood, is the back-end. it\'s how the app actually works under the hood, ever wonder where your messages go? it goes to the back-end where it then delivers it to a storage/database, what you can\'t see is the back-end. it handles most of the useful stuff about your web app like being able to send and recieve messages.',
    'comment!a good analogy is about how cars, the front-end is your controls, steering , throttle, brakes. YOU are able to see it. the back-end is the engine and the drive-train. you aren\'t supposed to see what\'s inside. and the fuel is the database/storage.'
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