const loseReducer= (state=0, action)=>{
    switch (action.type){
        case 'lose':
            return state +1;
        case 'reset':
            return state=0;
        default:
            return state;
}
}

export default loseReducer;