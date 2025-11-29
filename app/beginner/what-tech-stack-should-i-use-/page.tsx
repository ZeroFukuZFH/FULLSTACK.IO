import PageLayout from "@/app/components/page-layout"

const PageContent:string[] = [
    'heading!So What Tech Stack Should I Use?',
    'text!Regarding this level, for beginners I highly recomend my personal beginner level stack called the "M.E.VA.N stack, this stack is combosed of,',
    'list!-M = MongoDB (the database)-E = Express JS (a serverside framework built on top of Node JS to make it easier to work with)-VA = vanilla javascript paired with html / css (front end)-N = Node JS (the server side runtime environment)',
    'comment!a server-side runtime environment is basically the connection or the bridge between the front and the back',
    'text!The reason why i recommend this stack is because it only requires you to learn the fundamentals of only 4 technologies, HTML/CSS, Javascript and MongoDB. To new comers that may seem to be alot, but as we progress to the latest technologies, fundamentally the practices stay the same. And Javascript is a pre-requisite on most-if not all Web Fullstack Applications anyways so having most of your tech be standardized into one language removes the hassle of learning other languages and decreases context-switching.',
    'text!for example, Express JS and Springboot are both frameworks with the same functionality but in different languages (javascript vs java) but their fundamentals are very similar, they just have different features',
    'comment!frameworks are tools with the primary goal of making it easier to build on existing technology',
    'text!To further prove my point, here is the same exact sample code between Express JS and Springboot,',
    'code!' + "// Express JS\n" + "app.use(express.json());\n" +"\n" +
    "let users = [];\n" +
    "\n" +
    "app.post(\"/users\", (req, res) => {\n" +
    "  const newUser = {\n" +
    "    id: users.length + 1,\n" +
    "    name: req.body.name\n" +
    "  };\n" +
    "\n" +
    "  users.push(newUser);\n" +
    "\n" +
    "  res.status(201).json(newUser);\n" +
    "});",
        'code!' + "// Springboot\n" + "@RestController\n" +
    "public class ApiController {\n" +
    "\n" +
    "    List<User> users = new ArrayList<>();\n" +
    "\n" +
    "    @PostMapping(\"/users\")\n" +
    "    public User createUser(@RequestBody Map<String, String> body) {\n" +
    "        User u = new User(users.size() + 1, body.get(\"name\"));\n" +
    "        users.add(u);\n" +
    "        return u;\n" +
    "    }\n" +
    "}",
    'text!If you aren\'t familiar with one over the other, don\'t worry you don\'t have to understand everything. the point is that regardless of difficulty, most technologies follow the same principle.',
    'heading!So Why Other Technologies?',
    'text!By now, I assume that you\'re asking yourself, "why build on java then?" they do the same thing anyways, well, different technologies for different use cases, for example, Express is easier to maintain and build with since it uses javascript but falls short on performance due to being only single-threaded, though Springboot is superior in performance, you have to ask the question yourself on whether or not if the performance is really needed',
    'comment!single-threaded will be explained upon later topics'
    
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