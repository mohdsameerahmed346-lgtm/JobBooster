import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>🚀 JobBoost AI</h1>
      <p>Create Resume & Cover Letter instantly</p>

      <Link href="/login">Login</Link> |{" "}
      <Link href="/signup">Signup</Link>

      <div className="card">
        <h3>Features</h3>
        <p>✔ AI Resume</p>
        <p>✔ Cover Letter</p>
        <p>✔ PDF Download</p>
      </div>
    </main>
  );
}
