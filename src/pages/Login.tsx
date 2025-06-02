
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface LoginProps {
  onLogin: (role: 'student' | 'faculty' | 'admin') => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>('student');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show message from signup redirect if exists
    if (location.state?.message) {
      toast({
        title: "Success",
        description: location.state.message,
      });
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo login - in real app, this would validate against backend
      toast({
        title: "Login Successful",
        description: `Welcome to ${role} dashboard!`,
      });
      
      setIsLoading(false);
      onLogin(role);
      navigate('/dashboard');
    }, 1500);
  };

  const handleForgotPassword = () => {
    toast({
      title: "Reset Link Sent",
      description: "Password reset instructions have been sent to your email.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Chibunova Campus</span>
            </Link>
            <Link to="/signup">
              <Button variant="outline">New Student? Register Here</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Sign In</CardTitle>
              <CardDescription>
                Access your Chibunova Campus account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Select Role</Label>
                  <Select value={role} onValueChange={(value: 'student' | 'faculty' | 'admin') => setRole(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email / Student ID</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email or student ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
                
                <div className="text-center text-sm text-gray-600 space-y-2">
                  <p className="font-medium">Demo Credentials:</p>
                  <p>Email: demo@chibunova.edu | Password: demo123</p>
                  <div className="border-t pt-4">
                    <p>
                      New student?{" "}
                      <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                        Register here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
