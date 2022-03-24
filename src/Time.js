// import React from 'react'

// export default function Time() {

  

//         var showDate = new Date()
//         var dt=showDate.toDateString()
//         var displayTime=showDate.getHours()+'/'+showDate.getMinutes()+'/'+showDate.getSeconds();
    
//   return (
//     <div>Time

//      <input type="text" value={displayTime} readOnly="true"/>
        
//         {displayTime}
      
//     </div>
//   )

// }



// import React from 'react';

// import './App.css';

// function Time () {
//     const currentTime =new Date().toLocaleString();
  
  
//     return (
//       <div className="App">
//         <p>Current Date And Time : {currentTime}</p>
//       </div>
//     );
//   }


// export default Time;




import React,{useEffect,useState} from 'react';

import './App.css';
 
 function Time ()  {
 
    const [set,setState]=useState({curTime: ""

    })
 const {curTime}=set
    useEffect(() => {
        getTime();
      }, []);
 

  
 
  const getTime = () => {
    var today = new Date(),
 
    curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
 
 
    setState({curTime });
  };
 
 
    return (
      <div className="App">
        <p>Current Time : {curTime}</p>
      </div>
    );
  }

 
export default Time;