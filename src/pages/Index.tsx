
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import StudentDashboard from "@/components/dashboards/StudentDashboard";
import FacultyDashboard from "@/components/dashboards/FacultyDashboard";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import { GraduationCap, BookOpen, Users, Settings } from "lucide-react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'faculty' | 'admin' | null>(null);

  const handleLogin = (role: 'student' | 'faculty' | 'admin') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Chibunova Campus</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">Comprehensive College Management System</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Welcome to Chibunova Campus</CardTitle>
                  <CardDescription className="text-center">
                    Your all-in-one platform for academic excellence and campus management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span>Complete Academic Management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-green-600" />
                      <span>Student-Faculty Collaboration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-purple-600" />
                      <span>Advanced Analytics & Reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <LoginForm onLogin={handleLogin} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-0 shadow-lg bg-blue-500/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-800">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700">Access your academic records, assignments, and track your progress</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-green-500/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-700">Manage courses, track student progress, and streamline grading</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-purple-500/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-800">Admin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-700">Comprehensive system management and institutional oversight</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
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

export default Index;
