import React from "react";
import robot from "../../img/robot.png";
import "../aboutUs/about.scss";
import "../../SCSS/reset.scss";
import { SendOutlined } from "@ant-design/icons";

export default function AboutComponent() {
  return (
    <>
      <div id="global-about" className="flex">
        <div className="ga-box flex-1">
          <div className="ga-box-text">
            <div className="flex font-bold text-3xl">
              <h1 className="pr-2"> About us</h1>
            </div>
            <hr className="tag-line-component" />
            <br />

            <h1 className="text-4xl font-bold">Welcome to EduTech</h1>
            <div className="mt-5">
              <span>
                Với sứ mệnh là tạo ra một môi trường học tập đáng tin cậy và
                chất lượng cao. Đội ngũ giảng viên của EduTech là những giảng
                viên lập trình hàng đầu, có kinh nghiệm sâu rộng và tận tâm với
                việc giảng dạy. Các giảng viên sẽ hướng dẫn người học qua từng
                bước trong quá trình học, cung cấp kiến thức chính xác và thực
                tế. Học viên cũng có thể tương tác trực tiếp với giảng viên và
                đồng học trong cộng đồng học viên của trung tâm, để trao đổi
                kiến thức và giúp đỡ lẫn nhau.
              </span>
            </div>
          </div>
        </div>
        <img src={robot} alt="robot" id="robot" className="flex-1" />
      </div>
    </>
  );
}
