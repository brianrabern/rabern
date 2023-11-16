import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="card h-64 w-96 mb-4 ml-4 mr-4 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p>{course.university}</p>
        <div className="card-actions">
          <div className="badge badge-outline">{course.year}</div>
          <div className="badge badge-outline">{course.level}</div>
        </div>
        <div>
          <div className="stat-title">Students: {course.students} </div>
          {/* <div className="stat-value text-sm">{course.students}</div> */}
        </div>
      </div>
    </div>
  );
};

// title: "The Philosophy of Virtual Worlds",
// year: "2022",
// level: "honours",
// students: "25",
// university: "University of Edinburgh",

export default CourseCard;
