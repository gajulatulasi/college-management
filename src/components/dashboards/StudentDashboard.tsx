import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, BookOpen, User, FileText, Award, MessageCircle, Bell, CreditCard, TrendingUp, Clock } from "lucide-react";
import PaymentPortal from "@/components/student/PaymentPortal";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const academicData = [
    { subject: 'Mathematics', midterm1: 45, midterm2: 42, internal: 28.2, final: 85 },
    { subject: 'Physics', midterm1: 38, midterm2: 44, internal: 26.8, final: 78 },
    { subject: 'Chemistry', midterm1: 46, midterm2: 41, internal: 27.8, final: 82 },
    { subject: 'Computer Science', midterm1: 48, midterm2: 47, internal: 28.8, final: 88 },
  ];

  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 88 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 90 },
    { month: 'May', attendance: 87 },
  ];

  const assignments = [
    { title: 'Physics Lab Report', subject: 'Physics', deadline: '2024-06-15', status: 'pending', progress: 60 },
    { title: 'Math Problem Set', subject: 'Mathematics', deadline: '2024-06-18', status: 'submitted', progress: 100 },
    { title: 'Chemistry Analysis', subject: 'Chemistry', deadline: '2024-06-20', status: 'in-progress', progress: 30 },
  ];

  const certificates = [
    { title: 'Programming Contest Winner', category: 'Academic', status: 'approved', date: '2024-05-15' },
    { title: 'Basketball Tournament', category: 'Sports', status: 'pending', date: '2024-05-20' },
    { title: 'Music Competition', category: 'Arts', status: 'approved', date: '2024-04-10' },
  ];

  return (
    <div className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Student Dashboard</h2>
          <p className="text-gray-600 mt-1">Welcome back, Alex Johnson</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="hover:bg-blue-50">
            <Bell className="h-4 w-4 mr-2" />
            Notifications (3)
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            Messages
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="bg-white rounded-xl p-2 shadow-sm">
          <TabsList className="grid w-full grid-cols-7 bg-gray-50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
            <TabsTrigger value="academics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Academics</TabsTrigger>
            <TabsTrigger value="assignments" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Assignments</TabsTrigger>
            <TabsTrigger value="attendance" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Attendance</TabsTrigger>
            <TabsTrigger value="payments" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Payments</TabsTrigger>
            <TabsTrigger value="certificates" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Certificates</TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Profile</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium opacity-90">Current GPA</CardTitle>
                <BookOpen className="h-4 w-4 opacity-80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8.7</div>
                <p className="text-xs opacity-80 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.3 from last semester
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium opacity-90">Attendance</CardTitle>
                <User className="h-4 w-4 opacity-80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">91%</div>
                <Progress value={91} className="mt-2 bg-white/20" />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium opacity-90">Pending Tasks</CardTitle>
                <FileText className="h-4 w-4 opacity-80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs opacity-80 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  2 assignments, 1 project
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium opacity-90">Achievements</CardTitle>
                <Award className="h-4 w-4 opacity-80" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs opacity-80">Certificates earned</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Academic Performance</CardTitle>
                <CardDescription>Subject-wise internal marks distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={academicData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="internal" fill="url(#blueGradient)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Attendance Trend</CardTitle>
                <CardDescription>Monthly attendance percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="attendance" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="academics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Records</CardTitle>
              <CardDescription>Detailed view of your academic performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicData.map((subject, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{subject.subject}</h4>
                      <Badge variant="secondary">Internal: {subject.internal}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Mid 1:</span>
                        <span className="ml-1 font-medium">{subject.midterm1}/50</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Mid 2:</span>
                        <span className="ml-1 font-medium">{subject.midterm2}/50</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Internal:</span>
                        <span className="ml-1 font-medium">{subject.internal}/30</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Final:</span>
                        <span className="ml-1 font-medium">{subject.final}/100</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-xs text-gray-500 mb-1">Internal Calculation: Higher Mid × 0.8 + Lower Mid × 0.2</div>
                      <Progress value={(subject.internal / 30) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assignments & Projects</CardTitle>
              <CardDescription>Track your assignment progress and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.subject}</p>
                      </div>
                      <Badge 
                        variant={assignment.status === 'submitted' ? 'default' : assignment.status === 'pending' ? 'destructive' : 'secondary'}
                      >
                        {assignment.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span>Deadline: {assignment.deadline}</span>
                      <span>Progress: {assignment.progress}%</span>
                    </div>
                    <Progress value={assignment.progress} className="h-2" />
                    <div className="mt-2 flex space-x-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      {assignment.status !== 'submitted' && (
                        <Button size="sm">Submit Work</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Record</CardTitle>
              <CardDescription>View your attendance history and submit appeals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">91%</div>
                    <div className="text-sm text-green-700">Overall Attendance</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">156</div>
                    <div className="text-sm text-blue-700">Classes Attended</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">15</div>
                    <div className="text-sm text-red-700">Classes Missed</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">2</div>
                    <div className="text-sm text-yellow-700">Pending Appeals</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Recent Attendance Log</h4>
                  <Button size="sm" variant="outline">Request Appeal</Button>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Subject</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">2024-06-01</td>
                        <td className="p-3">Mathematics</td>
                        <td className="p-3"><Badge variant="default">Present</Badge></td>
                        <td className="p-3">-</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">2024-05-31</td>
                        <td className="p-3">Physics</td>
                        <td className="p-3"><Badge variant="destructive">Absent</Badge></td>
                        <td className="p-3"><Button size="sm" variant="ghost">Appeal</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <PaymentPortal />
        </TabsContent>

        <TabsContent value="certificates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Certificates & Achievements</CardTitle>
              <CardDescription>Manage your certificates and track extracurricular activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Your Certificates</h4>
                <Button size="sm">Upload Certificate</Button>
              </div>
              
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-sm text-gray-600">{cert.category} • {cert.date}</p>
                      </div>
                      <Badge 
                        variant={cert.status === 'approved' ? 'default' : 'secondary'}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">View Certificate</Button>
                      <Button size="sm" variant="ghost">Download</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Profile</CardTitle>
              <CardDescription>Manage your personal information and academic details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Alex Johnson</h3>
                    <p className="text-gray-600">Student ID: STU2024001</p>
                    <Button size="sm" className="mt-2">Upload Photo</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Personal Information</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <p className="font-medium">alex.johnson@chibunova.edu</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Phone</label>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Date of Birth</label>
                        <p className="font-medium">January 15, 2003</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Academic Information</h4>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm text-gray-600">Department</label>
                        <p className="font-medium">Computer Science</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Year</label>
                        <p className="font-medium">3rd Year</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Semester</label>
                        <p className="font-medium">6th Semester</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button>Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
