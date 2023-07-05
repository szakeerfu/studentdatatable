import React, { useState } from "react";
import "./student.css";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    grade: "",
    school: "",
    category: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevData) => [...prevData, studentData]);
    setStudentData({
      name: "",
      age: "",
      grade: "",
      school: "",
      category: "",
    });
  };

  return (
    <div>
      <form className="student-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={studentData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            value={studentData.grade}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          School:
          <input
            type="text"
            name="school"
            value={studentData.school}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={studentData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>School</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.school}</td>
              <td>{student.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentForm;
