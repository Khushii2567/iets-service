import { useState } from "react";
import MainLayout from "../layout/MainLayout";

export default function AgentDetails() {
  const [ticket, setTicket] = useState("");

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6">

        {/* ================= ROW 1 ================= */}
        {/* PROFILE */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <div className="flex items-center gap-4">
              <img
                src="/agent1.png"
                alt="Agent"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  John Smith
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  ● Online
                </p>
                <p className="text-sm text-gray-500">
                  Support Specialist
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Current Load</span>
                <span className="font-medium">3 / 10</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full w-[30%] bg-blue-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* PINNED NOTES */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Pinned Notes
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900 mb-1">Shift</p>
                <p>Morning Shift (9:00 AM – 5:00 PM)</p>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-1">Skills</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">Network</span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">VPN</span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs">Hardware</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        {/* CURRENT QUEUE + ASSIGN */}
        <div className="col-span-12 lg:col-span-5 space-y-6">

          {/* CURRENT QUEUE */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Current Queue
            </h3>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-12 items-center p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="col-span-3 font-medium">TKT-1021</span>
                <span className="col-span-7 text-gray-600">Email Server Down</span>
                <span className="col-span-2 text-red-600 font-medium text-right">High</span>
              </div>

              <div className="grid grid-cols-12 items-center p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="col-span-3 font-medium">TKT-1024</span>
                <span className="col-span-7 text-gray-600">VPN Connection Issue</span>
                <span className="col-span-2 text-yellow-500 font-medium text-right">Medium</span>
              </div>

              <div className="grid grid-cols-12 items-center p-3 rounded-lg hover:bg-gray-50 transition">
                <span className="col-span-3 font-medium">TKT-1030</span>
                <span className="col-span-7 text-gray-600">System Login Failure</span>
                <span className="col-span-2 text-green-600 font-medium text-right">Low</span>
              </div>
            </div>
          </div>

          {/* ASSIGN NEW TICKET */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Assign New Ticket
            </h3>

            <select className="w-full border rounded-lg px-4 py-2.5 text-sm">
              <option>Select Ticket</option>
              <option>TKT-1012 — Email server issue</option>
              <option>TKT-1018 — VPN connection failure</option>
              <option>TKT-1025 — Access denied error</option>
            </select>

            <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
              Confirm Assignment
            </button>
          </div>
        </div>

        {/* TEAM CHAT */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col h-70">
            <h3 className="font-semibold text-gray-900 mb-4">
              Team Chat
            </h3>

            <div className="flex-1 space-y-3 overflow-y-auto text-sm">
              <div className="bg-gray-100 p-3 rounded-lg w-fit">
                <p className="font-medium">Jane</p>
                <p>Any update on ticket TKT-1021?</p>
              </div>

              <div className="bg-blue-600 text-white p-3 rounded-lg w-fit ml-auto">
                <p className="font-medium">You</p>
                <p>Working on it, will update soon.</p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition">
                Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
