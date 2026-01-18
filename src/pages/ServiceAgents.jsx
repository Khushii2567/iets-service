import MainLayout from "../layout/MainLayout";
import AgentCard from "../components/AgentCard";
import StatCard from "../components/StatCard";
import { Search } from "lucide-react";

export default function ServiceAgents() {
  return (
    <MainLayout>
      {/* PAGE TITLE */}
      <h2 className="text-2xl font-semibold mb-6">
        Service Agent Workload & Performance
      </h2>

      {/* ================= TOP STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Active Agents"
          value="12"
          subtitle="Currently online and available"
          icon="users"
        />

        <StatCard
          title="Total Open Tickets"
          value="145"
          subtitle="Tickets awaiting assignment"
          icon="tickets"
        />

        <StatCard
          title="Avg. Agent Load"
          value="5.2"
          subtitle="Tickets per agent"
          icon="chart"
        />
      </div>

      {/* ================= AGENT OVERVIEW HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h3 className="text-xl font-semibold">Agent Overview</h3>

        <div className="flex gap-3">
         {/* SEARCH */}
<div className="relative">
  <Search
    size={18}
    className="absolute left-3 top-2.5 text-gray-400"
  />
  <input
    type="text"
    placeholder="Search..."
    className="w-64 bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm
               focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          {/* SORT */}
          <select className="bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sort: Last updated</option>
            <option>Sort: Load</option>
            <option>Sort: Name</option>
          </select>
        </div>
      </div>

      {/* ================= AGENT CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AgentCard
          id="john-smith"
          name="John Smith"
          status="Online"
          load="3/10"
          tickets="15"
          img="/agent1.png"
          skills={["Network", "VPN"]}
        />

        <AgentCard
          id="jane-doe"
          name="Jane Doe"
          status="Busy"
          load="8/10"
          tickets="10"
          img="/agent2.png"
          skills={["Hardware", "Software"]}
        />

        <AgentCard
          id="alex-ray"
          name="Alex Ray"
          status="Online"
          load="3/10"
          tickets="15"
          img="/agent1.png"
          skills={["Network", "VPN"]}
        />

        <AgentCard
          id="emma-stone"
          name="Emma Stone"
          status="Busy"
          load="8/10"
          tickets="10"
          img="/agent2.png"
          skills={["Hardware", "Software"]}
        />
      </div>
    </MainLayout>
  );
}
