import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "WalkoutTech Private Limited",
    location: "Hyderabad",
    date: "Sep 2025 – Present",
    bullets: [
      "Architected a production-grade HRMS web application from scratch using React.js, serving as the sole frontend owner on a startup product team.",
      "Engineered a multi-layered security system with OTP authentication, JWT-based API authorization, and RBAC for Employee, Manager, and Admin personas.",
      "Integrated biometric face verification and geo-fencing logic to eliminate proxy attendance and enforce location-based Punch-In/Punch-Out access.",
      "Designed and maintained global application state using Redux Toolkit across auth flows, user roles, attendance tracking, and async API lifecycle.",
      "Built interactive HR analytics dashboards with Chart.js incorporating Pie, Doughnut, Bar, and Time-Series visualisations.",
      "Converted Figma mock-ups into pixel-perfect, responsive interfaces using Tailwind CSS, ensuring cross-device consistency.",
      "Integrated frontend with Spring Boot REST APIs backed by MySQL; collaborated with backend team to define and validate API contracts via Postman.",
    ],
  },
  {
    role: "Software Engineer",
    company: "CREXIN Technologies Private Limited",
    location: "Hyderabad",
    date: "Jan 2023 – Sep 2025",
    bullets: [
      "Led UI development team in migrating the Candidate Evaluation Portal to a modern React.js architecture, improving maintainability and scalability.",
      "Owned implementation of role-based authentication, user management, and course evaluation modules using Redux and Bootstrap.",
      "Contributed to BestBudget personal finance application — built OTP login, JWT-secured API flows, and data visualisation dashboards using Chart.js.",
      "Implemented SEO optimisations and integrated Google Analytics on company landing site, improving search discoverability.",
      "Designed UI/UX wireframes in Figma and translated them into responsive, production-ready React components.",
    ],
  },
  {
    role: "Software Engineer",
    company: "SpanIdea Systems Private Limited",
    location: "Pune",
    date: "Jun 2021 – Jan 2023",
    bullets: [
      "Developed and maintained frontend modules for TSS (The Souled Store) Backoffice admin panel using React.js, jQuery, and Bootstrap.",
      "Implemented dynamic listing pages with full CRUD functionality, integrating data exchange between frontend and backend via AJAX.",
      "Diagnosed and resolved UI defects through structured Root Cause Analysis, reducing recurring production bugs.",
      "Collaborated with geographically distributed teams to deliver features aligned with client timelines and requirements.",
    ],
  },
];

const ExperienceSection = () => {
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleExperience = (index) => {
    setExpandedExperiences((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const isExpanded = expandedExperiences[index];

            return (
              <div key={experience.company} className="rounded-3xl border border-border bg-card/80 p-8 shadow-xs card-hover">
                <div className={`overflow-hidden transition-[max-height] duration-500 ${isExpanded ? "max-h-[100rem]" : "max-h-80"}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1 text-left">{experience.role}</h3>
                      <p className="text-muted-foreground">
                        {experience.company} — {experience.location}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-primary">{experience.date}</span>
                  </div>
                  <ul className="space-y-3">
                    {experience.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 text-muted-foreground">
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-left">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  aria-expanded={isExpanded}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
                >
                  {isExpanded ? "Show less" : "Show more"}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
