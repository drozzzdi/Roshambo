import { useDispatch } from 'react-redux';
import {reset} from '../actions'

function Reset(){

    const dispatch=useDispatch();

    return(
        <button
        onClick={()=>dispatch(reset())}>
            Resetuj
        </button>  
    );
}

export default Reset;