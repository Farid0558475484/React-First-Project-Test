let state = {

  profilePage: {
    
    posts: [
      { message: "Hi,My name Farid///its props", id: 1 },
      { message: "my favorite hobbi is writing code//its props", id: 2 },
      { message: "Marketing, SEO, Veb-sayt", id: 3 },
      { message: "Flegri.az", id: 4 },
    ],
  },

  messagePage: {
    messagesData: [
      { message: "hi", id: 1 },
      { message: "How are you?", id: 2 },
      { message: "Fine", id: 3 },
    ],

    dialogsData: [
      { name: "Ferid", id: 1 },
      { name: "Ayxan", id: 2 },
      { name: "Elnar", id: 3 },
      { name: "Rasim", id: 4 },
      { name: "Casur", id: 5 },
      { name: "Vagif", id: 6 },
      { name: "Nicat", id: 7 },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
  };
  state.profilePage.posts.push(newPost);
  
}

export default state;
