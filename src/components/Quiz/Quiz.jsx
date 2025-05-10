import React, { useState } from 'react';
// Import hook để lấy state và gửi action từ Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, submitQuiz, resetQuiz } from '../../store/store';
import Question from './Question';
import styles from '/Users/tranhongphuoc/WebstormProjects/setupredux/src/components/Quiz/Quiz.module.css';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  // Lấy dữ liệu từ Redux store
  const { questions, userAnswers, showResult } = useSelector(state => state.quiz);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const goFirst = () => setCurrent(0);
  const goPrev = () => setCurrent(c => Math.max(0, c - 1));
  const goNext = () => setCurrent(c => Math.min(questions.length - 1, c + 1));
  const goLast = () => setCurrent(questions.length - 1);

  return (
    <div className={styles.container}>
      <div className={styles.question}>
        <b>Q{current + 1}. {questions[current].text}</b>
      </div>
      <div className={styles.optionsGrid}>
        {questions[current].options.map((opt, oid) => (
          <button
            key={oid}
            className={
              styles.optionBtn +
              (userAnswers[current] === oid ? ' ' + styles.selected : '')
            }
            onClick={() => dispatch(selectAnswer({ qid: current, oid }))}
            disabled={showResult}
          >
            <input
              type="radio"
              checked={userAnswers[current] === oid}
              readOnly
              style={{ marginRight: 10 }}
            />
            {opt}
          </button>
        ))}
      </div>
      <div className={styles.navBtns}>
        <button onClick={goFirst} disabled={current === 0}>First</button>
        <button onClick={goPrev} disabled={current === 0}>Prev</button>
        <button onClick={goNext} disabled={current === questions.length - 1}>Next</button>
        <button onClick={goLast} disabled={current === questions.length - 1}>Last</button>
      </div>
      <div className={styles.actionBtns}>
        <button onClick={() => navigate('/quiz')}>Quiz</button>
        <button onClick={() => navigate('/quiz/review')}>Quiz Review</button>
        <button onClick={() => navigate('/quiz/result')}>Submit</button>
      </div>
    </div>
  );
}
