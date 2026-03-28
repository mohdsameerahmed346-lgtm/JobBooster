"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const login = () => {
    localStorage.setItem("user", "true");
    router.push("/dashboard");
  };

  return (
    <main>
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={login}>Login</button>
    </main>
  );
}
