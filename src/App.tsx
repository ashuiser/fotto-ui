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
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import AlbumViewPage from "./pages/AlbumViewPage";

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
          <Route path="albums/:albumId" element={<AlbumViewPage />} />
          <Route path="ask" element={<AskPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
