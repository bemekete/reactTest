import React from 'react';
import '../styles/CreateOrder.scss';

function CreateOrder() {
    return (
        <>
            {/* <!-- ####################################### main ########################################## --> */}
            <div id="createorder_main">
                {/* <!-- 맨 밖 선 --> */}
                <div class="main_container">
                    {/* <!-- main 상단 -->
                <!-- 오른쪽 상단 위 --> */}
                    <div class="location">
                        <span>
                            <a href="#" class="main_home">
                                HOME
                            </a>{' '}
                            장바구니
                        </span>
                    </div>

                    {/* <!-- 주문 / 결제 --> */}
                    <div class="order_tit">
                        <span>주문 / 결제</span>
                        <ul>
                            <li class="Now_select">
                                <a href="../shopBasket/shopBasket.html">
                                    01 장바구니
                                </a>
                                <img
                                    class="tri_arrow"
                                    src={require('../assets/createorder_img/right-arrow-black-triangle.png')}
                                    alt="화살표이미지"
                                />
                            </li>
                            <li>
                                02 주문서작성/결제
                                <img
                                    class="tri_arrow"
                                    src={require('../assets/createorder_img/right-arrow-black-triangle.png')}
                                    alt="화살표이미지"
                                />
                            </li>
                            <li>03 주문완료</li>
                        </ul>
                    </div>
                    <hr />

                    <form action="../orderEnd/orderEnd.html">
                        <div class="form_container main_marginTop20">
                            {/* <!-- Box --> */}
                            <div class="leftContainer">
                                {/* <!-- 배송지 --> */}
                                <div class="box">
                                    <div class="main_bold nthchild_1">
                                        배송지
                                    </div>

                                    <div class="main_marginTop20">
                                        <div>홍길동</div>

                                        <div>010-1111-2222</div>

                                        <div class="main_marginTop20">
                                            <span>
                                                경기 성남시 분당구 돌마로 47
                                            </span>
                                            <span>5층 504호</span>
                                        </div>
                                    </div>

                                    <div class="defaultAddress main_marginTop20">
                                        기본 배송지
                                    </div>
                                </div>

                                {/* <!-- 주문 예정 상품 --> */}
                                <div class="box">
                                    <div class="main_bold nthchild_1">
                                        주문 예정 상품
                                    </div>
                                    <div class="product_container main_marginTop20">
                                        <img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg"
                                            alt="막쿠르트img"
                                        />
                                        <div class="product_text">
                                            <div>막쿠르트</div>

                                            <div>
                                                <div class="main_bold">
                                                    [ONLY 도르리] 막쿠르트[2...
                                                </div>
                                                <div>
                                                    [450ml X 2병] 막쿠르트
                                                </div>
                                            </div>

                                            <div class="price_text">
                                                {/* <!-- 이거 주문 총액이 아니라 상품 금액으로 해야함. 지금은
                                        상품이 1개라서 총액이랑 상품금액 같이 씀 --> */}
                                                <span class="totalProductMoney"></span>
                                                원 /<span>수량 1개</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="main_textAlign main_marginTop20 productHeight proHr1">
                                        <span class="deliveryMoney"></span>원
                                    </div>
                                    <div class="mainFlex productHeight proHr2">
                                        <div>주문 총액</div>
                                        <div>
                                            <span class="totalProductMoney"></span>
                                            원
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 쿠폰, 포인트 --> */}
                                <div class="couponPoint box">
                                    <div class="main_bold nthchild_1">
                                        쿠폰 / 포인트
                                    </div>

                                    <div class="mainFlex main_marginTop20">
                                        <div>쿠폰 입력</div>
                                        <div>
                                            <input
                                                type="text"
                                                name="couponCode"
                                                size="25"
                                                placeholder="쿠폰 코드를 입력해주세요"
                                                class="main_input"
                                            />
                                            <button
                                                type="button"
                                                class="couponBtn"
                                            >
                                                등록
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mainFlex couponHeight main_marginTop10">
                                        <div>쿠폰 선택</div>
                                        <div class="mainFlex flexGap">
                                            <div>5개</div>
                                            <img
                                                alt="접기 img"
                                                class="main_down"
                                                src={require('../assets/createorder_img/down.svg')}
                                            />
                                        </div>
                                    </div>

                                    <div class="mainFlexAll couponClickBtn main_marginTop10 main_none">
                                        <div>
                                            <div data-coupon-won="3000">
                                                [신규가입] 3,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="2000">
                                                [신규가입] 2,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="1000">
                                                [신규가입] 1,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="3000">
                                                [신규가입] 3,000원 배송비 할인
                                                쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                    </div>

                                    <div class="mainFlex main_marginTop20">
                                        <div>포인트</div>
                                        <input
                                            type="text"
                                            name="points"
                                            size="35"
                                            placeholder="사용 할 포인트를 입력해 주세요"
                                            class="main_input"
                                        />
                                    </div>

                                    <div class="pointAll main_marginTop10">
                                        <button
                                            type="button"
                                            class="pointAllBtn"
                                        ></button>
                                        <div>전액 사용</div>
                                    </div>

                                    <div class="main_textAlign usePoint main_marginTop10 pointColor">
                                        {/* <!-- &nbsp; pointAll이랑 묶을려고 공백 안주고 gap줌 --> */}
                                        <div>사용 가능한 포인트 :</div>
                                        {/* <!-- js --> */}
                                        <div>
                                            <span class="point"></span>p
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 결제 방법 --> */}
                                <div class="main_bold box">
                                    <div class="nthchild_1">결제 방법</div>

                                    <div class="paymentMethod main_marginTop20">
                                        {/* <!-- click event --> */}
                                        <div>신용카드</div>
                                        <div>가상계좌</div>
                                        <div class="kakaoPay">카카오페이</div>
                                        <div class="naverPay">네이버페이</div>
                                    </div>
                                </div>
                            </div>

                            <div class="rightContainer">
                                {/* <!-- 이용 동의 --> */}
                                <div class="agreeUse box">
                                    <input
                                        type="checkbox"
                                        name="agree_use"
                                        id="agree_use"
                                        value="agree_use"
                                        required
                                    />
                                    <label
                                        for="agree_use"
                                        class="information_agree"
                                    >
                                        <div>
                                            <span>구매자의 정보수집, 이용</span>
                                            <span>(필수)</span>
                                        </div>
                                    </label>
                                    <img
                                        src={require('../assets/createorder_img/down.svg')}
                                        alt="접기 이미지"
                                        class="main_down"
                                    />
                                </div>

                                <p class="agreeText main_none">
                                    <b>개인정보 판매자 제공에 동의합니다.</b>
                                    제공받는 자 : “양조장” 목적 : 판매자와
                                    구매자 사이의 원활한 거래 진행, 상품의
                                    배송을 위한 배송지 확인, 고객상담 및
                                    불만처리 등명 정보 : 구매자 정보 (이름,
                                    전화번호, 주소), 수취인 정보(이름, 전화번호,
                                    주소) 보유기간 : 발송완료 후 90일
                                    <b>
                                        전통주 구매자의 정보수집·이용에
                                        동의합니다.
                                    </b>
                                    제공받는 자 : 관할 세무서장 목적 : 주류
                                    통신판매기록부 관리 및 국세청 신고 정보 :
                                    구매자 정보 (이름, 주소, 생년월일(본인인증
                                    정보를 이용함), 주문상품, 수량, 주문금액)
                                    보유기간 : 회원 탈퇴 시까지 단, 관계법령의
                                    규정에 따라 보존할 의무가 있으며 해당
                                    기간동안 보존
                                    <span class="agree_red">
                                        ※ 동의하지 않으실 경우 구매가
                                        제한됩니다.
                                    </span>
                                </p>

                                {/* <!-- 계산서 --> */}
                                <div class="receiptCon box">
                                    <div class="main_bold nthchild_1">
                                        계산서
                                    </div>

                                    <div class="mainFlexAll bill">
                                        {/* <!-- js --> */}
                                        <div>
                                            <div>결제방법</div>
                                            <div>
                                                <span class="payment">-</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 상품금액</div>
                                            <div>
                                                <span class="totalProductMoney"></span>
                                                원
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 배송비</div>
                                            {/* <!-- 기본값 3,000원. 얼마 이상은 0원뜨게 if문 --> */}
                                            <div>
                                                <span class="deliveryMoney"></span>
                                                원
                                            </div>
                                        </div>
                                        <div>
                                            <div>포인트 사용</div>
                                            <div>
                                                <span class="point">0</span>원
                                            </div>
                                        </div>
                                        <div>
                                            <div>쿠폰</div>
                                            <div>
                                                <span class="coupon">-</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 할인</div>
                                            {/* <!-- <div>-1,300</div> -->
                                        <!-- 포인트 + 쿠폰 --> */}
                                            <div>
                                                <span class="totalDiscount"></span>
                                                원
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mainFlex main_bold totalPaymentMoney">
                                        <div>총 결제 금액</div>
                                        {/* <!-- 총 상품금액 + 총 배송비 - 총 할인 --> */}
                                        <div>
                                            <span class="totalMoney"></span>원
                                        </div>
                                    </div>

                                    <div class="submitBtn">
                                        {/* <!-- js --> */}
                                        <button type="submit">결제하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateOrder;
