import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mainpage from '../pages/Mainpage';
import Detail from '../pages/Detail';

function Main() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mainpage" element={<Mainpage />} />
                        <Route path="/detail" element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Main;
