import React from "react";
import styles from "./Users.module.scss";
import userPhoto from "./../../img/user.png";



const Users = (props) => {
    let pagesCount = Math.ceil(
        props.totalUsersCount / props.pageSize //округляем в большую сторону
      );
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); //заполняем массив pages числами от 1 до pagesCount
      }
  
      if(pages.length > 10) {
        pages = pages.slice(props.currentPage -1, props.currentPage + 9)
      }

      return (
        
        <div>
          
          <div className={styles.itemCount}>
            
            {pages.map((p) => {
              return (
                
                <span
                  key={p}
                  className={props.currentPage === p ? styles.selectedPage : ''}
                  onClick={(e) => {props.onChangePage(p);}}>{p}
                </span>
              );
            })}
          </div>
  
          {props.users.map((u) => (
            <div key={u.id}>
              <span>
                <div>
                  <img
                    className={styles.photos}
                    src={u.photos.small != null ? u.photos.small : userPhoto} //если фото есть, то выводим его, если нет, то выводим userPhoto
                    alt="logo"
                  />
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                       props.unfollow(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                      props.follow(u.id)  ;
                      }} 
                    >
                      Follow
                    </button >
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
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
    
};

export default Users;
