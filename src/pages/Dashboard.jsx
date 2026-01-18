import MainLayout from '../layout/MainLayout'
import StatCard from '../components/StatCard'
import TicketTable from '../components/TicketTable'


export default function Dashboard() {
return (
<MainLayout>
<h2 className="text-2xl font-semibold text-gray-800 mb-6">
  Dashboard Overview
</h2>
<div className="grid grid-cols-5 gap-4 mb-6">
<StatCard title="Open Tickets" value="42" />
<StatCard title="Unassigned" value="8" />
<StatCard title="Priority" value="2" danger />
<StatCard title="Pending" value="8" />
<StatCard title="Resolved" value="8" success />
</div>


<TicketTable />
</MainLayout>
)
}