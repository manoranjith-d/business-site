import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bot, Globe, Smartphone, Layout, Search, BarChart3, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our comprehensive software development services including AI, Web, Mobile, and SEO.",
}

const services = [
    {
        id: "ai",
        title: "AI Solutions",
        description: "Leverage the power of Artificial Intelligence to automate processes and gain insights.",
        details: ["Custom LLM Integration", "Chatbot Development", "Predictive Analytics", "Process Automation"],
        icon: Bot,
    },
    {
        id: "web",
        title: "Web Application Development",
        description: "Build fast, secure, and scalable web applications using modern frameworks.",
        details: ["Next.js & React", "SaaS Platforms", "E-commerce Solutions", "Progressive Web Apps (PWA)"],
        icon: Globe,
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        description: "Reach your customers on their favorite devices with native and cross-platform apps.",
        details: ["iOS & Android", "React Native / Flutter", "App Store Optimization", "Mobile UI/UX"],
        icon: Smartphone,
    },
    {
        id: "desktop",
        title: "Desktop Software",
        description: "Powerful desktop applications for high-performance requirements.",
        details: ["Windows & macOS", "Electron Apps", "Enterprise Software", "Offline Capabilities"],
        icon: Layout,
    },
    {
        id: "seo",
        title: "SEO & Digital Marketing",
        description: "Improve your online visibility and drive organic traffic to your business.",
        details: ["Technical SEO", "Content Strategy", "Local SEO", "Performance Optimization"],
        icon: Search,
    },
    {
        id: "custom",
        title: "Custom Solutions",
        description: "Tailored software built specifically for your unique business needs.",
        details: ["API Integration", "Legacy Modernization", "Cloud Migration", "Consulting"],
        icon: BarChart3,
    },
]

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        End-to-end software solutions tailored to your business goals.
                    </p>
                </Container>
            </section>

            <Container className="py-20">
                <div className="grid gap-12">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 bg-white p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow w-full">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild>
                                    <Link href="/contact">
                                        Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex-1 min-h-[300px] bg-slate-100 rounded-2xl w-full flex items-center justify-center text-slate-400">
                                [Image: {service.title} Illustration]
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
