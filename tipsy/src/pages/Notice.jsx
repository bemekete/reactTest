import React from 'react';
import '../styles/Notice.scss';

import Boardtable from './Boardtable';

export default function Notice() {
    return (
        <div id="notice_main">
            <div id="notice_maincontainer">
                <p className="notice_first_text">공지사항</p>
                <div className="notice_search">
                    {/* 검색창 */}
                    <form action="#">
                        <label>
                            <input type="text" name="Search_notice" id="Search_notice" placeholder="검색어를 입력하세요" />
                        </label>
                        <button type="submit">
                            {/* src, alt로 */}
                            <img src={require('../assets/notice_img/noun-search-687065.png')} alt="" />
                        </button>
                    </form>
                </div>

                <div className="notice">
                    <div className="notice_box">
                        <ul>
                            <li className="notice_box1">
                                <a href="#">전체 공지사항</a>
                            </li>

                            <li className="notice_box2">
                                <a href="#">배송 관련 공지사항</a>
                            </li>

                            <li className="notice_box3">
                                <a href="#">상품 관련 공지사항</a>
                            </li>

                            <li className="notice_box4">
                                <a href="#">기타 공지사항</a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- 구분, 제목 및 제품문의 --> */}
                    <Boardtable />
                </div>
            </div>
        </div>
    );
}