import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import SidebarContent from "../components/sidebarContent";

export default function AppLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileSidebar = () => setIsMobileOpen(false);

  return (
    <div className="min-h-screen md:flex">
      <aside className="hidden border-r border-slate-200/70 bg-white p-4 md:flex md:w-72 md:shrink-0">
        <SidebarContent />
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open sidebar"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <Menu className="h-5 w-5" />
          </button>
        </header>

        <main>
          <Outlet />
        </main>
      </div>

      {isMobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close sidebar overlay"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={closeMobileSidebar}
          />

          <aside className="fixed inset-y-0 left-0 z-50 w-72 border-r border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <div className="mb-3 flex items-center justify-end">
              <button
                type="button"
                onClick={closeMobileSidebar}
                aria-label="Close sidebar"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <SidebarContent onNavigate={closeMobileSidebar} />
          </aside>
        </>
      )}
    </div>
  );
}
