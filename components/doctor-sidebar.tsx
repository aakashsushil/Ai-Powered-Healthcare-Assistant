import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Stethoscope,
} from "lucide-react"

interface DoctorSidebarProps {
  activeItem: string
}

export default function DoctorSidebar({ activeItem }: DoctorSidebarProps) {
  const menuItems = [
    { name: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "patients", label: "Patients", icon: <Users className="h-5 w-5" /> },
    { name: "appointments", label: "Appointments", icon: <Calendar className="h-5 w-5" /> },
    { name: "records", label: "Medical Records", icon: <ClipboardList className="h-5 w-5" /> },
    { name: "messages", label: "Messages", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "profile", label: "My Profile", icon: <User className="h-5 w-5" /> },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-teal-600" />
          <h1 className="text-xl font-bold text-teal-700">HealthAssist AI</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={`/doctor/${item.name}`}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  activeItem === item.name ? "bg-teal-50 text-teal-700" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <ul className="space-y-2">
          <li>
            <Link
              href="/doctor/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
