import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our team of innovators and engineers at NewGenix Solutions.",
}

const positions = [
    {
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote / Hybrid",
        type: "Full-time",
        salary: "$120k - $160k",
    },
    {
        title: "AI/ML Engineer",
        department: "Data Science",
        location: "Remote",
        type: "Full-time",
        salary: "$130k - $170k",
    },
    {
        title: "Product Designer (UI/UX)",
        department: "Design",
        location: "Hybrid",
        type: "Full-time",
        salary: "$90k - $130k",
    },
    {
        title: "Technical Project Manager",
        department: "Product",
        location: "Remote",
        type: "Contract",
        salary: "$100k - $140k",
    },
]

export default function CareersPage() {
    return (
        <div className="pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        We're always looking for talented individuals who are passionate about technology and innovation.
                    </p>
                </Container>
            </section>

            <Container className="py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
                        {positions.map((job, index) => (
                            <Card key={index} className="hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground mb-4">{job.department}</p>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" /> {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" /> {job.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <DollarSign className="w-4 h-4" /> {job.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <Button variant="outline" asChild>
                                            <Link href="/contact">Apply Now</Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="text-xl font-bold mb-4 text-blue-900">Why Join Us?</h3>
                            <ul className="space-y-3 text-blue-800/80">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Remote-first culture
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Competitive salary & equity
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Health & wellness benefits
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Learning & development budget
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Latest tech stack
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">Don't see a fit?</h3>
                            <p className="text-slate-300 mb-6">
                                We're always interested in meeting great people. Send us your resume and we'll keep you in mind for future openings.
                            </p>
                            <Button variant="secondary" className="w-full" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
