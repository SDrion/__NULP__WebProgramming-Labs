export const addBook = (payload) => {
  return {
    type: 'add',
    payload,
  };
}

export const removeBook = (payload) => {
  return {
    type: 'remove',
    payload,
  };
}

export const deleteAll = () => {
  return {
    type: 'deleteAll'
  }
}