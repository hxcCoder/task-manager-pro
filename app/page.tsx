"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Shield, Zap, Users, TrendingUp, Star, CheckCircle, Plus } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Task Manager Pro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Button asChild>
                <Link href="/tasks">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 New: Advanced Task Management System
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Manage Your Tasks Like a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Professional
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The most advanced task management platform for developers and professionals. 
            Get real-time insights, beautiful dashboards, and powerful productivity tools in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/tasks">
                Start Managing Tasks <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              View Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span>Professional Quality</span>
            </div>
            <div>•</div>
            <div>Built with Next.js 14</div>
            <div>•</div>
            <div>TypeScript & Tailwind</div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to be productive</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for modern professionals and development teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Real-time Dashboard</CardTitle>
                <CardDescription>
                  Monitor your productivity with live statistics, progress tracking, and completion rates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Smart Organization</CardTitle>
                <CardDescription>
                  Organize tasks by priority, category, and status with intelligent filtering and search.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Built with Next.js 14 for optimal performance with instant loading and smooth interactions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Professional UI</CardTitle>
                <CardDescription>
                  Beautiful, responsive design that works perfectly on desktop, tablet, and mobile devices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Track your productivity trends with detailed statistics and visual progress indicators.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Local Storage</CardTitle>
                <CardDescription>
                  Your data is automatically saved locally, ensuring your tasks are always available offline.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to boost your productivity?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who use Task Manager Pro to stay organized and achieve their goals.
          </p>

          <div className="mb-12">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/tasks">
                <Plus className="mr-2 h-5 w-5" />
                Start Managing Your Tasks
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-green-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple and intuitive interface for managing your daily tasks efficiently</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <BarChart3 className="text-blue-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your productivity with detailed statistics and visual progress bars</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plus className="text-purple-500 mb-4 mx-auto" size={32} />
              <h3 className="text-xl font-semibold mb-2">Professional Code</h3>
              <p className="text-gray-600">Clean, well-documented code perfect for learning and portfolio projects</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">🎓 Built with Modern Technologies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend Technologies:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Next.js 14 with App Router</li>
                  <li>✅ React Server Components</li>
                  <li>✅ TypeScript for type safety</li>
                  <li>✅ Tailwind CSS for styling</li>
                  <li>✅ Lucide React icons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Features & Patterns:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Component-based architecture</li>
                  <li>✅ Local state management</li>
                  <li>✅ Responsive design</li>
                  <li>✅ Modern UI/UX patterns</li>
                  <li>✅ Professional code structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get organized?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start managing your tasks like a professional. No signup required, works offline.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <Link href="/tasks">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart3 className="h-6 w-6" />
                <span className="text-lg font-bold">Task Manager Pro</span>
              </div>
              <p className="text-gray-400">Professional task management for modern developers and teams.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Task Management</li>
                <li>Progress Tracking</li>
                <li>Smart Filtering</li>
                <li>Real-time Stats</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Hooks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Project</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Portfolio Ready</li>
                <li>Open Source</li>
                <li>Professional Code</li>
                <li>Modern Design</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Task Manager Pro. Built with ❤️ for learning and professional development.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}