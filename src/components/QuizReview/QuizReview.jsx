import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Quiz/Quiz.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function QuizReview() {
  const { questions, userAnswers } = useSelector(state => state.quiz);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Xác định đúng/sai cho từng câu
  const isCorrect = (qid) => userAnswers[qid] === questions[qid].answer;

  // Nếu đang ở /quiz/result chỉ render phần review chi tiết
  if (location.pathname === '/quiz/result') {
    return (
      <div className={styles.container}>
        <div
          style={{
            background: isCorrect(current) ? '#d1fae5' : '#fee2e2',
            borderRadius: 12,
            padding: 20,
            marginBottom: 32,
            border: '1px solid #e5e7eb'
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: 10, color: isCorrect(current) ? '#065f46' : '#b91c1c' }}>
            Q{current + 1}. {questions[current].text}
          </div>
          <div>
            {questions[current].options.map((opt, oid) => (
              <div
                key={oid}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 6,
                  color:
                    questions[current].answer === oid
                      ? '#065f46'
                      : userAnswers[current] === oid
                      ? (questions[current].answer !== oid ? '#b91c1c' : '#22223b')
                      : '#6b7280',
                  fontWeight:
                    questions[current].answer === oid
                      ? 'bold'
                      : userAnswers[current] === oid
                      ? 'bold'
                      : 'normal',
                  opacity: userAnswers[current] === oid || questions[current].answer === oid ? 1 : 0.7
                }}
              >
                <input
                  type="radio"
                  checked={userAnswers[current] === oid}
                  readOnly
                  style={{ marginRight: 10 }}
                />
                {opt}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 12,
              background: '#e5e7eb',
              borderRadius: 6,
              padding: '6px 12px',
              color: '#22223b',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Right answer is: <span style={{ color: '#065f46' }}>{questions[current].options[questions[current].answer]}</span>
          </div>
        </div>
        <div className={styles.navBtns}>
          <button onClick={() => setCurrent(0)} disabled={current === 0}>First</button>
          <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}>Prev</button>
          <button onClick={() => setCurrent(c => Math.min(questions.length - 1, c + 1))} disabled={current === questions.length - 1}>Next</button>
          <button onClick={() => setCurrent(questions.length - 1)} disabled={current === questions.length - 1}>Last</button>
        </div>
      </div>
    );
  }

  // Trang /quiz/review: render đầy đủ
  return (
    <div className={styles.container}>
      {/* Phần 2: Danh sách các câu hỏi dạng card */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 32
      }}>
        {questions.map((q, idx) => (
          <div
            key={q.id}
            onClick={() => setCurrent(idx)}
            style={{
              minWidth: 150,
              background: '#d1fae5',
              border: current === idx ? '2px solid #2563eb' : '1px solid #a7f3d0',
              borderRadius: 8,
              padding: 14,
              cursor: 'pointer',
              boxShadow: current === idx ? '0 2px 8px #2563eb22' : '0 1px 4px #0001'
            }}
          >
            <div style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'underline' }}>
              Question No {idx + 1}
            </div>
            <div style={{ color: '#065f46', fontWeight: 'bold', marginTop: 4 }}>
              {userAnswers[idx] !== null ? 'Answered' : 'Not answered'}
            </div>
          </div>
        ))}
      </div>

      {/* Các nút action */}
      <div className={styles.actionBtns}>
        <button onClick={() => navigate('/quiz')}>Quiz</button>
        <button onClick={() => navigate('/quiz/review')}>Quiz Review</button>
        <button onClick={() => navigate('/quiz/result')}>Submit</button>
      </div>
    </div>
  );
}