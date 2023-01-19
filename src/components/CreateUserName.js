import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/createusername.css'

function CreateUsername({onUsernameChange}) {
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', username);
    setIsEditing(false);
    onUsernameChange(username);
  }
    return (
      <div className='create-account'>   
        {!isEditing ? (
          <div >  
          <br />
          {!username && <h2>Username: {username}</h2>}

          <Link to="/pokedex" >
          <button className="start5"> START</button>
          </Link>
          <button className="start4" onClick={() => setIsEditing(true)}>LOG IN</button>
          </div>
        
        
        ) : (
          
          <form onSubmit={handleSubmit}>
            <label>
              <input className="inpUser" type="text" value={username} onChange={e => {setUsername(e.target.value)}} />
            </label>
            <input className="inpUser2" type="submit" value="Save" />
            <button className='cancel' onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
          
        )}
        
      </div>
    );
  }
  
  export default CreateUsername;