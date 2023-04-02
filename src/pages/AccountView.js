import { React, useEffect, useState } from 'react';


const base_url = 'http://localhost:9002';
function AccountView(props){
  
    return (

  <div className='accountView'>
   {(Object.keys(account)).map(key =>
    <h1>{key} : {account[key]} </h1>

      )}
      <button className='pin-btn'>Change Pin</button>
      </div>
    );
   }
export default AccountView;