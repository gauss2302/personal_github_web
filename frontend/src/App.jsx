import {Route, Routes} from "react-router-dom";
import React from "react";

import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Sidebar from "./components/Sidebar.jsx";

function SignPage() {
    return null;
}

function App() {
    return (
        <div className='flex text-white'>
            <Sidebar />
            <div className={'max-w-5xl text-white mx-auto transition-all duration-300 flex-1'}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route path='/explore' element={<ExplorePage />} />
                    <Route path='/likes' element={<LikesPage />} />
                </Routes>
            </div>
        </div>
    );
}
export default App;

