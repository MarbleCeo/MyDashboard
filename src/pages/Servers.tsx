
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Server, HardDrive, Activity } from 'lucide-react';
import SystemMonitor from '@/components/dashboard/SystemMonitor';

const Servers = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Servers</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <SystemMonitor 
            title="Server CPU" 
            icon={<Server size={16} />} 
            value={24} 
            max={100} 
            unit="%" 
          />
          <SystemMonitor 
            title="Server Memory" 
            icon={<HardDrive size={16} />} 
            value={3.7} 
            max={16} 
            unit="GB" 
          />
          <SystemMonitor 
            title="Network" 
            icon={<Activity size={16} />} 
            value={28} 
            max={1000} 
            unit="Mbps" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Server Management</h2>
          <p className="text-muted-foreground mb-4">
            Manage your physical and virtual servers, monitor resources, and organize infrastructure.
          </p>
          
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">Web Server</h3>
                </div>
                <span className="text-sm text-muted-foreground">192.168.1.10</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">Database Server</h3>
                </div>
                <span className="text-sm text-muted-foreground">192.168.1.11</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <h3 className="font-medium">Authentication Server</h3>
                </div>
                <span className="text-sm text-muted-foreground">192.168.1.12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Servers;
