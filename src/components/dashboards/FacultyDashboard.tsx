
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BookOpen, Users, FileText, MessageCircle, Calendar, CheckSquare } from "lucide-react";

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courseData = [
    { course: 'Math 101', enrolled: 45, attendance: 92 },
    { course: 'Math 201', enrolled: 38, attendance: 88 },
    { course: 'Statistics', enrolled: 42, attendance: 90 },
  ];

  const gradeDistribution = [
    { grade: 'A', count: 15, color: '#10b981' },
    { grade: 'B', count: 25, color: '#3b82f6' },
    { grade: 'C', count: 8, color: '#f59e0b' },
    { grade: 'D', count: 4, color: '#ef4444' },
    { grade: 'F', count: 2, color: '#6b7280' },
  ];

  const upcomingClasses = [
    { course: 'Math 101', time: '09:00 AM', room: 'Room 301', students: 45 },
    { course: 'Math 201', time: '11:00 AM', room: 'Room 205', students: 38 },
    { course: 'Statistics', time: '02:00 PM', room: 'Room 401', students: 42 },
  ];

  const pendingTasks = [
    { task: 'Grade Math 101 Midterm', deadline: '2024-06-15', priority: 'high' },
    { task: 'Upload Statistics Lecture Notes', deadline: '2024-06-16', priority: 'medium' },
    { task: 'Review Assignment Submissions', deadline: '2024-06-18', priority: 'low' },
  ];

  const students = [
    { name: 'Alex Johnson', id: 'STU001', course: 'Math 101', grade: 'A', attendance: 95 },
    { name: 'Sarah Davis', id: 'STU002', course: 'Math 101', grade: 'B+', attendance: 88 },
    { name: 'Mike Wilson', id: 'STU003', course: 'Math 201', grade: 'A-', attendance: 92 },
    { name: 'Emily Brown', id: 'STU004', course: 'Statistics', grade: 'B', attendance: 90 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h2>
          <p className="text-gray-600">Welcome back, Prof. Dr. Smith</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Class
          </Button>
          <Button size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Upload Content
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="grading">Grading</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">125</div>
                <p className="text-xs text-muted-foreground">Across 3 courses</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Attendance</CardTitle>
                <CheckSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">90%</div>
                <Progress value={90} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 high priority</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">5 unread</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Enrollment</CardTitle>
                <CardDescription>Student enrollment by course</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={courseData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="course" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="enrolled" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Overall grade distribution across courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ grade, count }) => `${grade}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Upcoming classes and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingClasses.map((cls, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{cls.course}</h4>
                        <p className="text-sm text-gray-600">{cls.time} • {cls.room}</p>
                      </div>
                      <Badge variant="secondary">{cls.students} students</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
                <CardDescription>Tasks requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{task.task}</h4>
                        <p className="text-sm text-gray-600">Due: {task.deadline}</p>
                      </div>
                      <Badge 
                        variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>Manage your courses and track progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseData.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{course.course}</h4>
                        <p className="text-gray-600">{course.enrolled} students enrolled</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm">Manage</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">{course.attendance}%</div>
                        <div className="text-sm text-blue-700">Avg Attendance</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">15</div>
                        <div className="text-sm text-green-700">Assignments</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">8</div>
                        <div className="text-sm text-purple-700">Lectures</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <div className="text-xl font-bold text-yellow-600">3</div>
                        <div className="text-sm text-yellow-700">Exams</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Management</CardTitle>
              <CardDescription>Monitor student progress and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Student List</h4>
                  <Button size="sm" variant="outline">Export Data</Button>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 text-left">Student</th>
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left">Course</th>
                        <th className="p-3 text-left">Grade</th>
                        <th className="p-3 text-left">Attendance</th>
                        <th className="p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-3 font-medium">{student.name}</td>
                          <td className="p-3">{student.id}</td>
                          <td className="p-3">{student.course}</td>
                          <td className="p-3">
                            <Badge variant="secondary">{student.grade}</Badge>
                          </td>
                          <td className="p-3">{student.attendance}%</td>
                          <td className="p-3">
                            <div className="flex space-x-1">
                              <Button size="sm" variant="ghost">View</Button>
                              <Button size="sm" variant="ghost">Message</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="grading" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grading Center</CardTitle>
              <CardDescription>Manage grades and assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24</div>
                    <div className="text-sm text-blue-700">Pending Grades</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-green-700">Graded Items</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">B+</div>
                    <div className="text-sm text-purple-700">Class Average</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Submissions</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-3 text-left">Assignment</th>
                          <th className="p-3 text-left">Course</th>
                          <th className="p-3 text-left">Submissions</th>
                          <th className="p-3 text-left">Status</th>
                          <th className="p-3 text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3 font-medium">Midterm Exam</td>
                          <td className="p-3">Math 101</td>
                          <td className="p-3">42/45</td>
                          <td className="p-3"><Badge variant="destructive">Pending</Badge></td>
                          <td className="p-3">
                            <Button size="sm">Grade Now</Button>
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3 font-medium">Problem Set 5</td>
                          <td className="p-3">Math 201</td>
                          <td className="p-3">38/38</td>
                          <td className="p-3"><Badge variant="default">Completed</Badge></td>
                          <td className="p-3">
                            <Button size="sm" variant="outline">Review</Button>
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

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedule</CardTitle>
              <CardDescription>Manage your teaching schedule and office hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Weekly Schedule</h4>
                  <Button size="sm">Add Class</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="border rounded-lg p-3">
                      <h5 className="font-semibold text-center mb-2">{day}</h5>
                      <div className="space-y-2">
                        {day === 'Mon' && (
                          <>
                            <div className="bg-blue-100 p-2 rounded text-xs">
                              <div className="font-medium">Math 101</div>
                              <div>9:00-10:30</div>
                            </div>
                            <div className="bg-green-100 p-2 rounded text-xs">
                              <div className="font-medium">Office Hours</div>
                              <div>2:00-4:00</div>
                            </div>
                          </>
                        )}
                        {day === 'Wed' && (
                          <div className="bg-purple-100 p-2 rounded text-xs">
                            <div className="font-medium">Statistics</div>
                            <div>11:00-12:30</div>
                          </div>
                        )}
                        {day === 'Fri' && (
                          <div className="bg-yellow-100 p-2 rounded text-xs">
                            <div className="font-medium">Math 201</div>
                            <div>10:00-11:30</div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>Upload and manage course materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-20 flex flex-col">
                    <FileText className="h-6 w-6 mb-2" />
                    Upload Lecture Notes
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <BookOpen className="h-6 w-6 mb-2" />
                    Create Assignment
                  </Button>
                  <Button className="h-20 flex flex-col" variant="outline">
                    <Calendar className="h-6 w-6 mb-2" />
                    Schedule Quiz
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Uploads</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <h5 className="font-medium">Linear Algebra - Chapter 5</h5>
                          <p className="text-sm text-gray-600">Math 201 • Uploaded 2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm" variant="ghost">Delete</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-green-600" />
                        <div>
                          <h5 className="font-medium">Problem Set 6</h5>
                          <p className="text-sm text-gray-600">Math 101 • Due June 20</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost">Edit</Button>
                        <Button size="sm" variant="ghost">Delete</Button>
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

export default FacultyDashboard;
