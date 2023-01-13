import React from "react";
import Exam from '../components/exam/Exam.js';
import './examsPageStyle.css';

function Exams() {
  return (
    <div className='ExamContainer'>
    <h1>Exams</h1>
    <Exam />
    </div>
  )
}

export default Exams