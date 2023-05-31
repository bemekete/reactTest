import { useState } from 'react';

import '../../styles/Mypage.css';
import Category from './Category';

export default function Mypage() {
    const [profileNum, setProfileNum] = useState(0);

    function onClickProfile(e) {
        e.preventDefault();
    }

    return (
        <div id="container">
            <p class="pageTitle">마이페이지</p>
            <div id="contents">
                <div class="myPageBox">
                    <div class="profileBox">
                        <div class="profile part1">
                            <div>회원 님</div>
                            <div>
                                <a href="#">배송지 목록</a>
                                <a href="#">개인정보 수정</a>
                            </div>
                        </div>
                        <div class="profile part2">
                            <a href="#" onClick={e => { onClickProfile(e); setProfileNum(1); }}>
                                <div>적립금</div>
                            </a>
                            <div>0 원</div>
                        </div>
                        <div class="profile part3">
                            <a href="#" onClick={e => { onClickProfile(e); setProfileNum(2); }}>
                                <div>쿠폰</div>
                            </a>
                            <div>0 개</div>
                        </div>
                        <div class="profile part4">
                            <a href="#" onClick={e => { onClickProfile(e); setProfileNum(6); }}>
                                <div>마이 스타일</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="shipmentBorder">
                    <p>주문처리 현황</p>
                    <div class="shipmentBox">
                        <div class="ship Course1">
                            <p>입금전</p>
                            <div>0</div>
                        </div>
                        <div class="ship Course2">
                            <p>배송준비중</p>
                            <div>0</div>
                        </div>
                        <div class="ship Course3">
                            <p>배송중</p>
                            <div>0</div>
                        </div>
                        <div class="ship Course4">
                            <p>배송완료</p>
                            <div>0</div>
                        </div>
                    </div>
                </div>
                <Category profileNum={profileNum} />
            </div>
        </div>
    );
}