"use client"

import { Container } from "@/components/ui/container"
import { ShieldCheck, Zap, Layers, Users } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        title: "Trust & Reliability",
        description: "We build software you can depend on. Our rigorous testing and quality assurance ensure 99.9% uptime and stability.",
        icon: ShieldCheck,
    },
    {
        title: "Engineering Excellence",
        description: "Clean code, scalable architecture, and best practices. We don't just write code; we engineer solutions.",
        icon: Layers,
    },
    {
        title: "Innovation First",
        description: "Staying ahead of the curve with the latest technologies like AI, Machine Learning, and Modern Web Frameworks.",
        icon: Zap,
    },
    {
        title: "Client-Centric",
        description: "Your success is our priority. We work closely with you to understand your needs and deliver beyond expectations.",
        icon: Users,
    },
]

export function Features() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Why Choose NewGenix?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We combine technical expertise with business acumen to deliver software that drives growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
