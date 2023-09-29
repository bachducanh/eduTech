import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeaderComponent from './assets/Component/Header.jsx';
import SliderComponent from './assets/Component/slider.jsx';
import CourseComponent from './assets/Component/Course.jsx';
import StudentComponent from './assets/Component/Student';
import FooterComponent from './assets/Component/footer.jsx';

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <HeaderComponent />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('slider')).render(
  <React.StrictMode>
    <SliderComponent/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('about')).render(
  <React.StrictMode>
    <CourseComponent/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('student')).render(
  <React.StrictMode>
    <StudentComponent/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <FooterComponent/>
  </React.StrictMode>,
)


