import React from 'react';
import { Users, BookOpen, Calendar, CreditCard, BarChart as ChartBar, BookMarked } from 'lucide-react';

const Dashboard = () => {
  const modules = [
    { title: 'Student Management', icon: Users, count: '2,500+', color: 'bg-blue-500' },
    { title: 'Course Management', icon: BookOpen, count: '150+', color: 'bg-green-500' },
    { title: 'Schedule', icon: Calendar, count: '200+', color: 'bg-purple-500' },
    { title: 'Fee Management', icon: CreditCard, count: '$500K+', color: 'bg-yellow-500' },
    { title: 'Analytics', icon: ChartBar, count: '10+', color: 'bg-red-500' },
    { title: 'Library', icon: BookMarked, count: '5000+', color: 'bg-indigo-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">College Management Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className={`inline-block p-3 rounded-lg ${module.color}`}>
              <module.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-900">{module.title}</h3>
            <p className="text-gray-600 mt-2">Total: {module.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;