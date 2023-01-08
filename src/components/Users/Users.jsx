import React from "react";
import styles from "./Users.module.scss";
import * as axios from "axios";
import userPhoto from "./../../img/user.png";

function Users(props) {
    const getUsers = () => {
  
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items);
    });
    }


  return (


    <div>
           < button onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div key={u.id}>
          <span><div><img className={styles.photos} src={u.photos !=null ? u.photos.small : userPhoto } alt="logo" /></div>
            <div>
              {u.followed
                ?(<button onClick={() => {props.unfollow(u.id);}}>Unfollow</button>) 
                 : (<button onClick={() => {props.follow(u.id);}}>Follow</button>)}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div>
              <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
