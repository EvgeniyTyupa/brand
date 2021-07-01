const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE'

let initialState = {
    isFetching: false,
    currentLanguage: "ru"
}

const commonReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_CURRENT_LANGUAGE: {
            return { ...state, currentLanguage: action.currentLanguage }
        }
        default:
            return state
    }
}

export const setIsFetching = (isFetching) => ({
    type: SET_IS_FETCHING, isFetching
})

export const setCurrentLanguage = (currentLanguage) => ({
    type: SET_CURRENT_LANGUAGE, currentLanguage
})

export default commonReducer