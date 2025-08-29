import { useEffect, useState } from "react";
import vehicleService from "../services/vehicleService.js";

export default function Dashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    vehicleService.getUserVehicles().then((data) => setVehicles(data.data || []));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Araçlarım</h2>
      {vehicles.length === 0 ? (
        <p>Henüz kayıtlı aracınız yok.</p>
      ) : (
        <ul className="space-y-2">
          {vehicles.map((v) => (
            <li key={v._id} className="p-3 border rounded shadow">
              {v.brand} {v.model} ({v.year}) - {v.plate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
