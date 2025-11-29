import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!What is C.R.U.D?',
    'text!C.R.U.D stands for Create, Read, Update, Delete, it is the crux of fullstack applications. it is up to the developer on how they build around the basic CRUD functions but more or less, the app should have these basic function implementations if needed.',
    'text!to further expand, they very literally mean what they say. Create allows Creating something (ex. posting a picture or writting a blogpost on facebook), Read allows Reading something ( ex. Reading facebook posts ) Update means being able to change/edit something ( ex. Being able to edit messenger chat messages ), Delete -well you get the point. '

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