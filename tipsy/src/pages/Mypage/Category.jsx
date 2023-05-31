import { useState } from "react";

import ListContents from "./Listcontents";

export default function Category() {
    const [categoryNum, setCategoryNum] = useState(0);

    function onClickCategory(e) {
        const category = document.querySelectorAll('.categoryList li');

        e.preventDefault();

        for (let i = 0; i < category.length; i++) {
            category[i].classList.remove('nowpage');
        }
        e.target.parentNode.classList.add('nowpage');
    }

    return (
        <div className="category" id="category">
            <ul className="categoryList">
                <li className="nowpage">
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(0); }}>주문내역</a>
                </li>
                <li>
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(1); }}>쿠폰</a>
                </li>
                <li>
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(2); }}>게시글</a>
                </li>
                <li>
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(3); }}>관심 상품</a>
                </li>
                <li>
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(4); }}>최근 본 상품</a>
                </li>
                <li>
                    <a href="#" onClick={e => { onClickCategory(e); setCategoryNum(5); }}>나의 음주 스타일</a>
                </li>
            </ul>
            <ListContents categoryNum={categoryNum} />
        </div>
    )
}