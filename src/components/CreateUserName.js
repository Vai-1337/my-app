import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/createusername.css'

function CreateUsername({onUsernameChange}) {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [isEditing, setIsEditing] = useState(false);

  //   useEffect(() => {
  //     onUsernameChange(username);
  // }, [username, onUsernameChange]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    setIsEditing(false);
    onUsernameChange(username);
  }
    return (
      <>
        {!isEditing ? (
          <div className='create-account'>
          <br />
          {!username && <h2>Username: {username}</h2>}
            
            
            <button className="start4" onClick={() => setIsEditing(true)}>Change username</button>
           
            <Link to="/pokedex" >
          <button className="start5"> START</button>
        </Link>
          </div>
        
        
        ) : (
          
          <form onSubmit={handleSubmit}>
            <label>
             
              <input type="text" value={username} onChange={e => {setUsername(e.target.value)}} />
            </label>
            <input type="submit" value="Save" />
            <button className='cancel' onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
          
        )}
        
      </>
    );
  }
  
  export default CreateUsername;