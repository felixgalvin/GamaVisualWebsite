import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* public Routes */}
                <Route path="/" element={<HomePage />} />
                
            </Routes>
        </BrowserRouter>
    );

}