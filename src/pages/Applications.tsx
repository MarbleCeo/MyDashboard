
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AppGrid from '@/components/dashboard/AppGrid';

const Applications = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Applications</h1>
        <AppGrid title="My Applications" />
      </div>
    </DashboardLayout>
  );
};

export default Applications;
