const opcje=['papier', 'kamien', 'nozyce'];

const choiceReducer=(state=0,action)=>{
    switch (action.type){
        case 'choice':
            return state=opcje[Math.floor(Math.random()*(3-1+1))];
        case 'reset':
            return state='';
        default:
            return state;
    }
}

export default choiceReducer;