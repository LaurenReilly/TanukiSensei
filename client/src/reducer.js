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
    } else if (type === "UPDATE") {
        return {
            ...state,
            firstLesson: firstLesson,
            secondLesson: secondLesson,
            thirdLesson: thirdLesson
        }
    } else {
        return state;
    }
}

export default reducer;