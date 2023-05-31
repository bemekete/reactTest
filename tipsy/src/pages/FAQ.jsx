import React from 'react';
import '../styles/FAQ.scss';

function FAQ() {
    return (
        <>
            <div id="FAQ_main">
                <div id="faq_maincontainer">
                    <p class="FAQ_first_text">FAQ</p>

                    <div class="FAQ_text">
                        <p>
                            저희 도르리 사이트를 이용하시는 회원님들의 질문 중
                            자주하시는 질문들을 모아 놓았습니다.
                            <br />
                            요청 사항 및 문의 사항이 있으시면 고객지원 &gt;
                            간편문의를 이용해주세요~
                        </p>
                    </div>

                    <div>
                        {/* <!-- 고객문의 바로가기 --> */}
                        <div class="customer_inquiry">
                            <ul>
                                {/* <!-- 여기 button 말고 a 태그 쓰면 안되나? --> */}
                                <li class="customer_inquiry_button">
                                    <a href="../simple_inquiry/simple_inquiry.html">
                                        고객문의 바로가기
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        {/* <!-- 나머지 --> */}
                        <div class="Qbox_container">
                            {/* <!-- Q. 친환경소재를 사용하고 있나요. --> */}
                            <ul>
                                {/* <!-- Q는 가상요소 선택자로--> */}
                                <li class="Qbox1">
                                    아이디와 비밀번호가 기억나지 않아요.
                                    {/* <!-- 여기에 hover 하면 바뀌는 화살표. html,css 영역 아닌듯. --> */}
                                    <ul>
                                        <li>
                                            <p>
                                                로그인 화면에서 아이디
                                                찾기/비밀번호 찾기를 통해 확인
                                                가능합니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <li class="Qbox2">
                                    상품을 받았는데 환불하고 싶어요.
                                    <ul>
                                        <li>
                                            <p>
                                                환불은 배송 완료 후 7일 이내일
                                                경우에만 접수 가능합니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <li class="Qbox3">
                                    품절 된 술들은 언제쯤 재입고 되나요?
                                    <ul>
                                        <li>
                                            <p>
                                                품절 상품 재입고 여부 및 일정은
                                                정확한 확인이 가능하지 않지만
                                                재입고 알람을 등록하면
                                                알림톡으로 확인 할 수 있습니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div class="FAQ_search">
                            {/* <!-- 검색창 --> */}
                            <form action="#">
                                <label>
                                    <input
                                        type="search"
                                        name="faqPageSearch"
                                        id="faqPageSearch"
                                        placeholder="검색어를 입력하세요"
                                    />
                                </label>
                                <button type="submit">
                                    <img
                                        src={require('../assets/faq_img/search.png')}
                                        alt="검색"
                                    />
                                </button>
                            </form>
                        </div>

                        <div class="inquiry">
                            <div class="inquiry_box box_background">
                                {/* <!-- 전체 문의, 홈페이지 문의, 제품 문의, A/S문의, 이전 설치 --> */}
                                <ul>
                                    <li class="inquiry_box1">
                                        <a href="#">전체 문의</a>
                                    </li>

                                    <li class="inquiry_box2">
                                        <a href="./inquiry_box2.html">
                                            홈페이지 문의
                                        </a>
                                    </li>

                                    <li class="inquiry_box3">
                                        <a href="./inquiry_box3.html">
                                            제품 문의
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- 구분, 제목 및 제품문의 --> */}
                            <div class="inquiry_table">
                                {/* <!-- table? 인가 --> */}
                                <figure>
                                    <table>
                                        <colgroup>
                                            <col width="30%" />
                                            <col width="70%" />
                                        </colgroup>

                                        <thead>
                                            <tr>
                                                <th>구분</th>
                                                <th>제목</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    홈페이지 문의
                                                </th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            새로 회원 가입
                                                            하려니 이미 가입중인
                                                            회원이라고 나옵니다.
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제품 문의</th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            환불 요청 했는데
                                                            언제쯤 찾아가시나요?
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제품 문의</th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            술이 금가서 왔어요
                                                            환불 요청 하면
                                                            언제쯤 처리되고 다시
                                                            배송되나요?
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    홈페이지 문의
                                                </th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            새로 회원 가입
                                                            하려니 이미 가입중인
                                                            회원이라고 나옵니다.
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제품 문의</th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            환불 요청 했는데
                                                            언제쯤 찾아가시나요?
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">제품 문의</th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            술이 금가서 왔어요
                                                            환불 요청 하면
                                                            언제쯤 처리되고 다시
                                                            배송되나요?
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    홈페이지 문의
                                                </th>
                                                <td class="button_td">
                                                    <div>
                                                        <button>
                                                            새로 회원 가입
                                                            하려니 이미 가입중인
                                                            회원이라고 나옵니다.
                                                            <img
                                                                src={require('../assets/faq_img/down.svg')}
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div class="innerCon">
                                                            Irure exercitation
                                                            sit sint duis
                                                            aliquip aliquip anim
                                                            voluptate labore.
                                                            Quis aliquip tempor
                                                            irure labore eu aute
                                                            non ea quis culpa
                                                            commodo ad
                                                            voluptate. Ex ad
                                                            sint id dolor
                                                            officia qui
                                                            consequat magna non
                                                            irure officia ex.
                                                            Deserunt aliqua
                                                            incididunt pariatur
                                                            aute minim occaecat
                                                            duis in. Enim nulla
                                                            ea cupidatat nostrud
                                                            eiusmod est aliquip
                                                            duis est sunt.
                                                            Labore consequat ea
                                                            labore aliquip
                                                            occaecat magna
                                                            officia dolore.
                                                            Lorem velit
                                                            voluptate
                                                            reprehenderit nisi
                                                            reprehenderit
                                                            voluptate aute velit
                                                            ullamco consequat
                                                            ad. Nostrud nisi
                                                            cupidatat
                                                            consectetur labore
                                                            labore Lorem enim
                                                            aute laborum
                                                            pariatur. Cupidatat
                                                            non in et commodo ad
                                                            ut culpa magna
                                                            tempor id voluptate.
                                                            Anim magna aute
                                                            nostrud duis minim
                                                            ex mollit ea veniam
                                                            dolore eu dolor
                                                            excepteur et. Magna
                                                            dolor ex irure sit
                                                            deserunt ut qui
                                                            reprehenderit anim
                                                            duis qui quis.
                                                            Deserunt pariatur
                                                            nisi proident
                                                            eiusmod anim dolore
                                                            id aliquip amet
                                                            cupidatat laboris
                                                            nulla ullamco minim.
                                                            Ea occaecat anim id
                                                            velit esse sunt
                                                            voluptate sunt culpa
                                                            Lorem dolor Lorem
                                                            elit.
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </figure>
                            </div>

                            <div class="inquiry_page_button">
                                {/* <!-- <-1,2,3-> 버튼 --> */}
                                <b>
                                    <a href="#">1</a>
                                </b>

                                <b>
                                    <a href="./faq2.html">2</a>
                                </b>

                                <b>
                                    <a href="./faq3.html">3</a>
                                </b>

                                <b>
                                    <a href="./faq4.html">4</a>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
