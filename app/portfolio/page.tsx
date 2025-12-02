import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore our portfolio of successful projects and case studies.",
}

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        description: "A real-time financial analytics dashboard for a leading investment firm.",
        tags: ["Next.js", "TypeScript", "D3.js"],
        image: "bg-blue-100",
    },
    {
        title: "HealthCare AI Assistant",
        category: "AI Solution",
        description: "An AI-powered chatbot for patient triage and appointment scheduling.",
        tags: ["Python", "OpenAI API", "React"],
        image: "bg-green-100",
    },
    {
        title: "E-Commerce Platform",
        category: "Mobile App",
        description: "A cross-platform mobile app for a fashion retailer with AR try-on features.",
        tags: ["React Native", "Node.js", "ARKit"],
        image: "bg-purple-100",
    },
    {
        title: "Logistics Tracker",
        category: "SaaS",
        description: "Global shipment tracking system with real-time updates and route optimization.",
        tags: ["Vue.js", "Firebase", "Google Maps API"],
        image: "bg-orange-100",
    },
]

export default function PortfolioPage() {
    return (
        <div className="pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        See how we've helped businesses transform their ideas into reality.
                    </p>
                </Container>
            </section>

            <Container className="py-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                            <div className={`aspect-video w-full ${project.image} flex items-center justify-center text-slate-500 font-medium`}>
                                [Project Screenshot: {project.title}]
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-primary mb-1">{project.category}</p>
                                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                                    </div>
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href="#">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base mb-4">
                                    {project.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}
