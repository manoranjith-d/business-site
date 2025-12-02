"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "AWS", "Docker", "GraphQL"
]

export function TechStack() {
    return (
        <section className="py-16 border-y border-slate-100 bg-slate-50/50">
            <Container>
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Powered by Modern Technologies
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-bold text-slate-400 hover:text-primary cursor-default px-4 py-2"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
