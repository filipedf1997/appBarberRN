export const InitialState = {
  avatar: '',
  favorite: [],
  appointments: {}
};

export const UserReducer = (state, action) => {
  switch(action.type){
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
    default:
      return state;
  };
};