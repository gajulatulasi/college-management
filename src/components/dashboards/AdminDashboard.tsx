
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, BookOpen, Calendar, Settings, FileText, MessageCircle } from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const enrollmentData = [
    { department: 'Computer Science', students: 450, faculty: 25 },
    { department: 'Mathematics', students: 320, faculty: 18 },
    { department: 'Physics', students: 280, faculty: 15 },
    { department: 'Chemistry', students: 250, faculty: 12 },
    { department: 'Biology', students: 380, faculty: 20 },
  ];

  const attendanceData = [
    { month: 'Jan', rate: 88 },
    { month: 'Feb', rate: 92 },
    { month: 'Mar', rate: 85 },
    { month: 'Apr', rate: 90 },
    { month: 'May', rate: 87 },
    { month: 'Jun', rate: 91 },
  ];

  const feeData = [
    { status: 'Paid', count: 1250, color: '#10b981' },
    { status: 'Pending', count: 180, color: '#f59e0b' },
    { status: 'Overdue', count: 45, color: '#ef4444' },
  ];

  const systemStats = [
    { metric: 'Total Students', value: '1,680', change: '+12%', color: 'blue' },
    { metric: 'Total Faculty', value: '90', change: '+5%', color: 'green' },
    { metric: 'Active Courses', value: '245', change: '+8%', color: 'purple' },
    { metric: 'System Uptime', value: '99.8%', change: '+0.2%', color: 'indigo' },
  ];

  const recentActivity = [
    { activity: 'New student registration', user: 'John Doe', time: '2 minutes ago', type: 'registration' },
    { activity: 'Course syllabus updated', user: 'Prof. Smith', time: '15 minutes ago', type: 'content' },
    { activity: 'Grade submission', user: 'Prof. Johnson', time: '1 hour ago', type: 'grading' },
    { activity: 'Payment received', user: 'Alice Wilson', time: '2 hours ago', type: 'payment' },
  ];

  const pendingApprovals = [
    { type: 'Certificate Verification', count: 12, priority: 'high' },
    { type: 'Faculty Registration', count: 3, priority: 'medium' },
    { type: 'Course Approval', count: 8, priority: 'low' },
    { type: 'Scholarship Applications', count: 25, priority: 'high' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-gray-600">Comprehensive system management and oversight</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemStats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.metric}</CardTitle>
                  <div className={`h-4 w-4 rounded-full bg-${stat.color}-100`}>
                    <div className={`h-full w-full rounded-full bg-${stat.color}-500`}></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Enrollment</CardTitle>
                <CardDescription>Student and faculty distribution by department</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#3b82f6" name="Students" />
                    <Bar dataKey="faculty" fill="#10b981" name="Faculty" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Institution-wide attendance rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="rate" stroke="#8b5cf6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest system activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'registration' ? 'bg-blue-500' :
                        activity.type === 'content' ? 'bg-green-500' :
                        activity.type === 'grading' ? 'bg-purple-500' : 'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.activity}</p>
                        <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>Items requiring administrative approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingApprovals.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{item.type}</h4>
                        <p className="text-sm text-gray-600">{item.count} pending</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'default' : 'secondary'}
                        >
                          {item.priority}
                        </Badge>
                        <Button size="sm">Review</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage student and faculty accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    Add New User
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <FileText className="h-6 w-6 mb-2" />
                    Bulk Import
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Settings className="h-6 w-6 mb-2" />
                    Role Management
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">1,680</div>
                    <div className="text-sm text-blue-700">Total Students</div>
                    <Button size="sm" className="mt-2" variant="outline">Manage</Button>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">90</div>
                    <div className="text-sm text-green-700">Faculty Members</div>
                    <Button size="sm" className="mt-2" variant="outline">Manage</Button>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">25</div>
                    <div className="text-sm text-purple-700">Admin Users</div>
                    <Button size="sm" className="mt-2" variant="outline">Manage</Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Registrations</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-3 text-left">Name</th>
                          <th className="p-3 text-left">Role</th>
                          <th className="p-3 text-left">Department</th>
                          <th className="p-3 text-left">Status</th>
                          <th className="p-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3 font-medium">John Smith</td>
                          <td className="p-3">Student</td>
                          <td className="p-3">Computer Science</td>
                          <td className="p-3"><Badge variant="secondary">Pending</Badge></td>
                          <td className="p-3">
                            <div className="flex space-x-1">
                              <Button size="sm" variant="ghost">Approve</Button>
                              <Button size="sm" variant="ghost">Reject</Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-medium">Dr. Emily Davis</td>
                          <td className="p-3">Faculty</td>
                          <td className="p-3">Mathematics</td>
                          <td className="p-3"><Badge variant="default">Approved</Badge></td>
                          <td className="p-3">
                            <Button size="sm" variant="ghost">View</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="academics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Academic Management</CardTitle>
              <CardDescription>Manage courses, schedules, and academic calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Manage Courses
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Calendar className="h-6 w-6 mb-2" />
                    Academic Calendar
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Users className="h-6 w-6 mb-2" />
                    Faculty Assignment
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <FileText className="h-6 w-6 mb-2" />
                    Examination Schedule
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">245</div>
                    <div className="text-sm text-blue-700">Active Courses</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">8</div>
                    <div className="text-sm text-green-700">Departments</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">4</div>
                    <div className="text-sm text-purple-700">Semesters</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">12</div>
                    <div className="text-sm text-yellow-700">Academic Years</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Course Statistics</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={enrollmentData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="students" fill="#3b82f6" name="Enrolled Students" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Management</CardTitle>
              <CardDescription>Monitor fees, payments, and financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$2.4M</div>
                    <div className="text-sm text-green-700">Total Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">$180K</div>
                    <div className="text-sm text-blue-700">Pending Payments</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">$45K</div>
                    <div className="text-sm text-red-700">Overdue Amount</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">$300K</div>
                    <div className="text-sm text-purple-700">Scholarships</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Status Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={feeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ status, count }) => `${status}: ${count}`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="count"
                          >
                            {feeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Recent Transactions</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium">Tuition Payment</h5>
                          <p className="text-sm text-gray-600">John Smith • STU001</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">+$2,500</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium">Lab Fee</h5>
                          <p className="text-sm text-gray-600">Sarah Davis • STU002</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">+$150</div>
                          <div className="text-xs text-gray-500">1 day ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reports & Analytics</CardTitle>
              <CardDescription>Generate comprehensive reports and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Academic Report
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Users className="h-6 w-6 mb-2" />
                    Attendance Report
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Financial Report
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Scheduled Reports</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h5 className="font-medium">Monthly Attendance Report</h5>
                        <p className="text-sm text-gray-600">Automated • Next run: June 30, 2024</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm">Run Now</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h5 className="font-medium">Grade Distribution Analysis</h5>
                        <p className="text-sm text-gray-600">Weekly • Next run: June 15, 2024</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Edit</Button>
                        <Button size="sm">Run Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>System Administration</CardTitle>
              <CardDescription>Configure system settings and monitor performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    System Config
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Users className="h-6 w-6 mb-2" />
                    User Roles
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <FileText className="h-6 w-6 mb-2" />
                    Backup & Restore
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Notifications
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">System Health</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Database Performance</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={95} className="w-20" />
                          <span className="text-sm text-green-600">95%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Server Response Time</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={88} className="w-20" />
                          <span className="text-sm text-green-600">120ms</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Storage Usage</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={72} className="w-20" />
                          <span className="text-sm text-yellow-600">72%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Security Status</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm">SSL Certificate</span>
                        <Badge variant="default">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm">Firewall</span>
                        <Badge variant="default">Protected</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-sm">Last Backup</span>
                        <Badge variant="secondary">2 hours ago</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
