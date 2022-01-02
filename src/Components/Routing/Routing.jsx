import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Parent from "../ParentCompo/Parent";
import Student from "../StudentCompo/Student";
import Teacher from "../TeacherCompo/Teacher";

export default function Routing() {
  return (
    <Routes>
      <Route path="/stud" element={<Student />}></Route>
      <Route path="/teacher" element={<Teacher />}></Route>
      <Route path="/parent" element={<Parent />}></Route>
    </Routes>
  );
}
