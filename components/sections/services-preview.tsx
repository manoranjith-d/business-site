"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Smartphone, Globe, BarChart3, Search, Layout } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        title: "AI Solutions",
        description: "Custom AI models, chatbots, and automation workflows to supercharge your business.",
        icon: Bot,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Web Development",
        description: "High-performance web applications built with Next.js, React, and modern technologies.",
        icon: Globe,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: Smartphone,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "SaaS Development",
        description: "Scalable Software-as-a-Service platforms designed for growth and reliability.",
        icon: Layout,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
    {
        title: "SEO Optimization",
        description: "Data-driven SEO strategies to improve visibility and drive organic traffic.",
        icon: Search,
        color: "text-pink-500",
        bg: "bg-pink-50",
    },
    {
        title: "Custom Solutions",
        description: "Tailored software solutions to address your unique business challenges.",
        icon: BarChart3,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
    },
]

export function ServicesPreview() {
    return (
        <section className="py-24">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Our Expertise
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We offer a comprehensive suite of software services to help you build, scale, and succeed in the digital age.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/services">
                            View All Services <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 group cursor-pointer">
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${service.bg} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
