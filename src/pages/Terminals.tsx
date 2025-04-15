
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Terminal, Plus } from 'lucide-react';

const Terminals = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Terminals</h1>
        
        <div className="rounded-lg border border-muted bg-card shadow-sm mb-6">
          <div className="flex items-center justify-between border-b p-3 bg-muted/20">
            <div className="flex items-center gap-2">
              <Terminal size={16} />
              <span className="font-medium">bash - Main Server</span>
            </div>
            <div className="flex gap-2">
              <button className="rounded-md p-1 hover:bg-muted">
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="bg-card p-4 font-mono text-sm">
            <div className="text-green-500 dark:text-green-400">user@server:~$</div>
            <div className="mt-1">ls -la</div>
            <div className="mt-1">total 56</div>
            <div>drwxr-xr-x 8 user user  4096 Apr 15 10:22 .</div>
            <div>drwxr-xr-x 4 root root  4096 Apr 12 09:15 ..</div>
            <div>-rw------- 1 user user   956 Apr 15 09:05 .bash_history</div>
            <div>-rw-r--r-- 1 user user   220 Apr 12 09:15 .bash_logout</div>
            <div>-rw-r--r-- 1 user user  3771 Apr 12 09:15 .bashrc</div>
            <div>drwx------ 3 user user  4096 Apr 15 08:12 .cache</div>
            <div>drwx------ 3 user user  4096 Apr 14 18:33 .config</div>
            <div>drwxr-xr-x 3 user user  4096 Apr 15 08:12 .local</div>
            <div>-rw-r--r-- 1 user user   807 Apr 12 09:15 .profile</div>
            <div>drwx------ 2 user user  4096 Apr 15 08:12 .ssh</div>
            <div>-rw------- 1 user user  7763 Apr 15 10:22 .viminfo</div>
            <div className="mt-2 text-green-500 dark:text-green-400">user@server:~$</div>
            <div className="animate-pulse">_</div>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm hover-scale cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={16} />
              <h3 className="font-medium">New Terminal</h3>
            </div>
            <p className="text-sm text-muted-foreground">Create a new terminal session</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm hover-scale cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={16} />
              <h3 className="font-medium">SSH Session</h3>
            </div>
            <p className="text-sm text-muted-foreground">Connect to server via SSH</p>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm hover-scale cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={16} />
              <h3 className="font-medium">Terminal Settings</h3>
            </div>
            <p className="text-sm text-muted-foreground">Configure terminal preferences</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Terminals;
