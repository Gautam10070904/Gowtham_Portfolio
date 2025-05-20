import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "OSANTS",
        description:
            "Lead, quote, and contact management system built with Angular and Ionic. Features include OTP login, role-based access, and dynamic UI components.",
        image: "/projects/osants.png",
        tags: ["Angular 16", "Ionic", "REST API", "Bootstrap"],
    },
    {
        id: 2,
        title: "Sylko EDI Processor",
        description:
            "Enterprise-level Angular app for EDI-to-XML conversion. Included data table customizations and UX enhancements.",
        image: "/projects/Sylko.webp",
        tags: ["Angular", "ngx-datatable", "TypeScript", "REST API"],
    },
    {
        id: 3,
        title: "MDMI – Midday Meals Information System ",
        description:
            "Government data tracking app using Angular and ApexCharts. Supported drill-down views, event timelines, and live API-based charts.",
        image: "/projects/mdmi.png",
        tags: ["Angular", "ApexCharts", "TypeScript", "Bootstrap"],
    },
    {
        id: 4,
        title: "Fundaneed Platform",
        description:
            "Donation and event registration system using Angular Material. Features include pagination tables, dialogs, and API integration.",
        image: "/projects/fundaneed.png",
        tags: ["Angular", "Angular Material", "TypeScript", "REST API"],
    },
    {
        id: 5,
        title: "TCT – Transport Control Tower",
        description:
            "Fleet operations dashboard for real-time data visibility. Built with Angular and Bootstrap and integrated RESTful services.",
        image: "/projects/tct.png",
        tags: ["Angular", "REST API", "TypeScript", "Bootstrap"],
    },
    {
        id: 6,
        title: "Rx-Office Teams App",
        description:
            "Microsoft Teams-integrated workspace management tool with SSO, theming, and responsive UI using Fluent UI and Ant Design.",
        image: "/projects/rx.png",
        tags: ["React", "Fluent UI", "Microsoft Teams Toolkit", "Ant Design"],
    },
    {
        id: 7,
        title: "TEXCO Job Portal",
        description:
            "Job portal for ex-servicemen with dual registration flows and React Stepper UI. Includes dashboard and job application module.",
        image: "/projects/texco.png",
        tags: ["React", "React Stepper", "REST API", "Bootstrap"],
    },
    {
        id: 8,
        title: "TOWA – Tenant Management System",
        description:
            "Tenant management app using Angular 19 with JWT Auth, lazy loading, dynamic forms, and real-time CRUD integration.",
        image: "/projects/towa.png",
        tags: ["Angular 19", "Angular Material", "JWT", "Bootstrap"],
    },
];



export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A curated collection of real-world applications I’ve developed — from government systems to enterprise dashboards and job portals.
                    Each project demonstrates my ability to solve complex problems with Angular, React, and modern web technologies, while focusing on clean architecture, performance, and UX.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {/* <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Gautam10070904"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};