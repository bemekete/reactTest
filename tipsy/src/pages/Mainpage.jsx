import React from 'react';
import '../styles/Mainpage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Mainpage() {


    const [productCnt, setProductCnt] = useState(0);

    useEffect(() => {
        axios.get("/restpro/selectpro")
            .then((data) => {
                setProductCnt(data.data.length);
            }).catch(() => {
            })
    }, [])



    return (
        <>
            <div className="location_wrap">
                <div className="location_con">
                    <a href="/">홈</a> &gt; 전체상품
                </div>
            </div>
            <div id="mainpage_container">
                <div id="mainpage_search">
                    <div className="search_tit pageTit">카테고리</div>
                    <div className="search_list cate_list">
                        <div className="cate_list_item">
                            <a href="./mainPage_wine.html">주류</a>
                        </div>
                        <div className="cate_list_item">
                            <a href="./mainPage_side.html">안주</a>
                        </div>
                    </div>
                    <div className="searchSorter">
                        <div className="sortListCon">
                            <dl>
                                <dt>
                                    가격
                                    <img
                                        src={require('../assets/mainpage_img/up.svg')}
                                        alt=""
                                    />
                                </dt>
                                <dd>
                                    <ul className="sortList">
                                        <li>
                                            <a href="/">0만원 ~ 1만원</a>
                                        </li>
                                        <li>
                                            <a href="/">1만원 ~ 3만원</a>
                                        </li>
                                        <li>
                                            <a href="/">3만원 ~ 5만원</a>
                                        </li>
                                        <li>
                                            <a href="/">5만원 ~ 10만원</a>
                                        </li>
                                        <li>
                                            <a href="/">10만원 이상</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    종류
                                    <img src="./image/up.svg" alt="" />
                                </dt>
                                <dd>
                                    <ul className="sortList">
                                        <li>
                                            <a href="#">약주</a>
                                        </li>
                                        <li>
                                            <a href="#">청주</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    도수
                                    <img src="./image/up.svg" alt="" />
                                </dt>
                                <dd>
                                    <ul className="sortList">
                                        <li>
                                            <a href="#">0%~10%</a>
                                        </li>
                                        <li>
                                            <a href="#">10%~20%</a>
                                        </li>
                                        <li>
                                            <a href="#">20%~30%</a>
                                        </li>
                                        <li>
                                            <a href="#">30%이상</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    단맛
                                    <img src="./image/up.svg" alt="" />
                                </dt>
                                <dd>
                                    <ul className="sortList">
                                        <li>
                                            <a href="#">약한</a>
                                        </li>
                                        <li>
                                            <a href="#">중간</a>
                                        </li>
                                        <li>
                                            <a href="#">강한</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    신맛
                                    <img src="./image/up.svg" alt="" />
                                </dt>
                                <dd>
                                    <ul className="sortList">
                                        <li>
                                            <a href="#">약한</a>
                                        </li>
                                        <li>
                                            <a href="#">중간</a>
                                        </li>
                                        <li>
                                            <a href="#">강한</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="sortFilter">
                            <a href="#">전체 필터 초기화</a>
                        </div>
                    </div>
                </div>
                <div id="contents">
                    <p className="pageTit">전체상품</p>
                    <div className="listStyle1" id="prod_schview">
                        <div className="listInfo1">
                            <p className="listLeng">총 <b>{productCnt}</b>개의 상품이 있습니다.</p>
                            <ul className="listSort">
                                <li>
                                    <a className="txt_bold" href="#">
                                        인기순
                                    </a>
                                </li>
                                <li>
                                    <a href="#">등록순</a>
                                </li>
                                <li>
                                    <a href="#">시리즈순</a>
                                </li>
                            </ul>
                        </div>
                        <ul id="productList" className="list">
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/cheongju1.jpg')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>천비향 약주</p>
                                    </div>
                                    <p className="price">30,400원</p>
                                </a>
                            </li>
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/sidemenu1.jpg')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>직화 무뼈 닭발 160g</p>
                                    </div>
                                    <p className="price">6,900원</p>
                                </a>
                            </li>
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/fruit1.jpg')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>장수 오미자주 4병 선물세트</p>
                                    </div>
                                    <p className="price">26,100원</p>
                                </a>
                            </li>
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/makgeolli1.jpg')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>나루 생 막걸리 11.5% [3병/8병]</p>
                                    </div>
                                    <p className="price">29,700원</p>
                                </a>
                            </li>
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/soju1.png')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>진맥소주 22%</p>
                                    </div>
                                    <p className="price">22,000원</p>
                                </a>
                            </li>
                            <li>
                                <a href="../detail/detail_saint.html">
                                    <div className="img">
                                        <img
                                            src={require('../assets/mainpage_img/wine1.jpg')}
                                            alt="상품 이미지"
                                        />
                                    </div>
                                    <div className="tit">
                                        <p>오미로제 프리미어 와인 선물세트</p>
                                    </div>
                                    <p className="price">51,000원</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="btnSection">
                        <a
                            href="#"
                            id="btnMore"
                            className="btnMore btnMore_prod"
                        >
                            더보기
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainpage;
