import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Form submitted!");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-[50%] p-8 rounded-2xl bg-white shadow-lg shadow-gray-300 mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Multi Step Form</h1>
      <h2 className="font-bold mb-4 text-center">Step {step}</h2>

      <form onSubmit={handleNext}>
        {step === 1 && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-4 px-4 py-2"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-4 px-4 py-2"
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={form.phone}
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-4 px-4 py-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={form.address}
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-4 px-4 py-2"
            />
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="border-4 border-gray-600 bg-gray-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            &laquo; Back
          </button>

          <button
            type="submit"
            className="border-4 border-blue-500 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {step === 3 ? "Submit" : "Next »"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
