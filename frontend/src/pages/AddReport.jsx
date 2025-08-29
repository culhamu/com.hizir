import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddReport() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    vehicleId: "",
    inspectionDate: "",
    status: "Passed",
    notes: ""
  });

  useEffect(() => {
    // Araçları backend'den çek
    const fetchVehicles = async () => {
      try {
        const res = await api.get("/vehicles");
        setVehicles(res.data);
      } catch (error) {
        console.error("Araç listesi alınamadı:", error);
      }
    };
    fetchVehicles();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reports", form);
      alert("Rapor başarıyla oluşturuldu!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Rapor eklenirken hata oluştu.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">📑 Rapor Oluştur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="vehicleId"
          value={form.vehicleId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Araç seçiniz</option>
          {vehicles.map((v) => (
            <option key={v._id} value={v._id}>
              {v.brand} {v.model} - {v.plate}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="inspectionDate"
          value={form.inspectionDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Passed">Onaylandı</option>
          <option value="Failed">Red Edildi</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notlar"
          value={form.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}
