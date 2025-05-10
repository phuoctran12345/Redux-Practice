import React from 'react';

// Hiển thị 1 đáp án
export default function AnswerOption({ text, selected, correct, showResult, onClick }) {
  return (
    <button
      style={{
        margin: 5,
        background: selected ? '#90cdf4' : '#e2e8f0',
        border: showResult && correct ? '2px solid green' : '1px solid #cbd5e1',
        color: showResult && selected && !correct ? 'red' : 'black',
        padding: '8px 16px',
        borderRadius: 5,
        cursor: showResult ? 'not-allowed' : 'pointer',
      }}
      disabled={showResult}
      onClick={onClick}
    >
      {text}
    </button>
  );
} 