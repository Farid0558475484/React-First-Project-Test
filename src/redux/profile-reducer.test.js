// import profilReducer from "./profile-reducer";
// import { addSignActionCreator } from "./profile-reducer";

// it("length of posts should be incremented", () => {
//   // 1. test data
//   let action = addSignActionCreator("it-kamasutra.com");

//   let state = {
//     posts: [
//       { id: 1, message: "Hi, how are you?", likesCount: 12 },
//       { id: 2, message: "It's my first post", likesCount: 11 },
//       { id: 3, message: "Blabla", likesCount: 11 },
//       { id: 4, message: "Dada", likesCount: 11 },
//     ],
//   };


//   // 2. action
//   let newState = profilReducer(state, action);
//   // 3. expectation
//   expect(newState.posts.length).toBe(5);
// });

// it("message of new post should be correct", () => {
//   // 1. test data
//   let action = addSignActionCreator("it-kamasutra.com");
//   // 2. action
//   let newState = profilReducer(state, action);
//   // 3. expectation
//   expect(newState.posts[2].message).toBe("it-kamasutra.com");
// });

// it("after deleting length of messages should be decrement", () => {
//   // 1. test data
//   let action = deletePost(1);
//   // 2. action
//   let newState = profilReducer(state, action);
//   // 3. expectation
//   expect(newState.posts.length).toBe(1);
// });
