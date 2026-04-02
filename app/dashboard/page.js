
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
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ FIXED FUNCTION
  const generate = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResult(data.text || "No response");

    } catch (error) {
      setResult("Error: " + error.message);
    }
  };
const downloadPDF = () => {
  const isPaid = localStorage.getItem("paid");

  if (!isPaid) {
    alert("Upgrade to download PDF 🚀");
    return;
  }

  const doc = new jsPDF();
  const lines = doc.splitTextToSize(result, 180);
  doc.text(lines, 10, 10);
  doc.save(`${form.name || "resume"}.pdf`);
};

return (
  <main>
    <h1>🚀 JobBoost AI</h1>

    <div className="card">
      <h2>Create Your Resume</h2>

      <input name="name" placeholder="👤 Your Name" onChange={handleChange} />
      <input name="role" placeholder="💼 Job Role" onChange={handleChange} />
      <input name="education" placeholder="🎓 Education" onChange={handleChange} />
      <input name="skills" placeholder="🛠 Skills (comma separated)" onChange={handleChange} />
      <input name="experience" placeholder="💼 Experience" onChange={handleChange} />

      <button onClick={generate}>
        Generate Resume ✨
      </button>
    </div>

    {result && (
      <div className="card">
        <h2>📄 Your Resume</h2>
        <pre>{result}</pre>

        <button onClick={downloadPDF}>
          Download PDF 📥
        </button>
      </div>
    )}
  </main>
);
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
