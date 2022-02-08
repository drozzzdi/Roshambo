import React from 'react';
import { useDispatch } from 'react-redux';
import { winn } from '../actions';
import { draw } from '../actions';
import { lose } from '../actions';
import {choice} from '../actions';
import {useSelector} from 'react-redux';

function Rozgrywka(props){

  const opponentsChoice=useSelector(state=>state.choice);
  const dispatch=useDispatch();

   const papierClick=()=>{
     dispatch(choice());

        if(opponentsChoice=='papier'){
           dispatch(draw());
        } 
        else if(opponentsChoice=='kamien'){
           dispatch(winn());
        }
        else{
           dispatch(lose());
        } 
    }
    
    const kamienClick=()=>{
     dispatch(choice());

        if(opponentsChoice=='kamien'){
          dispatch(draw());
        } 
        else if(opponentsChoice=='nozyce'){
          dispatch(winn());
        }
        else{
          dispatch(lose());
        }
    }

    const nozyceClick=()=>{
      dispatch(choice());

        if(opponentsChoice=='nozyce'){
           dispatch(draw());
        } 
        else if(opponentsChoice=='papier'){
           dispatch(winn());
        }
        else{
           dispatch(lose());
        }
    }

    return(
    <>
      
        <div className='rozgrywka'>

        <div className='papier'
        onClick={papierClick}></div>

        <div className='kamien'
        onClick={kamienClick}></div>

        <div className='nozyce'
        onClick={nozyceClick}></div>

        </div>
    </>
    );
}

export default Rozgrywka;