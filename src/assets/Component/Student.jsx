import React from "react";
import { Carousel } from "antd";
import stu1 from "../img/stu1.jpg";
import stu2 from "../img/stu2.jpg";
import stu3 from "../img/stu3.jpg";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function StudentComponent() {
  return (
    <div className="stu-information">
      <h1 className="text-center stu-title text-4xl font-bold">Học viên nổi bật</h1>
      <Carousel autoplay>
        <div>
          <img src={stu2} alt="" />
        </div>
        <div>
          <img src={stu2} alt="" />
        </div>
        <div>
          <img src={stu3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
