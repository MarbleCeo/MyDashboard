
import React from "react";
import { cn } from "@/lib/utils";
import AppCard, { AppType } from "./AppCard";
import { 
  FileCode, 
  Cpu, 
  Database, 
  Terminal, 
  Globe, 
  Cog,
  Rocket,
  Bot,
  Code,
  Server,
  Braces,
  FileType
} from "lucide-react";

interface AppGridProps {
  title: string;
  className?: string;
}

export default function AppGrid({ title, className }: AppGridProps) {
  const apps = [
    {
      name: "Rust API Server",
      description: "High-performance REST API server",
      icon: <Server className="h-5 w-5" />,
      type: "rust" as AppType,
      status: "running" as const
    },
    {
      name: "Go Microservice",
      description: "Fast and lightweight service",
      icon: <Globe className="h-5 w-5" />,
      type: "go" as AppType,
      status: "running" as const
    },
    {
      name: "Python ML Model",
      description: "Machine learning prediction service",
      icon: <Bot className="h-5 w-5" />,
      type: "python" as AppType,
      status: "stopped" as const
    },
    {
      name: "Node.js Backend",
      description: "Express API for web application",
      icon: <Code className="h-5 w-5" />,
      type: "node" as AppType,
      status: "running" as const
    },
    {
      name: "React Dashboard",
      description: "Frontend web application",
      icon: <Braces className="h-5 w-5" />,
      type: "js" as AppType,
      status: "running" as const
    },
    {
      name: "TypeScript Service",
      description: "Strongly typed backend service",
      icon: <FileType className="h-5 w-5" />,
      type: "ts" as AppType,
      status: "error" as const
    },
  ];

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <button className="text-sm font-medium text-primary">View all</button>
      </div>
      <div className="app-grid">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            description={app.description}
            icon={app.icon}
            type={app.type}
            status={app.status}
          />
        ))}
      </div>
    </div>
  );
}
