import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Mainpage from '../pages/Mainpage';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Mypage from '../pages/Mypage/Mypage';
import JoinForm from '../pages/JoinForm';
import Customerpage from '../pages/Customerpage';
import Notice from '../pages/Notice';

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
                        <Route path="/joinform" element={<JoinForm />} />
                        <Route path="/mypage" element={<Mypage />} />
                        <Route path="/customerpage" element={<Customerpage />} />
                        <Route path="/notice" element={<Notice />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Main;
