
import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Terminal as TerminalIcon, Plus, X, Maximize2, Minimize2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface TerminalTab {
  id: string;
  name: string;
  content: string[];
  isActive: boolean;
}

const Terminals = () => {
  const [tabs, setTabs] = useState<TerminalTab[]>([
    { 
      id: '1', 
      name: 'Main Server', 
      content: [
        'user@server:~$ ls -la',
        'total 56',
        'drwxr-xr-x 8 user user  4096 Apr 15 10:22 .',
        'drwxr-xr-x 4 root root  4096 Apr 12 09:15 ..',
        '-rw------- 1 user user   956 Apr 15 09:05 .bash_history',
        '-rw-r--r-- 1 user user   220 Apr 12 09:15 .bash_logout',
        '-rw-r--r-- 1 user user  3771 Apr 12 09:15 .bashrc',
        'drwx------ 3 user user  4096 Apr 15 08:12 .cache',
        'drwx------ 3 user user  4096 Apr 14 18:33 .config',
        'drwxr-xr-x 3 user user  4096 Apr 15 08:12 .local',
        '-rw-r--r-- 1 user user   807 Apr 12 09:15 .profile',
        'drwx------ 2 user user  4096 Apr 15 08:12 .ssh',
        '-rw------- 1 user user  7763 Apr 15 10:22 .viminfo',
      ],
      isActive: true
    }
  ]);
  
  const [command, setCommand] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const { toast } = useToast();
  
  const addNewTab = () => {
    // Set all tabs to inactive
    const updatedTabs = tabs.map(tab => ({ ...tab, isActive: false }));
    
    // Add new tab
    const newTab = {
      id: Date.now().toString(),
      name: `Terminal ${updatedTabs.length + 1}`,
      content: ['Welcome to MyDashboard Terminal'],
      isActive: true
    };
    
    setTabs([...updatedTabs, newTab]);
  };
  
  const closeTab = (id: string) => {
    // If trying to close the only tab, don't allow it
    if (tabs.length === 1) {
      toast({
        description: "Cannot close the only terminal tab",
        variant: "default"
      });
      return;
    }
    
    // Filter out the closed tab
    const remainingTabs = tabs.filter(tab => tab.id !== id);
    
    // If closing the active tab, activate another one
    if (tabs.find(tab => tab.id === id)?.isActive && remainingTabs.length > 0) {
      remainingTabs[0].isActive = true;
    }
    
    setTabs(remainingTabs);
  };
  
  const activateTab = (id: string) => {
    const updatedTabs = tabs.map(tab => ({
      ...tab,
      isActive: tab.id === id
    }));
    
    setTabs(updatedTabs);
  };
  
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim()) return;
    
    const activeTabIndex = tabs.findIndex(tab => tab.isActive);
    if (activeTabIndex === -1) return;
    
    const updatedTabs = [...tabs];
    const activeTab = {...updatedTabs[activeTabIndex]};
    
    // Add user command with prompt
    activeTab.content = [
      ...activeTab.content, 
      `user@server:~$ ${command}`
    ];
    
    // Process command
    switch(command.toLowerCase()) {
      case 'clear':
        activeTab.content = ['Terminal cleared'];
        break;
      case 'help':
        activeTab.content = [
          ...activeTab.content,
          'Available commands:',
          '  help     - Display this help message',
          '  clear    - Clear the terminal',
          '  whoami   - Display current user',
          '  date     - Display current date and time',
          '  hostname - Display server hostname',
          '  ls       - List files in current directory'
        ];
        break;
      case 'whoami':
        activeTab.content = [...activeTab.content, 'admin'];
        break;
      case 'date':
        activeTab.content = [...activeTab.content, new Date().toString()];
        break;
      case 'hostname':
        activeTab.content = [...activeTab.content, 'mydashboard-server'];
        break;
      case 'ls':
        activeTab.content = [
          ...activeTab.content,
          'apps/  config/  data/  logs/  scripts/  users/'
        ];
        break;
      default:
        activeTab.content = [
          ...activeTab.content, 
          `Command not found: ${command}. Type 'help' for available commands.`
        ];
    }
    
    updatedTabs[activeTabIndex] = activeTab;
    setTabs(updatedTabs);
    setCommand('');
  };

  // Auto-scroll terminal to bottom when content changes
  useEffect(() => {
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
      terminalContent.scrollTop = terminalContent.scrollHeight;
    }
  }, [tabs]);

  return (
    <DashboardLayout>
      <div className={cn("p-6", fullscreen && "fixed inset-0 bg-background z-50 p-0")}>
        {!fullscreen && (
          <h1 className="text-3xl font-bold mb-6">Terminals</h1>
        )}
        
        <div className={cn(
          "rounded-lg border border-muted bg-card shadow-sm", 
          fullscreen && "h-full rounded-none border-0"
        )}>
          <div className="flex items-center justify-between border-b p-2 bg-muted/20">
            <div className="flex items-center overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <div 
                  key={tab.id} 
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md mr-1 cursor-pointer",
                    tab.isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  )}
                  onClick={() => activateTab(tab.id)}
                >
                  <TerminalIcon size={14} />
                  <span className="font-medium text-sm whitespace-nowrap">{tab.name}</span>
                  <button 
                    className={cn(
                      "rounded-full p-0.5 hover:bg-background/20",
                      tab.isActive ? "text-primary-foreground" : "text-muted-foreground"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.id);
                    }}
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button 
                className="rounded-md p-1 hover:bg-muted"
                onClick={addNewTab}
              >
                <Plus size={16} />
              </button>
              <button 
                className="rounded-md p-1 hover:bg-muted"
                onClick={() => setFullscreen(!fullscreen)}
              >
                {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
            </div>
          </div>
          
          {tabs.map((tab) => (
            <div 
              key={tab.id} 
              className={cn(
                "terminal-content bg-card font-mono text-sm p-4 overflow-y-auto",
                fullscreen ? "h-[calc(100vh-40px)]" : "h-[300px]",
                !tab.isActive && "hidden"
              )}
            >
              {tab.content.map((line, index) => (
                <div key={index} className={cn(
                  line.startsWith('user@server') ? "text-green-500 dark:text-green-400" : ""
                )}>
                  {line}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex items-center mt-2">
                <span className="text-green-500 dark:text-green-400 mr-2">user@server:~$</span>
                <Input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  className="flex-1 border-none bg-transparent p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="icon" className="p-0 ml-1">
                  <ArrowRight size={14} />
                </Button>
              </form>
            </div>
          ))}
        </div>
        
        {!fullscreen && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <div className="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30 transition-colors cursor-pointer" onClick={addNewTab}>
              <div className="flex items-center gap-2 mb-2">
                <TerminalIcon size={16} />
                <h3 className="font-medium">New Terminal</h3>
              </div>
              <p className="text-sm text-muted-foreground">Create a new terminal session</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <TerminalIcon size={16} />
                <h3 className="font-medium">SSH Session</h3>
              </div>
              <p className="text-sm text-muted-foreground">Connect to server via SSH</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm hover:bg-muted/30 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <TerminalIcon size={16} />
                <h3 className="font-medium">Terminal Settings</h3>
              </div>
              <p className="text-sm text-muted-foreground">Configure terminal preferences</p>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Terminals;
