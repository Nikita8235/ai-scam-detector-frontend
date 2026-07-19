import { Link } from "react-router-dom";

function DashboardCard({ icon, title, description, link }) {
  return (
    <Link
      to={link}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <div className="text-5xl mb-4">{icon}</div>

      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

export default DashboardCard;