import MainLayout from '../layout/MainLayout'
import AgentCard from '../components/AgentCard'


export default function ServiceAgents() {
return (
<MainLayout>
<h2 className="text-xl font-semibold mb-6">Service Agent Workload & Performance</h2>
<div className="grid grid-cols-4 gap-6">
<AgentCard name="John Smith" load="3/10" img="/agent1.png" />
<AgentCard name="Jane Doe" load="7/10" busy img="/agent2.png" />
<AgentCard name="Alex Ray" load="5/10" img="/agent1.png" />
<AgentCard name="Emma Stone" load="2/10" img="/agent2.png" />
</div>
</MainLayout>
)
}