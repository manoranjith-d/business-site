"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-100/30 rounded-full blur-3xl opacity-30" />
            </div>

            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-primary bg-primary/5 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                            Innovating for the Future
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Excellence
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                            ReliableSoft Solutions builds scalable, robust, and high-performance software tailored to your business needs. We turn complex problems into elegant solutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="h-12 px-8 text-base" asChild>
                                <Link href="/contact">
                                    Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Animated Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 right-10 p-6 bg-white/80 backdrop-blur-xl border rounded-2xl shadow-2xl z-20 max-w-[240px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">AI Solutions</div>
                                        <div className="text-xs text-muted-foreground">Smart Automation</div>
                                    </div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-full bg-blue-500 rounded-full"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 left-10 p-6 bg-white/80 backdrop-blur-xl border rounded-2xl shadow-2xl z-20 max-w-[240px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Web Apps</div>
                                        <div className="text-xs text-muted-foreground">Scalable & Fast</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white" />
                                    <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white -ml-4" />
                                    <div className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white -ml-4 flex items-center justify-center text-xs font-medium text-slate-600">
                                        +5
                                    </div>
                                </div>
                            </motion.div>

                            {/* Central Element */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
                            <div className="absolute inset-10 border border-slate-200/50 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-20 border border-slate-200/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-3xl shadow-xl border">
                                <Code2 className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
