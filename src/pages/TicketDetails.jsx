import MainLayout from "../layout/MainLayout";
import { Paperclip } from "lucide-react";


export default function TicketDetails() {
return (
<MainLayout>
<div className="grid grid-cols-12 gap-6">
{/* LEFT – Ticket Info */}
<div className="col-span-3 bg-white rounded-xl shadow p-5">
<h3 className="font-semibold mb-4">Ticket Info</h3>
<div className="space-y-2 text-sm">
<p><b>ID:</b> TKT-1024</p>
<p><b>Category:</b> Network</p>
<p><b>Priority:</b> <span className="text-red-500">HIGH</span></p>
<p><b>Status:</b> <span className="text-blue-500">IN_PROGRESS</span></p>
</div>
<p className="mt-4 text-sm font-medium">Attachments</p>
<Paperclip className="mt-2 text-gray-500 hover:text-primary cursor-pointer" />
</div>
{/* CENTER – Chat */}
<div className="col-span-6 bg-white rounded-xl shadow p-5">
<h3 className="font-semibold mb-4">Conversation</h3>
<div className="space-y-4 text-sm">
<div className="bg-gray-100 p-3 rounded-lg">
<b>Jane Doe:</b> My internet has been really slow for two days.
</div>
<div className="bg-blue-100 p-3 rounded-lg">
<b>Agent Smith:</b> Investigating possible DNS issue.
</div>
</div>
<input
className="mt-4 w-full border rounded-lg px-4 py-2 focus:outline-primary"
placeholder="Type your message..."
/>
</div>
{/* RIGHT – AI Assistant */}
<div className="col-span-3 bg-white rounded-xl shadow p-5">
<h3 className="font-semibold mb-3">AI Assistant</h3>
<p className="text-sm text-gray-600">
Possible DNS resolution issue or ISP-related problem.
</p>
<ul className="mt-3 text-sm list-disc list-inside">
<li>Flush DNS cache</li>
<li>Check VPN server</li>
</ul>
</div>
</div>
</MainLayout>
);
}