import { NavLink } from 'react-router-dom'
import { Home, Ticket, Users } from "lucide-react";

const navItem = "flex items-center gap-3 px-4 py-3 rounded-lg transition hover:bg-gray-200"


export default function Sidebar() {
return (
<aside className="w-64 bg-white border-r border-gray-200 p-4">
<nav className="space-y-2 mt-16 pt-2">
<NavLink
  to="/"
  className={({ isActive }) =>
    `group flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${isActive ? "bg-gray-200 text-primary" : "hover:bg-gray-200"}`
  }
>
  <Home
    size={20}
    className="text-gray-500 group-hover:text-primary transition-colors"
  />
  <span>Home</span>
</NavLink>

<NavLink
  to="/tickets"
  className={({ isActive }) =>
    `group flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${isActive ? "bg-gray-200 text-primary" : "hover:bg-gray-200"}`
  }
>
  <Ticket
    size={20}
    className="text-gray-500 group-hover:text-primary transition-colors"
  />
  <span>All Tickets</span>
</NavLink>

<NavLink
  to="/agents"
  className={({ isActive }) =>
    `group flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${isActive ? "bg-gray-200 text-primary" : "hover:bg-gray-200"}`
  }
>
  <Users
    size={20}
    className="text-gray-500 group-hover:text-primary transition-colors"
  />
  <span>Service Agents</span>
</NavLink>

</nav>


<div className="absolute bottom-6 left-6 space-y-4 text-sm">
<p className="cursor-pointer text-gray-600 hover:text-primary hover:translate-x-1 transition">
  ⚙ Settings
</p>
<p className="cursor-pointer text-gray-600 hover:text-red-500 hover:translate-x-1 transition">
  ⏻ Logout
</p>
</div>
</aside>
)
}