import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import NavSidebar from "@/components/NavSidebar";
import PageHeader from "@/components/PageHeader";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    return (
            <div className="flex flex-col w-full min-h-screen bg-muted/40">
                <NavSidebar />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <PageHeader user={user.email || 'placeholder'} />
                    <main className="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                        {children}
                    </main>
                </div>
            </div>
    );
}