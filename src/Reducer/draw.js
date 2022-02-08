const drawReducer= (state=0, action)=>{
    switch (action.type){
        case 'draw':
            return state +1;
        case 'reset':
            return state=0;
        default:
            return state;
}
}

export default drawReducer;