
import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { User, Mail, Phone, MapPin, Globe, Briefcase, Calendar } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="rounded-lg border bg-card p-6 shadow-sm flex flex-col items-center">
              <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-16 w-16 text-primary" />
              </div>
              
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground mb-4">Administrator</p>
              
              <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>john.doe@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <p>https://example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company</p>
                    <p>MyDashboard Inc.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p>January 15, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Enable 2FA for enhanced security</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">API Access</p>
                    <p className="text-sm text-muted-foreground">Allow API access to your account</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
