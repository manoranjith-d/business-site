import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with NewGenix Solutions for your software development needs.",
}

export default function ContactPage() {
    return (
        <div className="pb-20">
            <section className="bg-slate-50 py-20 border-b border-slate-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </Container>
            </section>

            <Container className="py-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email Us</p>
                                        {/* <p className="text-muted-foreground">hello@NewGenix.com</p> */}
                                        <p className="text-muted-foreground">manoranjith2201@outlook.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Call Us</p>
                                        <p className="text-muted-foreground">+91 9092171633</p>
                                        <p className="text-muted-foreground">+91 6374440425</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Visit Us</p>
                                        <p className="text-muted-foreground">
                                            832, Jain Cambrae East Apartment<br />
                                            Peelamedu, Coimbatore - 641014
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Business Hours</p>
                                        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-muted-foreground">Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-slate-100 rounded-2xl aspect-video w-full flex items-center justify-center text-slate-400">
                            {/* [Interactive Map Placeholder]
                             */}
                            <img src="https://conocedores.com/wp-content/uploads/2016/06/googlemapslogo.jpg" alt="Google Maps" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input id="subject" placeholder="Project Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px]" />
                                </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
