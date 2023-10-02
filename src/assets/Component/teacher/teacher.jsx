import React from "react";
import "../teacher/teacher.scss";
import "../../SCSS/reset.scss";
import teacher from "../../img/teacher.jpg";

export default function TeacherComponent() {
  return (
    <>
      <div id="global-teacher">
        <div className="gt-main">
          <div className="gt-container flex">
            <div className="branding-teacher flex-1">
              <img src={teacher} alt="" />
            </div>
            <div className="gt-information flex-1">
              <h1 className="text-3xl font-bold">Giảng viên</h1>
              <hr className="tag-line-component"/>
              <br />
              <div>
                <div>
                  EduTech có đội ngũ giảng viên giàu kinh nghiệm và có kiến thức
                  chuyên sâu trong các lĩnh vực liên quan đến CNTT. Các giảng
                  viên thường tham gia vào công việc giảng dạy, nghiên cứu và
                  phát triển ứng dụng công nghệ thông tin.
                </div>
                <br />
                <div>
                  Trong đội ngũ giảng viên có sự tham gia của thầy Nguyễn Duy
                  Hải giám đốc trung tâm Công Nghệ Thông Tin - Trường Đại học
                  Sư Phạm Hà Nội. 
                </div>
                <div className="view-more float-right pt-20">
                  <a href="https://staff.hnue.edu.vn/directories/?haind" className="font-bold">
                    <button id="btn-view ">Xem thêm</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
