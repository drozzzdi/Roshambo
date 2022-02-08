import redux from 'redux';

const winnReducer=(state=0,action)=>{
    switch (action.type){
        case 'winn':
            return state +1;
        case 'reset':
            return state=0;
        default:
            return state;
    }
}

export default winnReducer;
