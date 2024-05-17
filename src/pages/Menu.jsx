import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Menu = () => {
const[burger,setburger]=useState();
//input 동적 입력 변수 -> useState
const BurgerChange = e => {
  setburger(e.target.value)
};

const navigate = useNavigate();
  return (
    <>
        <h1>Menu Page</h1>
        <input type="text" placeholder="햄버거 부랜두" onChange={BurgerChange}/>
        {/* 변하는 입력사항에 대해 onChange로 입력받음 */}
        <button type="submit" onClick={()=>navigate(`/product/${burger}`)}>브랜드 페이지로 이동</button>
    </>
  );
}

export default Menu;