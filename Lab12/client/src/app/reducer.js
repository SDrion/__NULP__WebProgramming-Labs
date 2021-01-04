export const Reducer = (state = [], { type, payload }) => {
  const index = payload ? state.findIndex(el => el.id === payload.id) : null;
  switch (type) {
    case 'add':
      state.push(payload);
      return [...state];
    case 'remove':
      state.splice(index, 1);
      return [...state];
    case 'deleteAll':
      state.splice(0, state.length);
      return [...state]
    default:
      return state;
  }
}