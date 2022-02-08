import {useSelector} from 'react-redux';

function Wyniki(){

    const draw=useSelector(state=>state.draw);
    const lose=useSelector(state=>state.lose);
    const winn=useSelector(state=>state.winn);
    const choice=useSelector(state=>state.choice);

    return(
      
        <div className='wyniki'>
       <div className='wybor'>
            <p>Wybór przeciwnika: <span>{choice}</span></p>
        </div>
   <div>
     <p>Wygrane:</p>
     <p>Remisy:</p>
     <p>Przegrane:</p>
   </div>
   <div className='licznik'>
     <p>{winn} </p>
     <p>{draw}</p>
     <p>{lose}</p>
   </div>
   </div>
    )
}

export default Wyniki;

