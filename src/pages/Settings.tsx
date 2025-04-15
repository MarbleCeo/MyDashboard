
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Moon, Sun, Globe, Bell, Lock, Shield, Database, LayoutGrid } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Toggle } from '@/components/ui/toggle';

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <nav className="space-y-1">
              <button className="flex w-full items-center gap-2 rounded-md bg-primary px-3 py-2 text-primary-foreground">
                <Moon size={16} />
                <span>Appearance</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
                <Globe size={16} />
                <span>Language & Region</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
                <Bell size={16} />
                <span>Notifications</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
                <Lock size={16} />
                <span>Privacy & Security</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
                <Database size={16} />
                <span>Storage</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 hover:bg-muted">
                <Shield size={16} />
                <span>Backup & Restore</span>
              </button>
            </nav>
          </div>
          
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Appearance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Theme</h3>
                  <div className="flex gap-3">
                    <Toggle aria-pressed="true" className="flex flex-col gap-1.5 h-auto px-4 py-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                      <Sun className="h-5 w-5" />
                      <span className="text-xs">Light</span>
                    </Toggle>
                    <Toggle aria-pressed="false" className="flex flex-col gap-1.5 h-auto px-4 py-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                      <Moon className="h-5 w-5" />
                      <span className="text-xs">Dark</span>
                    </Toggle>
                    <Toggle aria-pressed="false" className="flex flex-col gap-1.5 h-auto px-4 py-3 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                      <LayoutGrid className="h-5 w-5" />
                      <span className="text-xs">System</span>
                    </Toggle>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Interface Options</h3>
                  
                  <div className="flex items-center justify-between">
                    <span>Compact Mode</span>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Reduced Motion</span>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Show Status Bar</span>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Sidebar</h3>
                  
                  <div className="flex items-center justify-between">
                    <span>Auto-collapse on mobile</span>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Remember sidebar state</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
