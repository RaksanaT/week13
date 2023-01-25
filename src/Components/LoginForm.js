import React from 'react';

export default function LoginForm() {
  return(
  <h3> 
     <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <br></br>
        <button type="submit">Submit</button>
      </div>
     </form>
    </h3>
  )
}
