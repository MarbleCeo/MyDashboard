
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import SystemMonitor from '@/components/dashboard/SystemMonitor';
import AppGrid from '@/components/dashboard/AppGrid';
import { 
  Cpu, 
  Server, 
  MemoryStick, 
  HardDrive,
  Activity,
  Download,
  Upload,
  Clock,
  Users,
  Boxes,
  BoxesIcon
} from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome to your application dashboard</p>
        </header>
        
        <section className="mb-8">
          <div className="stats-grid">
            <StatCard 
              icon={<Boxes className="h-4 w-4" />}
              title="Total Applications" 
              value="24"
              trend="up"
              trendValue="3 new"
            />
            <StatCard 
              icon={<Server className="h-4 w-4" />}
              title="Active Servers" 
              value="12"
              trend="neutral"
              trendValue="Stable"
            />
            <StatCard 
              icon={<Activity className="h-4 w-4" />}
              title="System Health" 
              value="98%"
              trend="up"
              trendValue="2.4%"
            />
            <StatCard 
              icon={<Users className="h-4 w-4" />}
              title="Active Users" 
              value="185"
              trend="up"
              trendValue="12%"
            />
          </div>
        </section>
        
        <section className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">System Resources</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SystemMonitor 
              title="CPU Usage" 
              icon={<Cpu className="h-4 w-4" />} 
              value={45} 
            />
            <SystemMonitor 
              title="Memory Usage" 
              icon={<MemoryStick className="h-4 w-4" />} 
              value={3.8} 
              max={8}
              unit=" GB" 
            />
            <SystemMonitor 
              title="Disk Space" 
              icon={<HardDrive className="h-4 w-4" />} 
              value={256} 
              max={512}
              unit=" GB" 
            />
            <SystemMonitor 
              title="Network" 
              icon={<Activity className="h-4 w-4" />} 
              value={65} 
              unit=" Mbps" 
              max={100}
            />
          </div>
        </section>
        
        <section>
          <AppGrid title="Recent Applications" />
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Index;
