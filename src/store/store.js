import { configureStore , createSlice } from '@reduxjs/toolkit';

//import counterReducer from '../features/counterSlice';

// Bài 1
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// }); 

const initalQuestions = [
    {
        id: 1,
        text: 'Inside which HTML element do we put the JavaScript?' ,
        options: ['Javascript', 'scripting', 'sript', 'js'],
        answer: 2, //
    },
    {
        id: 2,
        text: 'What are variables used for in JavaScript Programs?',
        options: [
            'Storing numbers, dates, or other values',
            'Varying randomly',
            'Causing high-school algebra flashbacks',
            'None of these',
        ],
        answer: 0,
    },
    {
        id: 3,
        text: 'Which of the following cant  be done with client-side javascript ? ',
        options: [
            'Validating form',
            'Sending a forms  confents by email',
        ],
        answer: 1,
    }
];


const quizSlice = createSlice({
    name : 'quiz',
    initialState : {
        questions: initalQuestions, // Danh sách câu hỏi
        userAnswers : Array(initalQuestions.length).fill(null), // Đáp án người dùng chọn
        showResult: false, // cập nhật trạng thái là đã nội bài hay chưa !
    },

    reducers: {
        // Lưu đáp án người được chon
        selectAnswer: (state, action) => {
            const { qid , oid } = action.payload;
            state.userAnswers[qid] = oid;
        },

        // Khi người dùng bấm "nộp bài"
        submitQuiz: (state) => {
            state.showResult =  true;
        },

        // Làm lại quiz
        resetQuiz: (state) => {
             state.userAnswers = Array(state.questions.length).fill(null);
             state.showResult = false;
        },
    },
});

// Export các actions để dùng trong component
export const {selectAnswer , submitQuiz , resetQuiz} = quizSlice.actions;

// Tạo store Redux
const store = configureStore({
    reducer: {
        quiz: quizSlice.reducer,
    }
})

export  default  store;













