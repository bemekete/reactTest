import React from 'react';
import '../styles/Detail.scss';

function Detail() {
    return (
        <>
            {/* <!-- ======================================================== main ================================================== --> */}
            <div id="detail_container">
                <div className="contents">
                    <div className="detailScriptPage">
                        <div className="leftSide">
                            <div className="flex">
                                <div className="detail_tit_img">
                                    <img
                                        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/TOnv-1655794504098-1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="detail_tit">
                                    <div className="detail_tit_top opa5">
                                        <span>동학 1957</span>
                                    </div>
                                    <div className="detail_tit_mid opa5">
                                        평창동계올림픽 공식 판매주로 선정된 우리
                                        쌀로 빚은 청주
                                    </div>
                                    <div className="detail_tit_bot opa5">
                                        #구수한 쌀의 맛 #담백한 맛 뒤 느껴지는
                                        쌉쌀함
                                    </div>
                                    <div className="detail_tit_star opa5">
                                        <div></div>
                                    </div>
                                    <div>
                                        <div className="font_weight">
                                            주종: 청주
                                        </div>
                                        <div className="font_weight">
                                            도수: 13.00%
                                        </div>
                                        <div className="font_weight">
                                            용량: 375ml
                                        </div>
                                        <div className="opa5">
                                            배송기간: 2일 이내 배송
                                        </div>
                                    </div>
                                    <div>판매가격:</div>
                                    <div className="price">
                                        <span>2,988</span>원
                                    </div>
                                    <div className="blue opa5">
                                        유통기한: 병입일로부터 2년
                                    </div>
                                    <div className="blue opa5">
                                        보관방법: 냉장보관
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* <!-- 핵심 포인트 --> */}
                                <div className="point">
                                    <div className="point_text1">
                                        핵심 포인트
                                    </div>

                                    <div className="point_text2">
                                        <div className="point_containing point_img">
                                            <img
                                                className="yellow_img"
                                                src="https://www.sooldamhwa.com/images/modules/damhwaMarket/mainPointImg.png"
                                                alt="이미지"
                                            />
                                        </div>
                                        <div className="point_text_first">
                                            맛
                                        </div>
                                        <div className="point_text_second">
                                            갓 지은 밥의 구수한 풍미를 느낄 수
                                            있어요
                                        </div>
                                    </div>

                                    <div className="point_text3">
                                        <div className="point_containing point_img">
                                            <img
                                                src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_anju.png"
                                                alt="이미지"
                                            />
                                        </div>
                                        <div className="point_text_first">
                                            안주
                                        </div>
                                        <div className="point_text_second">
                                            집에 있는 반찬들과 반주로 즐겨보세요
                                        </div>
                                    </div>

                                    <div className="point_text4">
                                        <div className="point_containing point_img">
                                            <img
                                                src="https://www.sooldamhwa.com/images/modules/damhwaMarket/point_damhwa.png"
                                                alt="이미지"
                                            />
                                        </div>
                                        <div className="point_text_first">
                                            담화
                                        </div>
                                        <div className="point_text_second">
                                            평창동계올림픽의 공식 판매주로
                                            선정된 우리 쌀로 만든 청주
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 어울리는 안주 --> */}
                            <div className="side_dish">
                                <div className="side_dish_tit opa5">
                                    어울리는 안주
                                </div>
                                <div className="side_dish_img">
                                    <div className="side_dish_wrap">
                                        <div className="side_dish_first">
                                            <img
                                                src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/67MP-1622619459581-%EB%93%A4%EA%B9%A8%EC%88%98%EC%A0%9C%EB%B9%84.png"
                                                alt="들깨수제비"
                                            />
                                        </div>
                                        <label>들깨수제비</label>
                                    </div>
                                    <div className="side_dish_wrap">
                                        <div className="side_dish_second">
                                            <img
                                                src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/Y0K8-1633664339021-%EA%B6%81%EC%A4%91%EB%96%A1%EB%B3%B6%EC%9D%B4.png"
                                                alt="궁중떡볶이"
                                            />
                                        </div>
                                        <label>궁중 떡볶이</label>
                                    </div>
                                    <div className="side_dish_wrap">
                                        <div className="side_dish_third">
                                            <img
                                                src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/B4Br-1648608249584-jang.png"
                                                alt="된장찌개"
                                            />
                                        </div>
                                        <label>된장찌개</label>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 단맛 산미 --> */}
                            <div></div>

                            {/* <!-- 상세 설명 --> */}
                            <div className="detail_explain">
                                <div className="detail_explain_top">
                                    {/* <!-- 양조장 배송 --> */}
                                    <div className="detail_explain_deliver">
                                        <div className="className= detail_explain_deliver_img">
                                            <div>도르리 배송</div>
                                        </div>
                                        <div className="detail_explain_delive_list">
                                            <ul>
                                                <li>
                                                    몇 개를 고르든{' '}
                                                    <strong>
                                                        배송비 3,000원
                                                    </strong>
                                                    으로 원하는 제품을 한 번에
                                                    받아보세요.
                                                </li>
                                                <li>
                                                    술담화가 직접 배송해요.{' '}
                                                    <strong>
                                                        오후 1시 이전 주문건
                                                        당일 출고!
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        30,000원 이상은 무료
                                                        배송!
                                                    </strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- <div className="fake"></div>
                            <hr>
                            <div className="fake"></div> --> */}

                                <div className="detail_explain_main">
                                    <div>
                                        <img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/content_images/contents_images-1655794293969-DH%20%284%29.jpg"
                                            alt="와인사진1"
                                        />
                                    </div>
                                    <div className="detail_explain_main_text">
                                        <p>
                                            <strong>[동학 1957],</strong>
                                        </p>
                                        <p>
                                            <strong>
                                                어떤 맛을 갖고 있나요?
                                            </strong>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            <strong className="gold">
                                                구수한 쌀 향
                                            </strong>
                                            이 코끝까지 고스란히 전해지는
                                            술이에요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            그 뒤로 술을 마시자마자 올라오는
                                            <strong className="gold">
                                                은은한 단맛과
                                            </strong>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            <strong className="gold">
                                                풋풋한 산미
                                            </strong>
                                            는 저절로 침이 고이게 만들죠.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            그리고 깔끔한 목 넘김과 함께 술이
                                            넘어가고 나면
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            쓴맛이 입 안에 살짝 남아 여운을
                                            선사해줄 거예요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/content_images/contents_images-1655794300573-DH%20%285%29.jpg"
                                            alt="와인사진2"
                                        />
                                    </div>
                                    <div className="detail_explain_main_text">
                                        <p>
                                            <strong>[동학 1957], </strong>
                                        </p>
                                        <p>
                                            <strong>
                                                어떤 음식과 잘 어울리나요?
                                            </strong>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            그럴 땐
                                            <strong className="gold">
                                                구수한 양념이 된 음식
                                            </strong>
                                            과 함께 드셔보세요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            갓 지은 밥처럼 구수한 맛을 가득 담은
                                            술인 만큼
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            음식의 맛과 술맛이 어우러져 두 배의
                                            구수함을 느끼게 해주거든요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            또한 담백하고 깔끔한 술맛을 가지고
                                            있으므로
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            식사할 때
                                            <strong className="gold">
                                                반주로 즐기기에도 좋은데요.
                                            </strong>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            집에 있는 반찬만으로도 손색없이
                                            충분한 안주가 될 거예요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                    </div>
                                    <div>
                                        <img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/content_images/contents_images-1655794307874-DH%20%282%29.jpg"
                                            alt="와인사진3"
                                        />
                                    </div>
                                    <div className="detail_explain_main_text">
                                        <p>
                                            <strong>[동학 1957],</strong>
                                        </p>
                                        <p>
                                            <strong>
                                                알고 마시면 더 맛있어요!
                                            </strong>
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            <strong className="gold">
                                                양조장 대표님의 성함과 출생
                                                연도를 따서 이름 붙인 동학 1957
                                            </strong>
                                            은
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            쌀과 효모와 입국을 함께 넣고
                                            발효시켜 만든 술이에요.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            발효 과정을 거친 술은 냉동 여과를
                                            통해
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            맑게 거른 다음 살균한 뒤에
                                            완성됩니다.
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            또한
                                            <strong>
                                                평창동계올림픽 공식 판매주
                                            </strong>
                                            로 선정되어
                                        </p>
                                        <p>
                                            <br />
                                        </p>
                                        <p>
                                            우리나라의 청주를 널리 알리기도
                                            하였답니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 카카오톡 플친 --> */}
                            <div>
                                <div className="kakao_plus">
                                    <div className="kakao_plus_svg">
                                        {/* <!-- 사진 --> */}
                                        <a
                                            href="https://ac://accounts.kakao.com/login/?continue=https://business.kakao.com/dashboard/?sid%3Dpfr"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Kakao
                                        </a>
                                    </div>

                                    <div className="kakao_text">
                                        {/* <!-- 텍스트 --> */}
                                        <p>
                                            처음 경험해보는 전통주가
                                            망설여진다면
                                            <br />
                                            <a href="#">
                                                [도르리 카카오톡 플친]
                                            </a>
                                            등록 후,
                                            <br />
                                            전통주 소믈리에에게 직접 추천
                                            받아보세요.
                                            <br />
                                            여러분들의 인생술을 찾을 수 있도록
                                            <br />
                                            언제나 함께 하겠습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="review-wrap">
                                <div className="review_filter">
                                    <div>
                                        <input
                                            id="review-checkbox"
                                            type="checkbox"
                                        />
                                        <label htmlFor="review-checkbox">
                                            포토리뷰만 보기
                                        </label>
                                    </div>
                                    <div>
                                        <select>
                                            <option value="상세 리뷰순">
                                                상세 리뷰순
                                            </option>
                                            <option value="최신순">
                                                최신순
                                            </option>
                                            <option value="평점 높은 순">
                                                평점 높은 순
                                            </option>
                                            <option value="평점 낮은 순">
                                                평점 낮은 순
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="review_detail">
                                    <div className="review_header">
                                        <div className="review_header_name">
                                            황인규
                                        </div>
                                        <div className="review_header_right">
                                            <div>
                                                <div className="review_header_tit">
                                                    [500ml]세인트하우스 복숭아
                                                    스파클링 와인
                                                </div>
                                                <div className="review_star"></div>
                                                <div className="review_date">
                                                    2022.12.23
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_txt">
                                        달아서 너무 맛있어요. 입문 하시는 분으로
                                        아주 좋을것 같습니다. 단맛을 싫어 하시는
                                        분은 비추이고 달달한 와인 찾으시면
                                        좋을꺼 같네요. 포도 향도 아주 진하게
                                        잘나서 한변 금방 마셨어요.
                                    </div>
                                    <div className="review_header">
                                        <div className="review_header_name">
                                            황인규
                                        </div>
                                        <div className="review_header_right">
                                            <div>
                                                <div className="review_header_tit">
                                                    [500ml]세인트하우스 복숭아
                                                    스파클링 와인
                                                </div>
                                                <div className="review_star"></div>
                                                <div className="review_date">
                                                    2022.12.23
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review_txt">
                                        달아서 너무 맛있어요. 입문 하시는 분으로
                                        아주 좋을것 같습니다. 단맛을 싫어 하시는
                                        분은 비추이고 달달한 와인 찾으시면
                                        좋을꺼 같네요. 포도 향도 아주 진하게
                                        잘나서 한변 금방 마셨어요.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!------------------------------ 플로팅바 ----------------------------------> */}
                        <div className="rightSide">
                            <div className="rightFloat">
                                <form action="../createOrder/createOrder.html">
                                    <div>
                                        <div className="label">
                                            <label>옵션</label>
                                        </div>
                                        <select
                                            className="optOfProduct"
                                            name="option"
                                            required
                                            defaultValue="default"
                                        >
                                            <option value="default">
                                                어떤 옵션을 원하시나요?
                                            </option>
                                            <option value="soju">소주</option>
                                            <option value="beer">맥주</option>
                                            <option value="wine">와인</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div className="label">
                                            <label>수량</label>
                                        </div>
                                        <div className="numofProduct">
                                            <div className="numfor minus">
                                                -
                                            </div>
                                            <input
                                                type="text"
                                                id="pieces"
                                                pattern="\d*"
                                                value="0"
                                                readOnly
                                            />
                                            <div className="numfor plus">+</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="label">
                                            <label>총 상품가격</label>
                                        </div>
                                        <div className="productPrice">
                                            <span>0</span>원
                                        </div>
                                    </div>
                                    <div className="guideofShipment">
                                        <p>
                                            (전국택배) 3,000원
                                            <br />
                                            (제주도 및 도서산간) 3,000원
                                            <br />
                                            <b>50,000이상 구매시 무료배송</b>
                                        </p>
                                    </div>
                                    <div className="productBuy_btn">
                                        <div>장바구니</div>
                                        <button type="submit">구매하기</button>

                                        <div className="popupBasket">
                                            <div className="popupBasketCon">
                                                <p>
                                                    선택하신 상품이 장바구니에
                                                    담겼습니다.
                                                    <br />
                                                    장바구니로 이동하시겠습니까?
                                                </p>
                                                <div className="popupBasketBtn">
                                                    <a href="#">
                                                        쇼핑 계속하기
                                                    </a>
                                                    <a href="../shopBasket/shopBasket.html">
                                                        장바구니 가기
                                                    </a>
                                                </div>
                                            </div>
                                            <span className="popupClose">
                                                X
                                            </span>
                                            <span></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!------------------------------- 하단 바 ----------------------------------> */}
                        <div className="bottomSide">
                            <div className="bottomFloat">
                                <div>장바구니</div>
                                <div>구매하기</div>
                            </div>

                            <div className="bottomPopupBasket displayNone">
                                <div className="popupBasketCon">
                                    <p>
                                        선택하신 상품이 장바구니에 담겼습니다.
                                        <br />
                                        장바구니로 이동하시겠습니까?
                                    </p>
                                    <div className="popupBasketBtn">
                                        <a href="#">쇼핑 계속하기</a>
                                        <a href="../shopBasket/shopBasket.html">
                                            장바구니 가기
                                        </a>
                                    </div>
                                </div>
                                <span className="popupClose">X</span>
                                <span></span>
                            </div>
                        </div>

                        {/* <!-- 장바구니 옵션뷰 --> */}
                        <div className="optionView displayNone">
                            <div className="goods_count_box">
                                <form
                                    className="bottomForm"
                                    action="../createOrder/createOrder.html"
                                >
                                    <p>
                                        옵션 선택
                                        <span className="overviewRemover">
                                            <img
                                                src="./image/close.png"
                                                alt="닫기"
                                            />
                                        </span>
                                    </p>
                                    <div className="count_box_main">
                                        <div className="option_tit">
                                            <dl>
                                                <dt></dt>
                                                <dd></dd>
                                                <dd></dd>
                                            </dl>
                                        </div>
                                        <table>
                                            <colgroup>
                                                <col width=" 30%" />
                                                <col width=" 30%" />
                                                <col />
                                                <col />
                                            </colgroup>
                                            <tbody className="option_select">
                                                <tr>
                                                    <td>
                                                        <select
                                                            className="bottomOptOfProduct"
                                                            name="bottomOption"
                                                            required
                                                        >
                                                            <option
                                                                value
                                                                disabled
                                                                selected
                                                            >
                                                                옵션
                                                            </option>
                                                            <option value="soju">
                                                                소주
                                                            </option>
                                                            <option value="beer">
                                                                맥주
                                                            </option>
                                                            <option value="wine">
                                                                와인
                                                            </option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            id="bottomPieces"
                                                            pattern="\d*"
                                                            value="0"
                                                            readOnly
                                                        />
                                                        개
                                                    </td>
                                                    <td>
                                                        <div className="option_select_btn">
                                                            <button type="button">
                                                                +
                                                            </button>
                                                            <button type="button">
                                                                -
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="bottomCalcPrice">
                                                            0
                                                        </span>
                                                        원
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="count_button_box">
                                        <div>취소</div>
                                        <button type="submit">확인</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
