import { useState } from "react";

export default function TicketTable() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  return (
    <div className="bg-white rounded-xl shadow p-4 border-gray-500">
      
      <div className="flex items-center justify-between mb-4 gap-3 border-gray-500">
  {/* Search */}
  <input
    type="text"
    placeholder="Search tickets..."
    className="
      w-full sm:max-w-xs
      px-4 py-2
      border rounded-lg
      text-sm
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
  />

  {/* Sort (right aligned) */}
  <select
    className="
      px-3 py-2
      border rounded-lg
      text-sm
      bg-white
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
  >
    <option>Sort: Latest</option>
    <option>Sort: Oldest</option>
    <option>Sort: Priority</option>
  </select>
</div>


      {/* 📋 Ticket Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th>Subject</th>
              <th>Company</th>
              <th>Priority</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">TKT-1087</td>
              <td>Email server outage</td>
              <td>Acme Corp</td>
              <td className="text-red-500 font-semibold">High</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition">
                  Assign
                </button>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">TKT-1086</td>
              <td>VPN client not connecting</td>
              <td>StartupXYZ</td>
              <td className="text-red-500 font-semibold">High</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition">
                  Assign
                </button>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">TKT-1085</td>
              <td>Printer not responding</td>
              <td>Acme Corp</td>
              <td className="text-amber-500 font-semibold">Medium</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition">
                  Assign
                </button>
              </td>
            </tr>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-3 font-medium">TKT-1084</td>
              <td>New user account setup</td>
              <td>Acme Corp</td>
              <td className="text-gray-500 font-semibold">Low</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition">
                  Assign
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
