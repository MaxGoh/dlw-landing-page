"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
    const proFeatures = [
        "Monitor up to 10 subreddits",
        "Real-time sentiment analysis",
        "Weekly trend reports",
        "Email notifications",
        "Basic analytics dashboard",
    ]

    const enterpriseFeatures = [
        "Unlimited subreddit monitoring",
        "Advanced AI insights",
        "Custom reporting",
        "API access",
        "Dedicated support",
        "Custom integrations",
    ]

    return (
        <section id="pricing" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                        Pricing
                    </Badge>
                    <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Choose the plan that fits your business needs. Start monitoring Reddit conversations today.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Pro Tier */}
                    <Card className="relative bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                        </div>
                        <CardHeader className="text-center pt-8">
                            <CardTitle className="text-2xl font-bold text-foreground">Pro Tier</CardTitle>
                            <CardDescription className="text-muted-foreground">Perfect for growing businesses</CardDescription>
                            <div className="mt-4">
                                <span className="text-5xl font-black text-foreground">$59</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ul className="space-y-3">
                                {proFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Enterprise Tier */}
                    <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="text-center pt-8">
                            <CardTitle className="text-2xl font-bold text-foreground">Enterprise</CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Tailored solutions for large organizations
                            </CardDescription>
                            <div className="mt-4">
                                <span className="text-5xl font-black text-foreground">Custom</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ul className="space-y-3">
                                {enterpriseFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                            >
                                Contact Us
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <p className="text-muted-foreground">All plans include a 14-day free trial. No credit card required.</p>
                </div>
            </div>
        </section>
    )
}
