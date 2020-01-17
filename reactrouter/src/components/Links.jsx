import React from 'react';
import { NavLink as Link} from 'react-router-dom';

function Links() {
  return (
    <ul>
     <li>
        <Link to="/" exact activeStyle={{
          color :"green"
        }}>Home</Link>
      </li>
      <li>
        <Link to="/profile" exact >Profile</Link>
      </li>
      <li>
        <Link to="/profile/1" activeClassName="active">Profile/1</Link>
      </li>
      <li>
        <Link to="/about" isActive={(match,location)=>{
          if(match === null){
            return false;
          }
          console.log(location.search);
          
          return location.search === '';
        }}>About</Link>
      </li>
      <li>
        <Link to="/about?name=mark" isActive={(match,location)=>{
          if(match === null){
            return false;
          }
          return location.search === '?name=mark';
        }}>About?name=mark</Link>
      </li>
    </ul>
  )

}
export default Links;