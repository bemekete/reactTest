import React from "react";
import '../styles/Boardtable.scss';

export default function Boardtable() {
    return (
        <>
            <div class="board_table">
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
                            {
                                <tr>
                                    <th scope="row">배송 관련</th>
                                    <td className="button_td">
                                        <div>
                                            <button>n월 입고 지연 상품 안내
                                                <img src={require('../assets/notice_img/down.svg')} alt="" />
                                            </button>
                                            <div className="innerCon">
                                                Irure exercitation sit sint duis aliquip aliquip anim voluptate
                                                labore. Quis aliquip tempor irure labore eu aute non ea quis culpa
                                                commodo ad voluptate. Ex ad sint id dolor officia qui consequat
                                                magna non irure officia ex. Deserunt aliqua incididunt pariatur aute
                                                minim occaecat duis in.

                                                Enim nulla ea cupidatat nostrud eiusmod est aliquip duis est sunt.
                                                Labore consequat ea labore aliquip occaecat magna officia dolore.
                                                Lorem velit voluptate reprehenderit nisi reprehenderit voluptate
                                                aute velit ullamco consequat ad. Nostrud nisi cupidatat consectetur
                                                labore labore Lorem enim aute laborum pariatur. Cupidatat non in et
                                                commodo ad ut culpa magna tempor id voluptate.

                                                Anim magna aute nostrud duis minim ex mollit ea veniam dolore eu
                                                dolor excepteur et. Magna dolor ex irure sit deserunt ut qui
                                                reprehenderit anim duis qui quis. Deserunt pariatur nisi proident
                                                eiusmod anim dolore id aliquip amet cupidatat laboris nulla ullamco
                                                minim. Ea occaecat anim id velit esse sunt voluptate sunt culpa
                                                Lorem dolor Lorem elit.
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </figure>
            </div>

            <div class="board_page_button">
                {/* <!-- <-1,2,3-> 버튼 --> */}
                <b>
                    <a href="#">1</a>
                </b>
            </div>
        </>
    )
}
