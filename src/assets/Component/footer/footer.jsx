import React from "react";
import "./footer.scss";
import "../../SCSS/reset.scss";

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
        <div className="gf-section-container flex justify-between py-12">
          <section className="gf-information">
            <h1 className="text-xl font-bold">Đại học Sư phạm Hà Nội</h1>
            <h2>Hanoi National University of Education</h2>
          </section>
          <section className="gf-information">
            <ul>
              <li>
                <a href="">
                  <EnvironmentOutlined />
                  136 Xuân Thuỷ - Cầu Giấy - Hà Nội
                </a>
              </li>
              <li>
                <a href="">
                  <WhatsAppOutlined />
                  024-37547823 fax: 024-37547971
                </a>
              </li>
              <li>
                <a href="">
                  <MailOutlined />
                  haind@hnue.edu.vn
                </a>
              </li>
              <li>
                <a href="">
                  <HomeOutlined />
                  http://www.hnue.edu.vn
                </a>
              </li>
            </ul>
          </section>
          <section className="gf-information">
            <h3>Về EduTech</h3>
            <ul>
              <li>
                <a href="">Blog công nghệ</a>
              </li>
              <li>
                <a href="">Về chúng tôi</a>
              </li>
              <li>
                <a href="">Tuyển dụng</a>
              </li>
            </ul>
          </section>
          <section className="gf-information">
            <h3>Chương trình học</h3>
            <ul>
              <li>
                <a href="">Học lập trình Scratch</a>
              </li>
              <li>
                <a href="">Học lập trình Python</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
}
