import { ReactNode } from "react";
import SideBar from "../../../../components/sidebar";
import TopBar from "../../../../components/topbar";


export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen w-screen flex bg-yellow-50">
        <SideBar />
        
        <div className="flex flex-col flex-1">
          <TopBar />
          
          <main className="flex-1 p-6 overflow-y-auto">
              { children }
          </main>

        </div>
    </div>
  );
}