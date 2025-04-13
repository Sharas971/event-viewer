import { Outlet } from "react-router";
import { Navbar } from "~/components/Navbar/Navbar";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <Outlet />
    </div>
  );
}
