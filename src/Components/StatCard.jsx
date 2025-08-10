// src/components/StatCard.jsx
const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow w-48">
      <h3 className="font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  )
}

export default StatCard