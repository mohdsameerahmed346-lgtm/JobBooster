"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";

export default function Dashboard() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    role: "",
    education: "",
    skills: "",
    experience: "",
  });

  const [result, setResult] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data.text);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(result, 180);
    doc.text(lines, 10, 10);
    doc.save("resume.pdf");
  };

  return (
    <main>
      <h1>Dashboard</h1>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="role" placeholder="Job Role" onChange={handleChange} />
      <input name="education" placeholder="Education" onChange={handleChange} />
      <input name="skills" placeholder="Skills" onChange={handleChange} />
      <input name="experience" placeholder="Experience" onChange={handleChange} />

      <button onClick={generate}>Generate Resume</button>

      {result && (
        <div className="card">
          <pre>{result}</pre>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      )}
    </main>
  );
}
