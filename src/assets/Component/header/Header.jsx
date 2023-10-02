import React, { useEffect, useState } from "react";
import logo from "../../img/hnue-logo.png";
import "../../SCSS/reset.scss";
import "./header.scss";
import { CaretDownOutlined } from "@ant-design/icons";
// import "../JS/scroll.js";

export default function HeaderComponent() {
  const [scrollFlags, setScrollFlag] = useState(false);
  // Chọn phần tử cần thêm class khi cuộn
  const elementToChange = document.getElementById("global-header");
  // elementToChange.classList.remove("scroll");

  // Sự kiện cuộn
  window.addEventListener("scroll", () => {
    // Kiểm tra điều kiện để xác định khi nào thêm class
    if (window.scrollY > 10) {
      setScrollFlag(true);
    } else {
      setScrollFlag(false);
    }
  });

  return (
    <>
      <header
        id="global-header "
        className={scrollFlags ? "site-header scroll" : "site-header"}
        role="banner"
      >
        <div id="gh-main" className="flex items-center relative container">
          <a id="gh-branding" className="flex items-center" href="/">
            <img src={logo} width={60} alt="logo HNUE" className="gh-logo" />
            <div className="gh-branding-name pl-4">
              <span className="text-base">
                Hanoi National University of Education
              </span>
              <br />
              <span className="">Information Center Techonology</span>
            </div>
          </a>
          <div className="gh-desktop gh-menu-and-language">
            <ul className="nav flex items-center">
              <li className="nav-item">
                <a href="#global-course" className="flex items-center">
                  Khoá học
                  <CaretDownOutlined className="ml-2" />
                </a>

                <ul className="subnav">
                  <div className="subnav--name  text-sm text-gray-500">
                    Khoá học dành cho Kids & Teens
                  </div>
                  <hr />
                  <li className="subnav--item">
                    <a href="#Scratch">Scratch</a>
                  </li>
                  <li className="subnav--item">
                    <a href="#CS">Computer Science</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#global-about">Về chúng tôi</a>
              </li>
              {/* <li className="nav-item">
                <a href="">Học viên</a>
              </li> */}
              <li className="nav-item">
                <a href="#global-teacher">Giảng viên</a>
              </li>
              <li className="nav-item">
                <a href="#global-partner">Đối tác</a>
              </li>
              
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
