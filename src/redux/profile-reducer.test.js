import profilReducer from "./profile-reducer";
import { addSignActionCreator } from "./profile-reducer";

// it("length of posts should be incremented", () => {
//   // 1. test data
//   let action = addSignActionCreator("it-kamasutra.com");
//   // 2. action
//   let newState = profilReducer(state, action);
//   // 3. expectation
//   expect(newState.posts.length).toBe(3);
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
