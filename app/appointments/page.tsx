"use client";

import { useEffect, useState } from "react";

type Appointment = {
  _id?: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
};

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [form, setForm] = useState<Appointment>({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
    reason: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch all appointments
  const fetchAppointments = async () => {
    const res = await fetch("/api/appointments");
    const data = await res.json();
    setAppointments(data.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // Form change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler (Schedule or Reschedule)
  const handleSubmit = async () => {
    if (editingId) {
      // Reschedule: only update date/time
      await fetch("/api/appointments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, date: form.date, time: form.time }),
      });
      setEditingId(null);
    } else {
      // Schedule new
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setForm({ patientName: "", doctorName: "", date: "", time: "", reason: "" });
    fetchAppointments();
  };

  const handleEdit = (appointment: Appointment) => {
    setForm({
      patientName: appointment.patientName,
      doctorName: appointment.doctorName,
      date: appointment.date,
      time: appointment.time,
      reason: appointment.reason,
    });
    setEditingId(appointment._id || null);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/appointments?id=${id}`, { method: "DELETE" });
    fetchAppointments();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        <input
          name="patientName"
          placeholder="Patient"
          className="border p-2"
          value={form.patientName}
          onChange={handleChange}
          disabled={!!editingId}
        />
        <input
          name="doctorName"
          placeholder="Doctor"
          className="border p-2"
          value={form.doctorName}
          onChange={handleChange}
          disabled={!!editingId}
        />
        <input
          name="date"
          type="date"
          className="border p-2"
          value={form.date}
          onChange={handleChange}
        />
        <input
          name="time"
          type="time"
          className="border p-2"
          value={form.time}
          onChange={handleChange}
        />
        <input
          name="reason"
          placeholder="Reason"
          className="border p-2"
          value={form.reason}
          onChange={handleChange}
          disabled={!!editingId}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
        onClick={handleSubmit}
      >
        {editingId ? "Reschedule Appointment" : "Schedule Appointment"}
      </button>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Patient</th>
            <th className="border p-2">Doctor</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Reason</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a._id}>
              <td className="border p-2">{a.patientName}</td>
              <td className="border p-2">{a.doctorName}</td>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">{a.time}</td>
              <td className="border p-2">{a.reason}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="bg-yellow-400 px-2 py-1 rounded"
                  onClick={() => handleEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(a._id!)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}