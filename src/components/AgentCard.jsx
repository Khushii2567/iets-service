import { useNavigate } from "react-router-dom";

export default function AgentCard({ name, load, busy = false, img }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition flex flex-col items-start">
      <img
        src={img}
        alt={name}
        className="w-14 h-14 rounded-full object-cover mb-3"
      />

      <h3 className="font-semibold">{name}</h3>

      <p className={`text-sm ${busy ? "text-orange-500" : "text-green-500"}`}>
        {busy ? "Busy" : "Online"}
      </p>

      <p className="mt-2 text-sm">
        Current Load: {load}
      </p>

      <button
        onClick={() => navigate("/agent-details")}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        View Details & Assign
      </button>
    </div>
  );
}
