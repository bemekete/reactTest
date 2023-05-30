import React from 'react';
import '../styles/Login.css';

function Login() {
    return (
        <>
            {/* <!-- ================================================= main =============================================== --> */}
            <main>
                <div id="login_wrap">
                    <div id="login_container">
                        <form
                            action="../index.html"
                            id="login_form"
                            class="login_form"
                            name="login_form"
                        >
                            <div class="login_tit">
                                <a href="/" class="login_logo">
                                    tipsy
                                </a>
                            </div>
                            <div class="hide">간격띄우기</div>
                            <div class="login_text">
                                <div>
                                    <ul>
                                        <li>
                                            <input
                                                class="login_input"
                                                type="text"
                                                id="login_id"
                                                name="login_id"
                                                placeholder="아이디를 입력하세요."
                                                autofocus
                                                required
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <input
                                            class="login_input"
                                            type="password"
                                            id="login_pw"
                                            name="login_pw"
                                            placeholder="비밀번호를 입력하세요."
                                            required
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div class="keepIdDiv">
                                <input id="keepId" type="checkbox" />
                                <label for="keepId">아이디 저장</label>
                            </div>
                            <div>
                                <button class="login_btn">로그인</button>
                            </div>
                            <div class="find_div">
                                <span>
                                    <a href="../find/find_id.html" class="find">
                                        <strong>아이디찾기 &#124; </strong>
                                    </a>
                                </span>
                                <span>
                                    <a
                                        href="../find/find_password.html"
                                        class="find"
                                    >
                                        <strong>비밀번호찾기</strong>
                                    </a>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>아직 회원이 아니신가요?</strong>
                                    &nbsp;
                                    <a href="../join/join.html" class="find2">
                                        <strong>회원가입</strong>
                                    </a>
                                </span>
                            </div>
                        </form>
                        <div class="sns_login">
                            <div class="sns_login_tit">SNS 로그인</div>
                            <div>
                                <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fmail.kakao.com%2F">
                                    <img
                                        class="sns_login_img"
                                        src={require('../assets/login_img/kakao_login_icon.png')}
                                        alt="카카오 로그인"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="https://nid.naver.com/nidlogin.login">
                                    <img
                                        class="sns_login_img"
                                        src={require('../assets/login_img/naver_login_icon.png')}
                                        alt="네이버 로그인"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="https://accounts.google.com/accountchooser/identifier?checkedDomains=youtube&dsh=S486541525%3A1672737939199566&flowEntry=AccountChooser&flowName=GlifWebSignIn&hl=ko&ifkv=AeAAQh4DnVYnd_O3p6ugUPFpl0JlJzD23WIxi8cpZoMsU6rAWSabyk3Hp9rjCAGLV3jna0WNq5B3nw&pstMsg=1">
                                    <img
                                        class="sns_login_img2"
                                        src={require('../assets/login_img/google_login_icon.png')}
                                        alt="구글 로그인"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
