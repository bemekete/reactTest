import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <>
            {/* <!-- ============================== main ======================================== --> */}
            <main>
                <div className="main_container">
                    <ul className="slide_list">
                        <li>
                            <img
                                src={require('../assets/slide4.png')}
                                alt="bg4"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../assets/slide1.png')}
                                alt="bg1"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../assets/slide2.png')}
                                alt="bg2"
                            />
                        </li>
                        <li>
                            <img
                                src={require('../assets/slide3.png')}
                                alt="bg3"
                            />
                        </li>
                    </ul>

                    <div className="pageOfPages">
                        {/* <a href="./eventboard/eventboard.html"></a> */}
                    </div>
                    <div className="pager"></div>
                </div>
                <div className="wrap_triple">
                    <div className="triple_tit">BEST PRODUCT</div>
                    <div className="triple_main">
                        <div className="triple_main1">
                            {/* <!-- <div className="drinkKinds_wrap"> --> */}
                            <div>
                                <p>술취한 원숭이</p>
                                <p>
                                    <span>10.8% |&nbsp; </span>
                                    <strong> 36,000</strong>원
                                </p>
                                <a
                                    href="./detail/detail_monkey.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                            <div>
                                <p>동학 1957</p>
                                <p>
                                    <span>13% |&nbsp; </span>
                                    <strong> 2,980</strong>원
                                </p>
                                <a
                                    href="./detail/detail_donghak.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                            <div>
                                <p>오미로제 연</p>
                                <p>
                                    <span>8% |&nbsp; </span>
                                    <strong> 50,000</strong>원
                                </p>
                                <a
                                    href="./detail/detail_yeon.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                        </div>

                        <div className="triple_main2">
                            <div>
                                <p>한스 오차드</p>
                                <p>
                                    <span>11% |&nbsp; </span>
                                    <strong> 20,160</strong>원
                                </p>
                                <a
                                    href="./detail/detail_hans.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                            <div>
                                <p>한시울</p>
                                <p>
                                    <span>40% |&nbsp; </span>
                                    <strong> 21,000</strong>원
                                </p>
                                <a
                                    href="./detail/detail_hansiwool.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                            <div>
                                <p>밀담</p>
                                <p>
                                    <span>40% |&nbsp; </span>
                                    <strong> 17,910</strong>원
                                </p>
                                <a
                                    href="./detail/detail_mildam.html"
                                    className="winePageButton"
                                >
                                    자세히 알아보기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ######################### event ######################################## --> */}
                <div className="wrap_event">
                    <div className="event_tit">EVENT</div>
                    <div className="event_main event_img1">
                        <div>
                            <a
                                href="./detail/detail_saint.html"
                                className="winePageButton"
                            >
                                자세히 알아보기
                            </a>
                        </div>
                        <div></div>
                    </div>
                    <div className="event_main event_img2">
                        <div></div>
                        <div>
                            <a
                                href="./detail/detail_monkey.html"
                                className="winePageButton"
                            >
                                자세히 알아보기
                            </a>
                        </div>
                    </div>
                    <div className="event_main event_img3">
                        <div>
                            <a
                                href="./detail/detail_hansiwool.html"
                                className="winePageButton"
                            >
                                자세히 알아보기
                            </a>
                        </div>
                        <div></div>
                    </div>
                </div>
                {/* <!-- ////////////////////////////////// board,notice ///////////////////////////////////// --> */}
                <div className="intro_board_wrap">
                    <div className="board_wrap">
                        <div className="board_notice_top">
                            <div className="intro_board_tit">
                                <div>상품후기보기</div>
                            </div>
                            <div>
                                <a href="./reviewboard/reviewboard.html">
                                    More+
                                </a>
                            </div>
                        </div>
                        <div className="intro_board">
                            <div>
                                <div>
                                    <p>
                                        <b>tipsy 특별회원 가입하기</b>
                                    </p>
                                </div>
                                <div>
                                    <p className="intro_board_txt">
                                        그 어떤 특별회원 혜택보다도 가성비 높은
                                        사은품 입니다.
                                        <br />
                                        감사합니다.
                                    </p>
                                </div>
                                <div className="star"></div>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        <b>tipsy 국순당여주 려 25도 375ml</b>
                                    </p>
                                </div>
                                <div>
                                    <p className="intro_board_txt">
                                        일본 고구마소주와는 조금 다릅니다.
                                        캐치하려했던 향이
                                        <br />
                                        단맛이나 곡향보다는 좀 더 드라이하고
                                        풋향이 강해서
                                        <br />
                                        별개의 고구마소주로 봐야할 듯 합니다
                                    </p>
                                </div>
                                <div className="star"></div>
                            </div>
                        </div>
                    </div>
                    <div className="board_wrap">
                        <div className="board_notice_top">
                            <div className="intro_board_tit">
                                <div>공지사항</div>
                            </div>
                            <div>
                                <a href="./notice/notice.html">More+</a>
                            </div>
                        </div>
                        <div className="intro_board_notice">
                            <ul>
                                <li>
                                    <a href="/">공지사항 입니다 6</a>
                                    <span className="date">2022.12.10</span>
                                </li>
                                <li>
                                    <a href="/">공지사항 입니다 5</a>
                                    <span className="date">2022.12.09</span>
                                </li>
                                <li>
                                    <a href="/">공지사항 입니다 4</a>
                                    <span className="date">2022.12.08</span>
                                </li>
                                <li>
                                    <a href="/">공지사항 입니다 3</a>
                                    <span className="date">2022.12.07</span>
                                </li>
                                <li>
                                    <a href="/">공지사항 입니다 2</a>
                                    <span className="date">2022.12.06</span>
                                </li>
                                <li>
                                    <a href="/">공지사항 입니다 1</a>
                                    <span className="date">2022.12.05</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="/" className="topfloatingbar">
                    /
                </a>
            </main>
        </>
    );
}

export default Home;
