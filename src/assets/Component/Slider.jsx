import React, { useState } from "react";
import "../SCSS/slider.scss";
import "../SCSS/reset.scss";


export default function SliderComponent() {
  return (
    <>
      <div id="global-slider" className="gs-section">
        <div className="gs-section-background"></div>
        <div className="gs-container">
          <div className="gs-element">
            <h1 className="gs-element-paddingtop display__text--white">
              Start learning from
              <br />
              <span className="">the world's best institutions</span>
            </h1>
          </div>

          <div className="gs-element">
            <h3 className="slogan--yellow">Chuyển đổi ước mơ thành mã nguồn thực tế.</h3>
          </div>

          <div className="gs-button">
            <button type="submit" id="btn-register" className="btn__register--red">Đăng ký ngay</button>
          </div>

          <div className="gs-element title-introdution">
              <h3 className="text-center">Chào mừng bạn đến với Trung tâm Công nghệ thông tin - Nơi thăng hoa kiến thức và sự sáng tạo</h3>
          </div>
        </div>
      </div>
    </>
  );
}
