
import React from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface SystemMonitorProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  max?: number;
  unit?: string;
  className?: string;
}

export default function SystemMonitor({
  title,
  icon,
  value,
  max = 100,
  unit = "%",
  className,
}: SystemMonitorProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className={cn("rounded-lg border bg-card p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <span className="font-medium text-sm">{title}</span>
        </div>
        <span className="text-sm font-mono">
          {value}
          {unit}
        </span>
      </div>
      <div className="mt-3">
        <Progress value={percentage} className="h-2" />
      </div>
    </div>
  );
}
