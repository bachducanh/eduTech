import React from "react";
import "../../SCSS/reset.scss";
import "./course.scss";
import scratch from "../../img/course_scratch.png";
import python from "../../img/course_python.png";
import cs from "../../img/course_cs.png";
import pdf from "../../PDF/TTCNTT.pdf";

export default function CourseComponent() {
  return (
    <>
      <div id="global-course" className="">
        <h2 className="text-4xl font-bold about-course">
          <span className="red-color">New </span>
          on EduTech
        </h2>

        <div className="course-introdution flex rounded-md">
          <div className="course-img flex-1">
            <img
              className="w-full course-img__cover rounded-md"
              src={scratch}
              alt=""
            />
          </div>
          <div id="Scratch" className="description flex-2 course-introduction__background rounded-md">
            <h2 className="text-white text-base font-bold m-3">
              Lập trình kéo thả với Scratch
            </h2>
            <hr />
            <div className="description-content m-3">
              <i className="text-white text-xs">
                <span>
                  Lập trình Scratch là một công cụ học tập tuyệt vời cho trẻ em.
                  Nó giúp trẻ em phát triển các kỹ năng và phẩm chất cần thiết
                  để thành công trong thế kỷ 21, bao gồm kỹ năng lập trình, sáng
                  tạo, giải quyết vấn đề, làm việc nhóm, và tư duy phản biện.
                </span>
              </i>
              <br className="mt-4" />

              <a id="btn-viewall-course" href={pdf} >View All</a>
            </div>
          </div>
        </div>

        <div id="CS" className="course-introdution flex rounded-md">
          <div className="course-img flex-1">
            <img
              className="w-full course-img__cover rounded-md"
              src={python}
              alt=""
            />
          </div>
          <div className="description flex-2 course-introduction__background rounded-md">
            <h2 className="text-white text-base font-bold m-3">
              Lập trình Python cho học sinh
            </h2>
            <hr />
            <div className="description-content m-3">
              <i className="text-white text-xs">
                <span className="">
                  Python là một ngôn ngữ lập trình phổ biến được sử dụng trong
                  nhiều lĩnh vực khác nhau, bao gồm khoa học máy tính, khoa học
                  dữ liệu, học máy, và trí tuệ nhân tạo. Mục tiêu đầu ra của
                  việc học lập trình Python là giúp người học phát triển các kỹ
                  năng và phẩm chất sau: Khả năng sáng tạo, kỹ năng lập trình,
                  kỹ năng giải quyết vấn đề, kỹ năng học hỏi, ...
                </span>
              </i>
              <br className="mt-4" />
              <a id="btn-viewall-course" href={pdf} >View All</a>

            </div>
          </div>
        </div>
        <div className="course-introdution flex rounded-md">
          <div className="course-img flex-1">
            <img
              className="w-full course-img__cover rounded-md"
              src={cs}
              alt=""
            />
          </div>
          <div className="description flex-2 course-introduction__background rounded-md">
            <h2 className="text-white text-base font-bold m-3">
              Nhập môn khoa học máy tính
            </h2>
            <hr />
            <div className="description-content m-3">
              <i className="text-white text-xs">
                <span className="">
                  Khóa học Nhập Môn Khoa Học Máy Tính Bằng Python là một chương
                  trình học trực tuyến hoàn chỉnh dành cho người mới bắt đầu
                  trong lĩnh vực khoa học máy tính. Khóa học này sẽ giúp bạn
                  phát triển nền tảng vững chắc trong lĩnh vực này bằng cách sử
                  dụng ngôn ngữ lập trình Python.
                </span>
              </i>
              <br className="mt-4" />
              <a id="btn-viewall-course" href={pdf} >View All</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
