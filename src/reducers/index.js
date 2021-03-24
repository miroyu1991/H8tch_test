import { actionType } from "../actions/index";

const defaultState = {
    columnOne: [],
    columnTwo: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.addItem: 
            if(action.col === '1'){
                const newArr = [...state.columnOne, action.item]
                return {...state, columnOne: newArr};
            }else if(action.col === '2'){
                const newArr = [...state.columnTwo, action.item]
                return {...state, columnTwo: newArr};
            }
            
        case actionType.removeItem:
            if(action.col === '1'){
                const newArr = [...state.columnOne]
                newArr.splice(action.index, 1)
                return {...state, columnOne: newArr};
            }else if(action.col === '2'){
                const newArr = [...state.columnTwo]
                newArr.splice(action.index, 1)
                return {...state, columnTwo: newArr};
            }
            return defaultState;
        default:
            return state;
    }

}

export default reducer