import axios from 'axios';

const fetchUrl = (path) => { return `http://159.89.27.216:8081/${path}` };

export const getAllBooks = async () => {
  return await axios.get(fetchUrl('book/allBooks'))
      .then(response => {
        return response.data;
      })
}

export const addBook = async (
  title,
  author,
  description,
  pages,
  price
) => {
  return await axios.post(fetchUrl('book/addBook'), {
    title,
    author,
    description,
    pages,
    price
  }).then(response => {
    return response.data;
  })
}

export const getBookById = async (bookId) => {
  return await axios.get(fetchUrl(`book/bookById/${bookId}`))
      .then(response => {
        return response.data;
      })
}

export const filterBooksByPrice = async (
  priceFrom,
  priceTo
) => {
  return await axios.get(fetchUrl(`book/bookByPrice/${priceFrom}/${priceTo}`))
      .then(response => {
        return response.data;
      })
}

export const searchBook = async (searchKey) => {
  return await axios.get(fetchUrl(`book/bookSearch/${searchKey}`))
      .then(response => {
        return response.data;
      })
}

export const getAllClients = async () => {
  return await axios.get(fetchUrl('client/allClients'))
      .then((response) => {
        return response.data;
      })
}

export const addClient = async (
  first_name,
  last_name,
  email,
  phone_number,
  address
) => {
  return await axios.post(fetchUrl('client/addClient'), {
    first_name,
    last_name,
    email,
    phone_number,
    address
  }).then(response => {
    return response.data;
  })
}

export const getAllOrders = async () => {
  return await axios.get(fetchUrl('order/allOrders'))
      .then(response => {
        return response.data;
      })
}

export const getOrderById = async (orderId) => {
  return await axios.get(fetchUrl(`orderById/${orderId}`))
      .then(response => {
        return response.data;
      })
}

export const getOrdersByClientId = async (clientId) => {
  return await axios.get(fetchUrl(`ordersByClientId/${clientId}`))
      .then(response => {
        return response.data;
      })
}

export const placeOrder = async (
  clientId,
  totalPrice,
  books
) => {
  return await axios.post(fetchUrl('order/placeOrder'), {
    clientId,
    totalPrice,
    books
  }).then(response => {
    return response.data;
  })
}