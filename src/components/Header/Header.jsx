import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../QuizReview/QuizReview.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}