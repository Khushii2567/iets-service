import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ServiceAgents from './pages/ServiceAgents'
import AgentDetails from "./pages/AgentDetails";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agents" element={<ServiceAgents />} />
      <Route path="/agent-details" element={<AgentDetails />} />
    </Routes>
  )
}
