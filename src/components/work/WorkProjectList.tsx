"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { Project } from "@/types";
import { ProjectWorkflowDiagram } from "./ProjectWorkflowDiagram";

interface WorkProjectListProps {
  projects: Project[];
}

type FilterCategory = "all" | "ai" | "automation" | "marketing" | "operations";
type StatusFilter = "all" | "live" | "prototype" | "framework";

export function WorkProjectList({ projects }: WorkProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      let matchesCategory = true;
      if (activeCategory === "ai") {
        matchesCategory =
          project.slug === "ai-social-media-content-generator" ||
          project.slug === "ai-assisted-business-workflow-automation";
      } else if (activeCategory === "automation") {
        matchesCategory =
          project.slug === "automated-lead-management-followup" ||
          project.slug === "ai-assisted-business-workflow-automation";
      } else if (activeCategory === "marketing") {
        matchesCategory =
          project.slug === "performance-marketing-digital-growth-framework" ||
          project.slug === "automated-lead-management-followup";
      } else if (activeCategory === "operations") {
        matchesCategory =
          project.slug === "travel-business-digital-systems-gypsycircle" ||
          project.slug === "ai-assisted-business-workflow-automation";
      }

      // Status filter
      let matchesStatus = true;
      if (activeStatus === "live") {
        matchesStatus = project.status === "Live" || project.status === "Operational";
      } else if (activeStatus === "prototype") {
        matchesStatus = project.status === "Prototype" || project.status === "Concept";
      } else if (activeStatus === "framework") {
        matchesStatus = project.status === "Completed";
      }

      return matchesCategory && matchesStatus;
    });
  }, [projects, activeCategory, activeStatus]);

  return (
    <div className="space-y-10">
      {/* Interactive Filter Bar */}
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] block mb-2">
              Filter by Discipline:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all" as FilterCategory, label: "All Systems", count: 5 },
                { id: "ai" as FilterCategory, label: "Generative AI", count: 2 },
                { id: "automation" as FilterCategory, label: "Workflow Automation", count: 2 },
                { id: "marketing" as FilterCategory, label: "Performance Marketing", count: 2 },
                { id: "operations" as FilterCategory, label: "Operations & Venture", count: 2 },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`rounded px-3 py-1.5 font-mono text-xs transition-all ${
                      isActive
                        ? "bg-[var(--accent)] text-[var(--accent-foreground)] font-bold shadow-[0_0_12px_rgba(212,249,51,0.2)]"
                        : "bg-[var(--background)] border border-[var(--border)] text-[var(--foreground-muted)] hover:text-white hover:border-[var(--border-strong)]"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`ml-1.5 text-[10px] ${
                        isActive ? "text-[var(--accent-foreground)]/80" : "text-[var(--foreground-subtle)]"
                      }`}
                    >
                      ({tab.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Filter Dropdown / Pills */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] block mb-2">
              Filter by Status:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: "all" as StatusFilter, label: "All Statuses" },
                { id: "live" as StatusFilter, label: "Live & Deployed" },
                { id: "prototype" as StatusFilter, label: "Prototypes" },
                { id: "framework" as StatusFilter, label: "Frameworks" },
              ].map((status) => {
                const isActive = activeStatus === status.id;
                return (
                  <button
                    key={status.id}
                    type="button"
                    onClick={() => setActiveStatus(status.id)}
                    className={`rounded px-2.5 py-1 font-mono text-[11px] transition-colors ${
                      isActive
                        ? "bg-[var(--surface-raised)] border border-[var(--accent)] text-white font-semibold"
                        : "bg-[var(--background)] border border-[var(--border-muted)] text-[var(--foreground-subtle)] hover:text-white"
                    }`}
                  >
                    {status.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter Count & Reset */}
        <div className="mt-4 pt-3 border-t border-[var(--border-muted)] flex items-center justify-between text-xs font-mono text-[var(--foreground-subtle)]">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{" "}
            <strong>{projects.length}</strong> systems
          </span>
          {(activeCategory !== "all" || activeStatus !== "all") && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setActiveStatus("all");
              }}
              className="text-[var(--accent)] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center">
          <Filter className="h-8 w-8 text-[var(--foreground-subtle)] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No matching projects found</h3>
          <p className="text-xs text-[var(--foreground-muted)] mb-4">
            Try adjusting your discipline or status filters above.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setActiveStatus("all");
            }}
            className="rounded bg-[var(--accent)] px-4 py-2 font-mono text-xs font-bold uppercase text-[var(--accent-foreground)]"
          >
            Show All Projects
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => {
            const isPrototype = project.status === "Prototype" || project.status === "Concept";

            return (
              <article
                key={project.slug}
                className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 transition-all hover:border-[var(--border-strong)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Context & Metadata */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[var(--accent)]">
                        SYSTEM 0{idx + 1}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--background)] text-[var(--foreground-muted)]">
                        {project.category}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded ${
                          isPrototype
                            ? "bg-amber-950/40 text-amber-300 border border-amber-800/40"
                            : "bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]"
                        }`}
                      >
                        STATUS: {project.status}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>

                    <p className="text-sm text-[var(--foreground)] leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="rounded border-l-2 border-red-500/40 bg-[var(--background)] p-3 text-xs leading-relaxed text-[var(--foreground-muted)]">
                        <span className="font-mono text-[10px] uppercase font-bold text-red-400 block mb-0.5">
                          Problem:
                        </span>
                        {project.problem}
                      </div>

                      <div className="rounded border-l-2 border-[var(--accent)] bg-[var(--background)] p-3 text-xs leading-relaxed text-[var(--foreground)]">
                        <span className="font-mono text-[10px] uppercase font-bold text-[var(--accent)] block mb-0.5">
                          Solution:
                        </span>
                        {project.solution}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] block mb-2">
                        Technologies Deployed:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[11px] rounded bg-[var(--surface-raised)] border border-[var(--border)] px-2.5 py-1 text-[var(--foreground-muted)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group/btn inline-flex items-center gap-2 rounded bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-all"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Workflow Diagram */}
                  <div className="lg:col-span-6 space-y-4">
                    <ProjectWorkflowDiagram slug={project.slug} />

                    <div className="rounded border border-[var(--border)] bg-[var(--background)] p-4 text-xs">
                      <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold block mb-2">
                        Execution Workflow:
                      </span>
                      <div className="space-y-1.5 font-mono text-[11px] text-[var(--foreground-muted)]">
                        {project.workflowSteps.map((step) => (
                          <div key={step.step} className="flex items-start gap-2">
                            <span className="text-[var(--accent)] font-bold">{step.step}.</span>
                            <span className="text-white font-medium">{step.label}:</span>
                            <span className="text-[var(--foreground-subtle)]">{step.detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

