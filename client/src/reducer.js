let initalState = {
    username: "",
    firstLesson: 0,
    secondLesson: 0,
    thirdLesson: 0,
}

let reducer = (state = initalState, action) => {
    let {type, username, firstLesson, secondLesson, thirdLesson} = action;
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
            firstLesson: state.firstLesson +1,
        }
    } else if (type === "UPDATE_SECOND") {
        return {
            ...state,
            secondLesson: state.secondLesson +1,
        }
    } else if (type === "UPDATE_THIRD") {
        return {
            ...state,
            thirdLesson: state.thirdLesson +1
        }
    } else if (type === "LOG_OUT") {
        return {
            ...state,
            username: "",
            firstLesson: 0,
            secondLesson: 0,
            thirdLesson: 0,
        }
    } else {
        return state;
    }
}

export default reducer;