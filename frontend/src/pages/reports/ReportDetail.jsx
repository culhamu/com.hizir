import { useParams } from "react-router-dom";

export default function ReportDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold">Rapor Detayı</h2>
      <p>ID: {id}</p>
    </div>
  );
}
