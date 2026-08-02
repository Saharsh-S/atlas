import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#06060a" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: "224px", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
