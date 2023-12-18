import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authentication from "./pages/Authentication/Authentication";
import MainLayout from "./Layouts/MainLayout";
import Users from "./pages/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
        <Route path="sign-in" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
