export default function StatCard({ title, value, danger, success }) {
  const colorClass = danger
    ? "text-red-500"
    : success
    ? "text-green-500"
    : "text-gray-600";

  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <p className={`text-sm ${colorClass}`}>
        {title}
      </p>

      <h3 className={`text-3xl font-bold ${colorClass}`}>
        {value}
      </h3>
    </div>
  );
}
