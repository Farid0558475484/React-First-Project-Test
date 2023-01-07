import React from "react";
import styles from "./Users.module.scss";

function Users(props) {
  
    if(props.users.lenght === 0) {
        props.setUsers(
            [
            // {  id: 1,photoUrl:"data:image/png;base64,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", followed:true, fullName: "Ferid", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
            //  {  id: 2, followed:false, fullName: "Osman", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
            //  {  id: 3, followed:true, fullName: "Ayxan", status: "I am a boss", location: { city: "Paris", country: "France" } },
            //  {  id: 4, followed:false, fullName: "Elnar", status: "I am a boss", location: { city: "Kiev", country: "Ukraine" } },
            //  {  id: 5, followed:true, fullName: "Rasim", status: "I am a boss", location: { city: "Rim", country: "Italy" } },
 
            ])}


     
            


  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span><div><img className={styles.userPhoto} src={u.photoUrl } alt="logo" /></div>
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
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;
