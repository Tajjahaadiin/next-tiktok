import { auth } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
export default async function test() {
  const session = await auth();

  if (!session?.user) return redirect;
  return <>Test</>;
}
