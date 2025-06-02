
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Settings, ArrowRight, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const highlights = [
    { icon: Users, value: "15,000+", label: "Active Students", color: "text-blue-600" },
    { icon: BookOpen, value: "500+", label: "Courses Available", color: "text-green-600" },
    { icon: Award, value: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: TrendingUp, value: "24/7", label: "System Uptime", color: "text-orange-600" }
  ];

  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Smart Academic Management",
      description: "Comprehensive course management, assignment tracking, and intelligent grade calculations with real-time updates.",
      features: ["Digital Assignment Submission", "Internal Marks Calculator", "Academic Calendar Integration", "Performance Analytics"]
    },
    {
      icon: Users,
      title: "Seamless Communication",
      description: "Connect students, faculty, and administration through integrated messaging and notification systems.",
      features: ["Real-time Notifications", "Faculty-Student Chat", "Announcement Broadcasting", "Feedback Systems"]
    },
    {
      icon: Settings,
      title: "Powerful Administration",
      description: "Complete administrative control with user management, analytics, and institutional oversight tools.",
      features: ["User Role Management", "Analytics Dashboard", "Certificate Management", "System Configuration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Chibunova Campus</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/signup">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
                🎓 Welcome to the Future of Education
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Chibunova Campus <span className="text-blue-600">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive College Management System designed for the digital age. 
                Streamline academic operations, enhance student experience, and empower faculty with our integrated platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                    Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                    Sign In to Dashboard
                  </Button>
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className={`h-6 w-6 mx-auto mb-2 ${item.color}`} />
                    <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
                  alt="Students using digital campus platform"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience Modern Education</h3>
                  <p className="text-gray-600">Join thousands of students and faculty already using our platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Chibunova Campus</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded on the principle of educational excellence, Chibunova Campus Connect represents the evolution of 
              traditional college management into a comprehensive digital ecosystem. Our platform seamlessly integrates 
              academic operations, student services, and administrative functions to create an unparalleled educational experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" 
                alt="Modern campus technology"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize higher education through technology, making academic management more efficient, 
                transparent, and accessible for students, faculty, and administrators alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Streamlined academic processes for enhanced productivity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Real-time collaboration between students and faculty</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Data-driven insights for informed decision making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our platform serves different user roles with tailored functionality and advanced features
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="space-y-2 text-sm">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Role-based Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-blue-500/10 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-800 text-xl">Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-blue-700 space-y-2 text-left">
                  <li>• Academic records & GPA tracking</li>
                  <li>• Assignment submission & deadlines</li>
                  <li>• Internal marks calculation system</li>
                  <li>• Certificate management portal</li>
                  <li>• Direct faculty communication</li>
                  <li>• Placement & internship tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-green-500/10 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-800 text-xl">Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-green-700 space-y-2 text-left">
                  <li>• Course content management</li>
                  <li>• Grade and assessment tracking</li>
                  <li>• Student progress monitoring</li>
                  <li>• Attendance management system</li>
                  <li>• Research profile showcase</li>
                  <li>• Data export capabilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-purple-500/10 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-800 text-xl">Admin</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-purple-700 space-y-2 text-left">
                  <li>• User & role management</li>
                  <li>• Analytics & reporting dashboard</li>
                  <li>• Academic year configuration</li>
                  <li>• System-wide notifications</li>
                  <li>• Security & compliance tools</li>
                  <li>• Advanced data insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-xl font-bold">Chibunova Campus</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering education through innovative technology and comprehensive management solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Faculty Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admin Panel</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@chibunovacampus.edu</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 123 Education Drive, Campus City</li>
                <li>🕒 Mon-Fri: 8AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 Chibunova Campus Connect. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
