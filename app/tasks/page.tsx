"use client"

import { useState, useEffect } from "react"
import { Plus, Check, Trash2, ArrowLeft, Calendar, Search, BarChart3 } from 'lucide-react'
import Link from "next/link"

// 🎯 TIPOS MEJORADOS
interface Task {
  id: number
  text: string
  completed: boolean
  createdAt: Date
  priority: "low" | "medium" | "high"
  category: string
}

interface TaskStats {
  total: number
  completed: number
  pending: number
  completionRate: number
}

export default function TasksPage() {
  // 🎯 ESTADO MEJORADO CON PERSISTENCIA
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [newPriority, setNewPriority] = useState<"low" | "medium" | "high">("medium")
  const [newCategory, setNewCategory] = useState("")
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all")
  const [searchTerm, setSearchTerm] = useState("")

  // 🎯 PERSISTENCIA EN LOCALSTORAGE
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }))
      setTasks(parsedTasks)
    } else {
      // Tareas de ejemplo
      const exampleTasks: Task[] = [
        {
          id: 1,
          text: "Aprender Next.js",
          completed: false,
          createdAt: new Date(),
          priority: "high",
          category: "Desarrollo",
        },
        {
          id: 2,
          text: "Crear mi primer proyecto",
          completed: true,
          createdAt: new Date(),
          priority: "medium",
          category: "Desarrollo",
        },
        {
          id: 3,
          text: "Subir código a GitHub",
          completed: false,
          createdAt: new Date(),
          priority: "high",
          category: "DevOps",
        },
      ]
      setTasks(exampleTasks)
    }
  }, [])

  // 🎯 GUARDAR EN LOCALSTORAGE CUANDO CAMBIAN LAS TAREAS
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  // 🎯 FUNCIÓN MEJORADA: Agregar tarea
  const addTask = () => {
    if (newTask.trim() === "") return

    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date(),
      priority: newPriority,
      category: newCategory || "General",
    }

    setTasks([...tasks, task])
    setNewTask("")
    setNewCategory("")
  }

  // 🎯 FUNCIONES EXISTENTES
  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // 🎯 FILTRADO Y BÚSQUEDA
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" || (filter === "completed" && task.completed) || (filter === "pending" && !task.completed)

    const matchesSearch =
      task.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  // 🎯 ESTADÍSTICAS AVANZADAS
  const stats: TaskStats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
    completionRate: tasks.length > 0 ? (tasks.filter((task) => task.completed).length / tasks.length) * 100 : 0,
  }

  // 🎯 COLORES POR PRIORIDAD
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 🎯 NAVEGACIÓN */}
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
          <ArrowLeft size={20} />
          Volver al Inicio
        </Link>
      </div>

      {/* 🎯 DASHBOARD DE ESTADÍSTICAS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
            </div>
            <BarChart3 className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completadas</p>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <Check className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pendientes</p>
              <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
            </div>
            <Calendar className="text-orange-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Progreso</p>
              <p className="text-2xl font-bold text-purple-600">{stats.completionRate.toFixed(1)}%</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <div className="text-purple-600 text-sm font-bold">%</div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎯 BARRA DE PROGRESO VISUAL */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Progreso General</h2>
          <span className="text-sm text-gray-600">
            {stats.completed} de {stats.total} completadas
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${stats.completionRate}%` }}
          ></div>
        </div>
      </div>

      {/* 🎯 CONTROLES DE FILTRO Y BÚSQUEDA */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar tareas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Filtros */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "pending" ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Pendientes
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === "completed" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Completadas
            </button>
          </div>
        </div>
      </div>

      {/* 🎯 FORMULARIO MEJORADO */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Agregar Nueva Tarea</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
              placeholder="Escribe tu tarea aquí..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Categoría"
              className="w-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Prioridad:</label>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value as "low" | "medium" | "high")}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>

            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 ml-auto"
            >
              <Plus size={20} />
              Agregar
            </button>
          </div>
        </div>
      </div>

      {/* 🎯 LISTA DE TAREAS MEJORADA */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Lista de Tareas ({filteredTasks.length})</h2>
        </div>

        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p className="text-lg">{searchTerm ? "No se encontraron tareas" : "No tienes tareas aún"}</p>
            <p>{searchTerm ? "Intenta con otro término de búsqueda" : "¡Agrega tu primera tarea arriba!"}</p>
          </div>
        ) : (
          <div className="divide-y">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                  task.completed ? "opacity-75" : ""
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`p-1 rounded-full transition-colors ${
                    task.completed ? "text-green-600 bg-green-100" : "text-gray-400 hover:text-green-600"
                  }`}
                >
                  <Check size={20} />
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                      {task.text}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(task.priority)}`}>
                      {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{task.category}</span>
                    <span>{task.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}