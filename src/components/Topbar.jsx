import { Bell } from "lucide-react";
export default function Topbar() {
return (
<div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
  <div className="flex items-center gap-3">
    <img
      src="/Container.png"
      alt="logo"
      className="w-8 h-8 object-contain"
    />
    <h1 className="text-2xl font-bold text-indigo-600">
      IETS
    </h1>
  </div>

<div className="flex items-center gap-4">
<button className="group p-2 rounded-full hover:bg-gray-100 transition">
  <Bell
    size={20}
    className="text-gray-500 group-hover:text-primary transition-colors"
  />
</button>
<img
  src="/Avatar.png"
  className="w-9 h-9 rounded-full object-cover border"
/>
</div>
</div>
)
}