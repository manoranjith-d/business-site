import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { ServicesPreview } from "@/components/sections/services-preview"
import { TechStack } from "@/components/sections/tech-stack"
import { CTA } from "@/components/sections/cta"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <TechStack />
            <Features />
            <ServicesPreview />
            {/* Testimonials would go here */}
            <CTA />
        </div>
    )
}
