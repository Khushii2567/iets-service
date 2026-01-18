export default function AgentCard({ name, load, busy, img })
 {
return (
<div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex flex-col items-start">
    <img
  src={img}
  className="w-14 h-14 rounded-full object-cover mb-3"
/>
<h3 className="font-semibold">{name}</h3>
<p className={`text-sm ${busy ? 'text-orange-500' : 'text-green-500'}`}>{busy ? 'Busy' : 'Online'}</p>
<p className="mt-2 text-sm">Current Load: {load}</p>
<p className="text-xs text-gray-500 mt-1">{skills}</p>
<button className="mt-4 w-full bg-primary text-white py-2 rounded hover:opacity-90">View Details & Assign</button>
</div>
)
}