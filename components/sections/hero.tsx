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

                    {/* Animated Taglines Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

                            {/* Floating Tagline Card 1 - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 100, y: -50 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="absolute top-8 right-0 z-20"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="p-5 bg-white/90 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-2xl shadow-blue-500/20 max-w-[220px]"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                                            <Cpu className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-800">AI Solutions</div>
                                            <div className="text-xs text-slate-500">Smart & Efficient</div>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-slate-600">Automation</span>
                                            <span className="font-semibold text-blue-600">95%</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "95%" }}
                                                transition={{ duration: 1.5, delay: 1.2 }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Tagline Card 2 - Left Middle */}
                            <motion.div
                                initial={{ opacity: 0, x: -100, y: 0 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.7,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="absolute top-1/3 left-0 z-20"
                            >
                                <motion.div
                                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                    className="p-5 bg-white/90 backdrop-blur-xl border border-cyan-100 rounded-2xl shadow-2xl shadow-cyan-500/20 max-w-[220px]"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg">
                                            <Globe className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-800">Web Development</div>
                                            <div className="text-xs text-slate-500">Fast & Scalable</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                                R
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                                N
                                            </div>
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                                                V
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-600 font-medium">Modern Stack</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Tagline Card 3 - Bottom Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 80, y: 80 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.9,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="absolute bottom-12 right-8 z-20"
                            >
                                <motion.div
                                    animate={{ y: [0, -12, 0], rotate: [0, 2, 0, -2, 0] }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="p-5 bg-white/90 backdrop-blur-xl border border-purple-100 rounded-2xl shadow-2xl shadow-purple-500/20 max-w-[200px]"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                                            <Code2 className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-800">Cloud Solutions</div>
                                            <div className="text-xs text-slate-500">Always Available</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">99.9%</div>
                                            <div className="text-[10px] text-slate-500">Uptime</div>
                                        </div>
                                        <div className="h-8 w-px bg-slate-200" />
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-purple-600">24/7</div>
                                            <div className="text-[10px] text-slate-500">Support</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Tagline Card 4 - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -80, y: 60 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="absolute bottom-24 left-4 z-20"
                            >
                                <motion.div
                                    animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
                                    transition={{
                                        duration: 5.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.5
                                    }}
                                    className="p-4 bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-2xl shadow-2xl shadow-emerald-500/20 max-w-[180px]"
                                >
                                    <div className="text-center">
                                        <div className="inline-flex p-2.5 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg mb-2">
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="font-bold text-sm text-slate-800 mb-1">Mobile Apps</div>
                                        <div className="text-xs text-slate-500">iOS & Android</div>
                                        <div className="mt-3 flex justify-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <motion.div
                                                    key={star}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1.5 + star * 0.1 }}
                                                >
                                                    <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Central Icon with Pulse */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-8 bg-white rounded-3xl shadow-xl border-2 border-slate-100"
                                >
                                    <Code2 className="w-16 h-16 text-primary" />
                                </motion.div>
                                {/* Pulse rings */}
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 border-2 border-primary rounded-3xl"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute inset-0 border-2 border-primary rounded-3xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
