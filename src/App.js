import React, { useEffect, useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  const [date,setDate] = useState({});
    
      useEffect(()=> {
        const today = new Date();
       setDate({day: today.getDate(), month: today.getMonth()+1 })
      },[date])
  
 
  return (
    <main>
      <section className="container">
      
        <List people={people} date={date}/>
        <button onClick={()=>setPeople([])}>
          Clear All
        </button>
        
      </section>
        
    </main>
  );
}

export default App;
