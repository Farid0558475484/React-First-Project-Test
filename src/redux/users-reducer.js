const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
            //  {  id: 1, photoUrl:"https://picsum.photos/200/300", followed:true, fullName: "Ferid", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
            //  {  id: 2, photoUrl:"https://picsum.photos/200/300", followed:false, fullName: "Osman", status: "I am a boss", location: { city: "Baku", country: "Azerbaijan" } },
            //  {  id: 3, photoUrl:"https://picsum.photos/200/300", followed:true, fullName: "Ayxan", status: "I am a boss", location: { city: "Paris", country: "France" } },
            //  {  id: 4, photoUrl:"https://picsum.photos/200/300",  followed:false, fullName: "Elnar", status: "I am a boss", location: { city: "Kiev", country: "Ukraine" } },
            //  {  id: 5, photoUrl:"https://picsum.photos/200/300", followed:true, fullName: "Rasim", status: "I am a boss", location: { city: "Rim", country: "Italy" } },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u;
            }
            )
        }

    case UNFOLLOW:
        return{
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            }
            )
        }

    case SET_USERS: 
    return{
        ...state,
        users: [...state.users, ...action.users]

    }

    default:
      return state;
  }
};


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
