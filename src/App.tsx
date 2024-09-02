import { Route, Routes } from "react-router-dom";
import { BackToTop, Footer, Header } from "./components";
import {
  FaqPage,
  FormPage,
  IdeasPage,
  LoginPage,
  MainPage,
  MapPage,
  AdminPage,
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
              {/* <BackToTop /> */}
            </>
          }
        />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/faq" element={<FaqPage />} />
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
