import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export const metadata: Metadata = {
    title: "Blog",
    description: "Read our latest insights on software engineering, AI, and digital transformation.",
}

const posts = [
    {
        slug: "future-of-ai-in-software-development",
        title: "The Future of AI in Software Development",
        excerpt: "How Artificial Intelligence is reshaping the way we write, test, and deploy code.",
        date: "October 15, 2023",
        author: "Alex Johnson",
        category: "AI & ML",
        image: "bg-purple-100",
    },
    {
        slug: "optimizing-nextjs-performance",
        title: "Optimizing Next.js Performance for Scale",
        excerpt: "Best practices for building high-performance web applications with Next.js App Router.",
        date: "November 2, 2023",
        author: "Sarah Williams",
        category: "Web Development",
        image: "bg-blue-100",
    },
    {
        slug: "building-resilient-microservices",
        title: "Building Resilient Microservices Architecture",
        excerpt: "Strategies for designing fault-tolerant and scalable microservices systems.",
        date: "November 20, 2023",
        author: "David Chen",
        category: "Architecture",
        image: "bg-green-100",
    },
    {
        slug: "ux-trends-2024",
        title: "UX Design Trends to Watch in 2024",
        excerpt: "Exploring the latest trends in user experience design, from glassmorphism to micro-interactions.",
        date: "December 5, 2023",
        author: "Emily Davis",
        category: "Design",
        image: "bg-orange-100",
    },
]

export default function BlogPage() {
    return (
        <div className="pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Insights, tutorials, and updates from our engineering team.
                    </p>
                </Container>
            </section>

            <Container className="py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                            <div className={`aspect-video w-full ${post.image} flex items-center justify-center text-slate-500 font-medium`}>
                                [Blog Image]
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </span>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <CardDescription className="line-clamp-3 mb-4">
                                    {post.excerpt}
                                </CardDescription>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                                        {post.category}
                                    </span>
                                    <Button variant="link" className="p-0 h-auto" asChild>
                                        <Link href={`/blog/${post.slug}`}>
                                            Read More <ArrowRight className="ml-1 w-3 h-3" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}
