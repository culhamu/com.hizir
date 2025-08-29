import { useParams } from "react-router-dom";

export default function VehicleDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold">Araç Detayı</h2>
      <p>ID: {id}</p>
      {/* Burada raporlar listelenecek */}
    </div>
  );
}
