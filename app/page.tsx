import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bell, Calendar, Stethoscope, Home } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-6 w-6 text-teal-600" />
          <h1 className="text-2xl font-bold text-teal-700">HealthAssist AI</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Personal <span className="text-teal-600">AI-Powered</span> Healthcare Assistant
          </h1>
          <p className="text-xl text-gray-600">
            Manage your health with intelligent symptom detection, medication reminders, appointment scheduling, and
            personalized home remedies.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/register?role=patient">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Join as Patient <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/register?role=doctor">
              <Button size="lg" variant="outline">
                Join as Doctor
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/placeholder.svg?height=400&width=500"
            alt="Healthcare illustration"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Comprehensive Healthcare Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Stethoscope className="h-10 w-10 text-teal-600" />}
            title="AI Symptom Detector"
            description="Analyze your symptoms with our AI-powered system to get preliminary insights about possible conditions."
          />
          <FeatureCard
            icon={<Bell className="h-10 w-10 text-teal-600" />}
            title="Medicine Reminders"
            description="Never miss a dose with personalized medication reminders and tracking."
          />
          <FeatureCard
            icon={<Calendar className="h-10 w-10 text-teal-600" />}
            title="Doctor Appointments"
            description="Schedule, manage, and receive reminders for your healthcare appointments."
          />
          <FeatureCard
            icon={<Home className="h-10 w-10 text-teal-600" />}
            title="Home Remedies"
            description="Access a database of verified home remedies for common ailments and conditions."
          />
        </div>
      </section>

      {/* Interfaces Section */}
      <section className="bg-teal-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
            Tailored Interfaces for Patients & Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <InterfaceCard
              title="Patient Dashboard"
              description="Track your health metrics, manage appointments, set medication reminders, and access personalized health insights."
              buttonText="See Patient Features"
              buttonLink="/patient-features"
            />
            <InterfaceCard
              title="Doctor Dashboard"
              description="Manage your patient schedule, review patient health data, communicate securely, and access medical resources."
              buttonText="See Doctor Features"
              buttonLink="/doctor-features"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Stethoscope className="h-6 w-6 text-teal-400" />
              <h2 className="text-xl font-bold text-white">HealthAssist AI</h2>
            </div>
            <div className="flex gap-8">
              <Link href="/about" className="hover:text-teal-400 transition">
                About
              </Link>
              <Link href="/privacy" className="hover:text-teal-400 transition">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-teal-400 transition">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} HealthAssist AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function InterfaceCard({ title, description, buttonText, buttonLink }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={buttonLink}>
        <Button className="bg-teal-600 hover:bg-teal-700">
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
