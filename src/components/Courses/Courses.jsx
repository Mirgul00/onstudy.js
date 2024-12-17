import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "SAT",
      description: "Эффективная подготовка к экзамену SAT для успешного поступления в зарубежные вузы.",
    },
    {
      id: 2,
      title: "IELTS",
      description: "Полный курс по IELTS для достижения высоких баллов по всем разделам экзамена.",
    },
    {
      id: 3,
      title: "SAT Advanced",
      description: "Продвинутый уровень SAT: сложные задания и стратегии для топовых результатов.",
    },
  ];

  return (
    <section className="courses-section">
      <h2 className="courses-title">Наши курсы</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-icon">
              <span>{course.title[0]}</span> {/* Первая буква названия */}
            </div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="course-button">Узнать больше</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
