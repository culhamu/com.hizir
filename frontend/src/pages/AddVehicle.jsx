import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AddVehicle() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    plate: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/vehicles", form);
      alert("Araç başarıyla eklendi!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Araç eklenirken hata oluştu.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-xl font-bold mb-4">🚘 Araç Ekle</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="brand"
          placeholder="Marka"
          value={form.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={form.model}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Yıl"
          value={form.year}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="plate"
          placeholder="Plaka"
          value={form.plate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}
