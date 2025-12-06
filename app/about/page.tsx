import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about NewGenix Solutions, our mission, vision, and engineering principles.",
}

export default function AboutPage() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About NewGenix</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        We are a team of passionate engineers, designers, and strategists dedicated to building the future of software.
                    </p>
                </Container>
            </section>

            <Container className="py-20 space-y-20">
                {/* Story */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Founded with a vision to bridge the gap between complex technology and user-friendly solutions, NewGenix Solutions has grown into a trusted partner for businesses worldwide.
                            </p>
                            <p>
                                We believe that great software is not just about code; it's about understanding the human problem it solves. Our journey began with a simple idea: to deliver reliability in an unreliable world.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-2xl aspect-video w-full overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                            alt="Team collaboration at NewGenix Solutions"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h3>
                        <p className="text-blue-800/80">
                            To empower businesses with robust, scalable, and innovative software solutions that drive growth and efficiency.
                        </p>
                    </div>
                    <div className="p-8 bg-cyan-50 rounded-2xl border border-cyan-100">
                        <h3 className="text-2xl font-bold mb-4 text-cyan-900">Our Vision</h3>
                        <p className="text-cyan-800/80">
                            To be the global standard for engineering excellence and digital transformation.
                        </p>
                    </div>
                </div>

                {/* Principles */}
                <div>
                    <h2 className="text-3xl font-bold mb-10 text-center">Engineering Principles</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Clean Code Architecture",
                            "User-Centric Design",
                            "Scalability First",
                            "Security by Default",
                            "Continuous Innovation",
                            "Transparent Communication"
                        ].map((principle, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                <span className="font-medium text-lg">{principle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
