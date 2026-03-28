"use client";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const signup = () => {
    localStorage.setItem("user", "true");
    router.push("/dashboard");
  };

  return (
    <main>
      <h2>Signup</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={signup}>Create Account</button>
    </main>
  );
}
