import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketDetails from "../pages/TicketDetails";

export default function TicketTable() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow p-4 border-gray-500">

      {/* Search & Sort */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <input
          type="text"
          placeholder="Search tickets..."
          className="w-full sm:max-w-xs px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="px-3 py-2 border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Sort: Latest</option>
          <option>Sort: Oldest</option>
          <option>Sort: Priority</option>
        </select>
      </div>

      {/* Ticket Table */}
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

            {/* ROW 1 */}
            <tr
              className="border-t hover:bg-gray-50 transition cursor-pointer"
              onClick={() =>
                setSelectedTicket({
                  id: "TKT-1087",
                  subject: "My internet has been really slow for the past two days",
                  description:
                    "Experiencing persistent slow internet speeds, making it difficult to use web services and video.",
                  category: "Network",
                  priority: "HIGH",
                  status: "IN_PROGRESS",
                  createdAt: "2023-10-26 09:15 AM",
                  client: {
                    name: "Jane Doe",
                    company: "Acme Corp",
                  },
                })
              }
            >
              <td className="p-3 font-medium">TKT-1087</td>
              <td>Email server outage</td>
              <td>Acme Corp</td>
              <td className="text-red-500 font-semibold">High</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/agents");
                  }}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Assign
                </button>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr
              className="border-t hover:bg-gray-50 transition cursor-pointer"
              onClick={() =>
                setSelectedTicket({
                  id: "TKT-1086",
                  subject: "VPN client not connecting",
                  description:
                    "User is unable to establish VPN connection from remote location.",
                  category: "Network",
                  priority: "HIGH",
                  status: "UNASSIGNED",
                  createdAt: "2023-10-26 10:30 AM",
                  client: {
                    name: "John Carter",
                    company: "StartupXYZ",
                  },
                })
              }
            >
              <td className="p-3 font-medium">TKT-1086</td>
              <td>VPN client not connecting</td>
              <td>StartupXYZ</td>
              <td className="text-red-500 font-semibold">High</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/agents");
                  }}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Assign
                </button>
              </td>
            </tr>

            {/* ROW 3 */}
            <tr
              className="border-t hover:bg-gray-50 transition cursor-pointer"
              onClick={() =>
                setSelectedTicket({
                  id: "TKT-1085",
                  subject: "Printer not responding",
                  description:
                    "Office printer is not responding to any print commands.",
                  category: "Hardware",
                  priority: "MEDIUM",
                  status: "UNASSIGNED",
                  createdAt: "2023-10-26 10:30 AM",
                  client: {
                    name: "Emma Wilson",
                    company: "Acme Corp",
                  },
                })
              }
            >
              <td className="p-3 font-medium">TKT-1085</td>
              <td>Printer not responding</td>
              <td>Acme Corp</td>
              <td className="text-amber-500 font-semibold">Medium</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/agents");
                  }}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Assign
                </button>
              </td>
            </tr>

            {/* ROW 4 */}
            <tr
              className="border-t hover:bg-gray-50 transition cursor-pointer"
              onClick={() =>
                setSelectedTicket({
                  id: "TKT-1084",
                  subject: "New user account setup",
                  description:
                    "Request to create a new user account with standard access.",
                  category: "Account",
                  priority: "LOW",
                  status: "UNASSIGNED",
                  createdAt: "2023-10-26 10:30 AM",
                  client: {
                    name: "Robert Brown",
                    company: "Acme Corp",
                  },
                })
              }
            >
              <td className="p-3 font-medium">TKT-1084</td>
              <td>New user account setup</td>
              <td>Acme Corp</td>
              <td className="text-gray-500 font-semibold">Low</td>
              <td>2023-10-26 10:30 AM</td>
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/agents");
                  }}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  Assign
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* LARGE Ticket Details Overlay */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-gray-50 w-[92vw] h-[88vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
              <h2 className="text-xl font-semibold">Ticket Details</h2>
              <button
                onClick={() => setSelectedTicket(null)}
                className="text-xl text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Ticket Details Page Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <TicketDetails ticket={selectedTicket} />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
