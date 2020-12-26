export const Reducer = (state = [], { type, payload }) => {
  const index = state.findIndex(el => el.id === payload.id);
  switch (type) {
    case 'add':
      state.push(payload);
      return [...state];
    case 'remove':
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
}