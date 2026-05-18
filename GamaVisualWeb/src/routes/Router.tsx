import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AlbumPage from "../pages/AlbumPage";
import QuoteAlbumPage from "../pages/QuoteAlbumPage";
import SingerProfile from "../pages/SingerProfile";
import SongPage from "../pages/SongPage";
import AboutUs from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quotes" element={<QuoteAlbumPage />} />
                <Route path="/album" element={<AlbumPage />} />
                <Route path="/profile" element={<SingerProfile />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUsPage />} />

                {/* Changed this line to accept a dynamic :songId parameter */}
                <Route path="/album/song/:songId" element={<SongPage />} />
            </Routes>
        </BrowserRouter>
    );
}