
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type AppType = "rust" | "go" | "python" | "node" | "js" | "ts" | "other";

interface AppCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  type: AppType;
  status?: "running" | "stopped" | "error";
  href?: string;
  className?: string;
}

export default function AppCard({
  name,
  description,
  icon,
  type,
  status = "running",
  href = "#",
  className,
}: AppCardProps) {
  const statusColors = {
    running: "bg-success/10 text-success border-success/20",
    stopped: "bg-muted/10 text-muted-foreground border-muted/20",
    error: "bg-destructive/10 text-destructive border-destructive/20",
  };

  const typeIcons = {
    rust: "app-icon-rust",
    go: "app-icon-go",
    python: "app-icon-python",
    node: "app-icon-node",
    js: "app-icon-js",
    ts: "app-icon-ts",
    other: "bg-gray-600",
  };

  return (
    <a
      href={href}
      className={cn(
        "group relative flex flex-col rounded-lg border bg-card p-5 shadow-sm transition-all hover:border-primary/20 hover:shadow-md",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={cn("app-icon", typeIcons[type])}>{icon}</div>
        <Badge
          variant="outline"
          className={cn("capitalize", statusColors[status])}
        >
          {status}
        </Badge>
      </div>
      <h3 className="mb-1 font-semibold group-hover:text-primary">{name}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  );
}
