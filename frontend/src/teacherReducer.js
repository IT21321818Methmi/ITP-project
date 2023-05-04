export const INITIAL_STATE = {
    loading: false,
    teachers: {},
    error: false,
};


export const teacherReducer = (state, action) => {
    switch(action.type) {
        case "FETCH_START":
            return{
                loading: true,
                error: false,
                teachers: {},
            };
        case "FETCH_SUCCESS":
            return{
                ...state,
                loading: false,
                error: false,
                teachers: action.payload,
            };
        case "FETCH_ERROR":
            return{
                error: false,
                loading: false,
                teachers: {},
            }
            default:
                return state;
    }
    
};