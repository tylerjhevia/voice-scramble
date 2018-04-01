const player = (state = {}, action: any) => {
  switch (action.type) {
    case 'PLAYER':
      return action.location;
    default:
      return state;
  }
};

export default player;
