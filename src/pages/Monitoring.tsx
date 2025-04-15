
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '00:00', cpu: 25, memory: 35, network: 15 },
  { name: '03:00', cpu: 30, memory: 38, network: 20 },
  { name: '06:00', cpu: 35, memory: 42, network: 25 },
  { name: '09:00', cpu: 65, memory: 60, network: 45 },
  { name: '12:00', cpu: 45, memory: 55, network: 35 },
  { name: '15:00', cpu: 50, memory: 52, network: 40 },
  { name: '18:00', cpu: 75, memory: 65, network: 55 },
  { name: '21:00', cpu: 40, memory: 50, network: 30 },
  { name: '24:00', cpu: 32, memory: 40, network: 18 },
];

const Monitoring = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">System Monitoring</h1>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {/* CPU Usage Chart */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">CPU Usage</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cpu" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Memory Usage Chart */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Memory Usage</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="memory" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Network Usage Chart */}
          <div className="rounded-lg border bg-card p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Network Usage</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="network" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Monitoring;
