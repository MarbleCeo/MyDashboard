
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Help = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">How do I add a new application?</h3>
                <p className="text-muted-foreground">
                  Navigate to the Applications page and click the "Add New Application" button to start the installation process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg">How do I monitor system resources?</h3>
                <p className="text-muted-foreground">
                  The Dashboard home page shows real-time monitoring of CPU, RAM, storage, and network usage.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg">How do I update the system?</h3>
                <p className="text-muted-foreground">
                  Go to Settings and select the "Updates" tab to check for and install available updates.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <p>Welcome to MyDashboard! Follow these steps to get started:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Explore the dashboard to view your system status</li>
                <li>Visit Applications to manage your apps</li>
                <li>Check Servers and Databases for infrastructure management</li>
                <li>Use the Development tools for your projects</li>
                <li>Update your Profile and Settings as needed</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                Need more help? Contact us at support@mydashboard.com or check our documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Help;
