let user = {
  data:[],
  users:[]
}

users = (state = user, action) => {
  switch (action.type) {
    case 'GET_USERS_SUCCESS':
      //return action.payload;
      return Object.assign({}, state, {
        data: action.payload,
      })
    default:
      return state;
  }
};

export default users;
