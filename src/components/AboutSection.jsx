import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Frontend Developer | UI Engineer | Product-Focused Technologist
                        </h3>

                        <p className="text-muted-foreground">
                            I’m Gowtham S, a passionate Frontend Developer with 2+ years of experience crafting responsive,
                            scalable, and user-centric web applications using Angular, React, and TypeScript.
                        </p>

                        <p className="text-muted-foreground">
                            I specialize in building component-driven interfaces with clean architecture and robust state
                            management using Redux and RxJS. Whether it’s a government dashboard, enterprise-grade portal,
                            or mobile-friendly PWA — I turn complex specifications into intuitive digital products.
                            I focus deeply on accessibility, performance, and seamless user journeys.
                        </p>

                        <p className="text-muted-foreground">
                            With hands-on experience across the full development cycle — from SSO authentication to REST API
                            integration, real-time data visualizations, and DevOps deployment — I bring a problem-solving
                            mindset and a dedication to quality in every feature I ship.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="/cv/Gowtham_Software_Engineer.docx"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Building scalable, performant web apps using Angular, React, and Ionic. Expert in reusable components, state management, and clean architecture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Implementation</h4>
                                    <p className="text-muted-foreground">
                                        Translating complex wireframes into responsive, accessible, and intuitive interfaces using Fluent UI, Angular Material, and Bootstrap.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">End-to-End Project Delivery</h4>
                                    <p className="text-muted-foreground">
                                        Delivered full-cycle projects like job portals, dashboards, and PWAs using Agile, integrating SSO, REST APIs, and secure authentication flows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};