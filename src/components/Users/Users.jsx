import React from "react";
import styles from "./Users.module.scss";
import axios from "axios";
import userPhoto from "./../../img/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios //получаем данные с сервера
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        //получаем ответ от сервера
        this.props.setUsers(response.data.items); //передаем в пропсы массив пользователей
      }); //получаем данные с сервера

      
  }
  
onChangePage (pageNumber) {
  this.props.setCurrentPage(pageNumber); //передаем в пропсы номер страницы
  axios
  .get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`

  )
  .then((response) => {
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount)
  });
}

  render() {
    // debugger;
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize //округляем в большую сторону
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i); //заполняем массив pages числами от 1 до pagesCount
    }
    if(pages.length > 10) {
      pages = pages.slice(this.props.currentPage -1, this.props.currentPage + 9)
    }


    return (
      <div>
        <div className={styles.itemCount}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {this.onChangePage(p);}}>{p}
              </span>
            );
          })}
        </div>

        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
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
  }
}

export default Users;
