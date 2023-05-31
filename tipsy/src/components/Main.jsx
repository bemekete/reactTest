import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mainpage from '../pages/Mainpage';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Join from '../pages/Join';

function Main() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mainpage" element={<Mainpage />} />
                        <Route path="/detail" element={<Detail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Main;
