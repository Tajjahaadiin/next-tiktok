import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/test" });
      }}
    >
      <button type="submit">Signout with TikTok</button>
    </form>
  );
}
