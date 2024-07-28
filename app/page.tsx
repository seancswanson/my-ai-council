import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "My AI Council",
  description:
    "Your AI Council is here to help you navigate any and all situations. Reach out to them for guidance, advice, or just to chat.",
};
export default async function Index() {


  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center flex-1 w-full gap-20">
        <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
          <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          <Link href="/app/home"><Button >App Home</Button></Link>

            <AuthButton />
          </div>
        </nav>
      </div>
    </main>
  );
}
