import MainLayout from "../layout/MainLayout";


export default function AgentDetails() {
return (
<MainLayout>
<div className="grid grid-cols-12 gap-6">
{/* Agent Profile */}
<div className="col-span-4 bg-white rounded-xl shadow p-6">
<h3 className="font-semibold text-lg">John Smith</h3>
<p className="text-sm text-green-500">Online</p>
<p className="mt-2 text-sm">Senior Support Specialist</p>
<p className="mt-4">Current Load: 3 / 10</p>
</div>
{/* Queue */}
<div className="col-span-8 bg-white rounded-xl shadow p-6">
<h3 className="font-semibold mb-4">Current Queue</h3>
<table className="w-full text-sm">
<thead className="bg-gray-100">
<tr>
<th className="p-2 text-left">Ticket</th>
<th>Subject</th>
<th>Priority</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr className="border-t hover:bg-gray-50">
<td className="p-2">TKT-1021</td>
<td>Email Server Down</td>
<td className="text-red-500">High</td>
<td>45m</td>
</tr>
</tbody>
</table>
<button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90">
Assign New Ticket
</button>
</div>
</div>
</MainLayout>
);
}