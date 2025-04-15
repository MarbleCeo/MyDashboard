
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Package, Cpu, RefreshCw } from 'lucide-react';
import SystemMonitor from '@/components/dashboard/SystemMonitor';

const Containers = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Containers</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <SystemMonitor 
            title="Container CPU" 
            icon={<Cpu size={16} />} 
            value={18} 
            max={100} 
            unit="%" 
          />
          <SystemMonitor 
            title="Active Containers" 
            icon={<Package size={16} />} 
            value={12} 
            max={20} 
            unit="" 
          />
          <SystemMonitor 
            title="Restarts" 
            icon={<RefreshCw size={16} />} 
            value={3} 
            max={100} 
            unit="" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Container Management</h2>
          <p className="text-muted-foreground mb-4">
            Manage your Docker containers, monitor resource usage, and handle deployments.
          </p>
          
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">web-server</h3>
                </div>
                <span className="text-sm text-muted-foreground">Running - 2d</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">api-service</h3>
                </div>
                <span className="text-sm text-muted-foreground">Running - 5d</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <h3 className="font-medium">cache-service</h3>
                </div>
                <span className="text-sm text-muted-foreground">Stopped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Containers;
