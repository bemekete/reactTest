import React from 'react';
import '../styles/Notice.css';

export default function Notice() {
    return (
        <div id="notice_main">
            <div id="maincontainer">
                <p class="notice_first_text">공지사항</p>
                <div class="notice_search">
                    {/* 검색창 */}
                    <form action="#">
                        <label>
                            <input type="text" name="Search_notice" id="Search_notice" placeholder="검색어를 입력하세요" />
                        </label>
                        <button type="submit">
                            {/* src, alt로 */}
                            <img src={'../assets/notice_img/noun-search-687065.png'} alt="" />
                        </button>
                    </form>
                </div>

                <div class="notice">
                    <div class="notice_box">
                        <ul>
                            <li class="notice_box1">
                                <a href="#">전체 공지사항</a>
                            </li>

                            <li class="notice_box2">
                                <a href="#">배송 관련 공지사항</a>
                            </li>

                            <li class="notice_box3">
                                <a href="#">상품 관련 공지사항</a>
                            </li>

                            <li class="notice_box4">
                                <a href="#">기타 공지사항</a>
                            </li>
                        </ul>
                    </div>

                    {/* 테이블 첨부 */}



                </div>
            </div>
        </div>
    );
}