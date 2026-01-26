import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import AuthPage from "./pages/AuthPage";
import DashboardLayout from "./layouts/DashboardLayout";
import GalleryPage from "./pages/GalleryPage";
import AlbumsPage from "./pages/AlbumsPage";
import AskPage from "./pages/AskPage";
import SettingsPage from "./pages/SettingsPage";
import "react-photo-album/rows.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<GalleryPage />} />
          <Route path="albums" element={<AlbumsPage />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
