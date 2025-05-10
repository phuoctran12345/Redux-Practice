import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Quiz from './components/Quiz/Quiz';
import QuizReview from './components/QuizReview/QuizReview';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner title="Home" />
            <div style={{textAlign: 'center'}}>Chào mừng bạn đến với trang chủ!</div>
          </>
        } />
        <Route path="/about" element={
          <>
            <Banner title="About" />
            <div style={{textAlign: 'center'}}>Giới thiệu về chúng tôi.</div>
          </>
        } />
        <Route path="/news" element={
          <>
            <Banner title="News" />
            <div style={{textAlign: 'center'}}>Tin tức mới nhất.</div>
          </>
        } />
        <Route path="/quiz" element={
          <>
            <Banner title="JavaScript Quiz" />
            <Quiz />
          </>
        } />
        <Route path="/quiz/review" element={
          <>
            <Banner title="Quiz Review" />
            <QuizReview />
          </>
        } />
        <Route path="/quiz/result" element={
          <>
            <Banner title="Quiz Review" />
            <QuizReview />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Banner title="Contact" />
            <div style={{textAlign: 'center'}}>Liên hệ với chúng tôi.</div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;