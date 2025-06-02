
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import FacultyDashboard from "@/components/dashboards/FacultyDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
  userRole: 'student' | 'faculty' | 'admin' | null;
  onLogout: () => void;
}

const Dashboard = ({ userRole, onLogout }: DashboardProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  if (!userRole) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Chibunova Campus</h1>
                <p className="text-sm text-gray-600 capitalize">{userRole} Portal</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {userRole === 'student' && <StudentDashboard />}
        {userRole === 'faculty' && <FacultyDashboard />}
        {userRole === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;
