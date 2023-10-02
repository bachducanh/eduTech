import React from "react";
import "../../SCSS/reset.scss";
import "../footer/footer.scss";
import {
  EnvironmentOutlined,
  WhatsAppOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";

export default function FooterComponent() {
  return (
    <>
      <footer id="global-footer">
        <div id="gf-main" className="container">
          <h1 className="text-xl font-bold">TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI</h1>
          <p>Hanoi National University of Education</p>
          <div className="flex justify-start">
            <div className="contact-group text-sm">
              <div className="flex items-center">
                <EnvironmentOutlined className="mr-2" />
                <a href="">136 Xuân Thuỷ - Cầu Giấy - Hà Nội</a>
              </div>
              <div className="flex items-center">
                <WhatsAppOutlined className="mr-2" />
                <a href=""> 024-37547823 fax: 024-37547971</a>
              </div>
              <div className="flex items-center">
                <MailOutlined className="mr-2" />
                <a href="">haind@hnue.edu.vn</a>
              </div>
              <div className="flex items-center">
                <HomeOutlined className="mr-2" />
                <a href="">http://www.hnue.edu.vn</a>
              </div>
            </div>
          </div>
          <hr />
          <h1 className="text-center text-sm" id="copyright">
            Copyright 2023 by Information Center Technology of HNUE
          </h1>
        </div>
      </footer>
    </>
  );
}
