"use client";
import { signIn } from "@/auth";
export default function SignIn() {
  return <button onClick={() => signIn("tiktok")}>Sign in with TikTok</button>;
}
