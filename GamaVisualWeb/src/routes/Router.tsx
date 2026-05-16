import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AlbumPage from "../pages/AlbumPage";
import QuoteAlbumPage from "../pages/QuoteAlbumPage";
import SingerProfile from "../pages/SingerProfile";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/quotes" element={<QuoteAlbumPage />} />
                <Route path="/album" element={< AlbumPage/>} />
                <Route path="/profile" element={<SingerProfile />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    );

}