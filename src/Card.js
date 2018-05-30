import React from 'react';
const Card = ({id,name,email}) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
   <img src={`http://robohash.org/${id}?200×200`} alt="robohash"/>
   <div>
     <p>{name}</p>
     <p>{email}</p>
   </div>
      </div>
    );
  }


export default Card;
