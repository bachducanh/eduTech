import React from "react";
import HeaderComponent from "./assets/Component/header/Header";
import CourseComponent from "./assets/Component/course/Course";
import StudentComponent from "./assets/Component/student/Student";
import FooterComponent from "./assets/Component/footer/footer";
import SliderComponent from "./assets/Component/slider/Slider";
import "./App.css";

export default function App() {
  return (
    <div className="exo-font">
      {" "}
      <HeaderComponent />
      <SliderComponent />
      <CourseComponent />
      <StudentComponent />
      <FooterComponent />
    </div>
  );
}
