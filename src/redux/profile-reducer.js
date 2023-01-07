const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { message: "Hi,My name Farid///its props", id: 1 },
    { message: "my favorite hobbi is writing code//its props", id: 2 },
    { message: "Marketing, SEO, Veb-sayt", id: 3 },
    { message: "Flegri.az", id: 4 },
  ],

  newPostText: "",
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addSignActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profilReducer;
