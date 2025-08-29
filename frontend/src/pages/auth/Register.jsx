import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerAction } from "../../store/userSlice.js";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { error } = useSelector((s) => s.user);

  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input {...register("email")} type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2 rounded" />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-primary text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
}
