import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <div className="w-full">
        <div className="py-6 font-bold text-center bg-purple-950">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
          <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3">
        <Header />
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          <FetchDataSteps />
        </main>
      </div>

      <footer className="flex justify-center w-full p-8 text-xs text-center border-t border-t-foreground/10">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
