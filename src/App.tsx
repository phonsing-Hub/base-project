import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./components/pages/Dashboard";
import Ticket from "./components/pages/Ticket";
import Report from "./components/pages/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
