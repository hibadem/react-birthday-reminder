import React, { useState } from 'react';

const List = ({people,date}) => { 
  
  return (
    <>
      <h3>Birthday Day</h3>
      {  people.map((person) => {
        const {id,name,age,birthday,image} = person;
        //  if(date.day == birthday.split(".")[0] &&  birthday.split(".")[1].includes(date.month))
          return(
           <article className="person" key={id}>
          <img src={image} alt={name} />
          <div>
              <h4>{name}</h4>
              <p>{age} years</p>
          </div>
          </article>)
         
          
          
        
      })}
      
    </>
  );
};

export default List;
