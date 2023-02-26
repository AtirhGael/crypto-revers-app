import * as tabActionType from './tabActions'

const initialState = {
    isTradeModelVisibility:false
}

const tabReducer = (state = initialState, action)=>{
    switch(action.type){
        case tabActionType.SET_TRADE_MODEL_VISIBILITY:
            return{
                ...state,
                isTradeModelVisibility:action.payload.isVisible
            }
        default:
            return state
    }
}

export default tabReducer;