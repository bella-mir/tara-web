import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  FormPage,
  IdeasPage,
  LoginPage,
  MainPage,
  AdminPage,
  MapFinalPage,
} from "./pages";
import { ProtectedRoute } from "./modules";
import { MENU, TITLE } from "./utils";

function App() {
  return (
    <>
      <Header title={TITLE} menu={MENU} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage /> <Footer />
            </>
          }
        />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/map" element={<MapFinalPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
export default App;
