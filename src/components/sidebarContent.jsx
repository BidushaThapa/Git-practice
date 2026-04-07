import { NavLink } from "react-router-dom";
import { LayoutDashboard, LineChart, LogOut, UserRound } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function MenuItem({ icon: Icon, label, to, collapsed = false, onSelect }) {
  return (
    <NavLink
      to={to}
      onClick={onSelect}
      title={collapsed ? label : undefined}
      aria-label={label}
      className={({ isActive }) =>
        cn(
          "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
          collapsed ? "justify-center" : "gap-3",
          isActive
            ? "bg-green-100 text-green-800"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )
      }
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {!collapsed && <span>{label}</span>}
      {collapsed && <span className="sr-only">{label}</span>}
    </NavLink>
  );
}

function LogoutItem({ collapsed = false, onLogout, onSelect }) {
  const handleLogout = () => {
    if (onSelect) onSelect();

    if (onLogout) {
      onLogout();
      return;
    }

    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      title={collapsed ? "Logout" : undefined}
      aria-label="Logout"
      className={cn(
        "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
        collapsed ? "justify-center" : "gap-3",
        "text-slate-600 hover:bg-red-50 hover:text-red-700"
      )}
    >
      <LogOut className="h-4 w-4 shrink-0" aria-hidden="true" />
      {!collapsed && <span>Logout</span>}
      {collapsed && <span className="sr-only">Logout</span>}
    </button>
  );
}

export default function SidebarContent({
  collapsed = false,
  className,
  onLogout,
  onNavigate,
}) {
  const mainItems = [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Market Price Trends", to: "/market-trends", icon: LineChart },
  ];

  return (
    <nav
      aria-label="Sidebar"
      className={cn(
        "flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3",
        collapsed ? "w-16" : "w-full",
        className
      )}
    >
      <div className="space-y-1" aria-label="Main navigation">
        {mainItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            to={item.to}
            collapsed={collapsed}
            onSelect={onNavigate}
          />
        ))}
      </div>

      <div className="mt-auto border-t border-slate-200 pt-3" aria-label="User navigation">
        <div className="space-y-1">
          <MenuItem
            icon={UserRound}
            label="My Profile"
            to="/profile"
            collapsed={collapsed}
            onSelect={onNavigate}
          />
          <LogoutItem collapsed={collapsed} onLogout={onLogout} onSelect={onNavigate} />
        </div>
      </div>
    </nav>
  );
}
