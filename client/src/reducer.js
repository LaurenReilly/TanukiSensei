let initalState = {
    username: "",
    firstLesson: 0,
    secondLesson: 0,
    thirdLesson: 0,
    lesson: "",
    array: [],
    complete: false,
    questionsAnswered: 0,
    currentWord: {},
    userAnswer: "",
    correct: "",
    showCheck: true,
    score: 0
}

let reducer = (state = initalState, action) => {
    let {type, username, firstLesson, secondLesson, thirdLesson, lesson, array, grade, score, currentWord} = action;
    if (type === "LOGIN") {
        return {
            ...state,
            username: username,
            firstLesson: firstLesson,
            secondLesson: secondLesson,
            thirdLesson: thirdLesson
        }
    } else if (type === "UPDATE_FIRST") {
        return {
            ...state,
            firstLesson: score
        }
    } else if (type === "UPDATE_SECOND") {
        return {
            ...state,
            secondLesson: score
        }
    } else if (type === "UPDATE_THIRD") {
        return {
            ...state,
            thirdLesson: score
        }
    } else if (type === "LOG_OUT") {
        return {
            ...state,
            username: "",
            firstLesson: 0,
            secondLesson: 0,
            thirdLesson: 0,
            lesson: "",
            array: [],
            complete: false,
            questionsAnswered: 0,
            currentWord: {},
            userAnswer: "",
            correct: "",
            showCheck: true,
            score: 0
        }
    } else if (type === "LEARN") {
        return {
            ...state,
            lesson: lesson,
            array: array
        }
    } else if (type === "PRACTICE") {
        return {
            ...state,
            lesson: lesson,
            array: array
        }
    } 
    else if (type === "NEXT") {
        return {
            ...state,
            currentWord: currentWord,
            array: array,
            showCheck: true,
            correct: "",
            userAnswer: ""
        }
    } else if (type === "CHECK") {
        return {
            ...state, 
            questionsAnswered: state.questionsAnswered +1,
            showCheck: false,
            correct: grade,
            score: state.score + score
        }
    } else if (type === "COMPLETE") {
        return {
            ...state,
            complete: true
        }
    } else if (type === "RESET") {
        return {
            ...state,
            complete: false,
            questionsAnswered: 0,
            currentWord: {},
            userAnswer: "",
            correct: "",
            showCheck: true,
            score: 0
        }
    } else {
        return state;
    }
}

export default reducer;