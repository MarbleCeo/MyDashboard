
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarGroupContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { 
  Home, 
  LayoutGrid, 
  Settings, 
  Terminal, 
  Server, 
  Database, 
  Package, 
  Monitor, 
  User, 
  HelpCircle, 
  LogOut, 
  Moon, 
  Sun,
  Search
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [darkMode, setDarkMode] = React.useState(true);
  const location = useLocation();
  
  // Initialize theme from localStorage on component mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setDarkMode(savedTheme === 'dark');
  }, []);
  
  // Update theme in both DOM and localStorage when it changes
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Check if a menu item is active based on current path
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-1">
                <Terminal className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">MyDashboard</span>
            </div>
            <SidebarTrigger />
          </SidebarHeader>
          
          <SidebarContent>
            <div className="mb-4 px-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="search" 
                  placeholder="Search..." 
                  className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                />
              </div>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/')}>
                      <Link to="/">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/apps')}>
                      <Link to="/apps">
                        <LayoutGrid className="h-4 w-4" />
                        <span>Applications</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/servers')}>
                      <Link to="/servers">
                        <Server className="h-4 w-4" />
                        <span>Servers</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/databases')}>
                      <Link to="/databases">
                        <Database className="h-4 w-4" />
                        <span>Databases</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Development</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/containers')}>
                      <Link to="/containers">
                        <Package className="h-4 w-4" />
                        <span>Containers</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/monitors')}>
                      <Link to="/monitors">
                        <Monitor className="h-4 w-4" />
                        <span>Monitoring</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/terminals')}>
                      <Link to="/terminals">
                        <Terminal className="h-4 w-4" />
                        <span>Terminals</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/profile')}>
                      <Link to="/profile">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive('/settings')}>
                      <Link to="/settings">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex w-full items-center justify-between">
              <SidebarMenuButton asChild isActive={isActive('/help')}>
                <Link to="/help" className="!p-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
                </Link>
              </SidebarMenuButton>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  aria-label="Toggle theme"
                >
                  {darkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
                
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  aria-label="Log out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 pl-16 lg:pl-64">
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
