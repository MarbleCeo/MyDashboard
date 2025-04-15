
import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Server, HardDrive, Activity, Plus, Loader2 } from 'lucide-react';
import SystemMonitor from '@/components/dashboard/SystemMonitor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface ServerInfo {
  id: string;
  name: string;
  ip: string;
  status: 'online' | 'offline' | 'warning';
}

const Servers = () => {
  const [servers, setServers] = useState<ServerInfo[]>([
    { id: '1', name: 'Web Server', ip: '192.168.1.10', status: 'online' },
    { id: '2', name: 'Database Server', ip: '192.168.1.11', status: 'online' },
    { id: '3', name: 'Authentication Server', ip: '192.168.1.12', status: 'warning' }
  ]);
  
  const [showAddServer, setShowAddServer] = useState(false);
  const [serverName, setServerName] = useState('');
  const [serverIP, setServerIP] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  
  const { toast } = useToast();

  const handleAddServer = () => {
    if (!serverName || !serverIP) {
      toast({
        title: "Error",
        description: "Please provide both server name and IP address",
        variant: "destructive"
      });
      return;
    }

    // Simulate connection attempt
    setIsConnecting(true);
    setTimeout(() => {
      setServers([
        ...servers,
        { 
          id: Date.now().toString(), 
          name: serverName, 
          ip: serverIP, 
          status: 'online' 
        }
      ]);
      
      setIsConnecting(false);
      setServerName('');
      setServerIP('');
      setShowAddServer(false);
      
      toast({
        title: "Server connected",
        description: `Successfully connected to ${serverName} (${serverIP})`,
        variant: "default"
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Servers</h1>
          <Button onClick={() => setShowAddServer(!showAddServer)}>
            <Plus className="mr-2 h-4 w-4" /> Add Server
          </Button>
        </div>
        
        {showAddServer && (
          <div className="rounded-lg border bg-card p-4 shadow-sm mb-6">
            <h2 className="text-lg font-medium mb-3">Connect to a Server</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium" htmlFor="server-name">Server Name</label>
                <Input 
                  id="server-name" 
                  value={serverName} 
                  onChange={(e) => setServerName(e.target.value)} 
                  placeholder="e.g., Home NAS" 
                  className="mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="server-ip">IP Address</label>
                <Input 
                  id="server-ip" 
                  value={serverIP} 
                  onChange={(e) => setServerIP(e.target.value)} 
                  placeholder="e.g., 192.168.1.100" 
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowAddServer(false)}>Cancel</Button>
              <Button onClick={handleAddServer} disabled={isConnecting}>
                {isConnecting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isConnecting ? 'Connecting...' : 'Connect'}
              </Button>
            </div>
          </div>
        )}
        
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
            {servers.map(server => (
              <div key={server.id} className="rounded-md border p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${
                      server.status === 'online' ? 'bg-green-500' : 
                      server.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                    }`}></div>
                    <h3 className="font-medium">{server.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{server.ip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Servers;
