
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Database, HardDrive, Activity } from 'lucide-react';
import SystemMonitor from '@/components/dashboard/SystemMonitor';

const Databases = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Databases</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <SystemMonitor 
            title="Database Load" 
            icon={<Database size={16} />} 
            value={35} 
            max={100} 
            unit="%" 
          />
          <SystemMonitor 
            title="Disk Space" 
            icon={<HardDrive size={16} />} 
            value={156} 
            max={500} 
            unit="GB" 
          />
          <SystemMonitor 
            title="Connections" 
            icon={<Activity size={16} />} 
            value={68} 
            max={250} 
            unit="" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Database Management</h2>
          <p className="text-muted-foreground mb-4">
            Manage your database instances, monitor performance metrics, and optimize storage.
          </p>
          
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">PostgreSQL</h3>
                </div>
                <span className="text-sm text-muted-foreground">v14.5</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <h3 className="font-medium">MongoDB</h3>
                </div>
                <span className="text-sm text-muted-foreground">v6.0.3</span>
              </div>
            </div>
            
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <h3 className="font-medium">Redis</h3>
                </div>
                <span className="text-sm text-muted-foreground">v7.0.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Databases;
