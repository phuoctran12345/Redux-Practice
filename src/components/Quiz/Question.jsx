import React from 'react';
import AnswerOption from './AnswerOption';

// Hiển thị 1 câu hỏi và các đáp án
export default function Question({
  qid, text, options, answer, userAnswer, showResult, onSelect
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div>
        <b>Q{qid + 1}. {text}</b>
      </div>
      <div>
        {options.map((opt, oid) => (
          <AnswerOption
            key={oid}
            text={opt}
            selected={userAnswer === oid}
            correct={showResult && answer === oid}
            showResult={showResult}
            onClick={() => onSelect(oid)}
          />
        ))}
      </div>
      {showResult && (
        <div>
          {userAnswer === answer ? (
            <span style={{ color: 'green' }}>Đúng!</span>
          ) : (
            <span style={{ color: 'red' }}>
              Sai! Đáp án đúng: <b>{options[answer]}</b>
            </span>
          )}
        </div>
      )}
    </div>
  );
} 