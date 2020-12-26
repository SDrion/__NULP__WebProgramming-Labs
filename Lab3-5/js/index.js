const localhsot = 'http://localhost:3000/book/';

const getUrl = `${localhsot}get_books`;
const postUrl = `${localhsot}add_book`;
const putUrl = `${localhsot}update_book`;
const deleteUrl = (book_id) => { return `${localhsot}remove_book/${book_id}` };

const booksStorage = document.getElementById('books_storage');
const countButton = document.getElementById('count_button');
const totalPages = document.getElementById('total_pages');
const sortSwitch = document.getElementById('sort_switch');
const searchInput = document.getElementById('search_input');
const searchButton = document.getElementById('search_button');
const clearSearchButton = document.getElementById('clear_search_button');
const modal = document.getElementById('modal');
const headerAdd = document.getElementById('header_add');
const addBookBtn = document.getElementById('add_book_button');
const updBookBtn = document.getElementById('update_book_button');
const cancelAddBookBtn = document.getElementById('cancel_adding');

window.onload = getData();


async function getData() {
  totalPages.classList.remove('active');
  if (sortSwitch.classList.contains('active')) {
    let books;
    const response = await fetch(getUrl)
      .then(res => res.json())
      .then(data => books = data)
      .then(async () => {
        books.sort(function (a, b) {
          return a.price - b.price;
        });
        await insertBook(books)
        bindBookButtons();
      });
  } else {
    let books;
    const response = await fetch(getUrl)
      .then(res => res.json())
      .then(data => books = data)
      .then(async () => {
        await insertBook(books);
        bindBookButtons();
      });
  }

}

countButton.onclick = async () => {
  let books;
  const response = await fetch(getUrl)
    .then(res => res.json())
    .then(data => books = data)
    .then(() => {
      let pages = 0;
      books.map(book => { pages += book.pages });
      if (!(totalPages.classList.contains('active'))) {
        totalPages.classList.add('active');
        totalPages.innerText = 'Total pages: ' + pages;
      } else {
        return;
      }
    });
}

sortSwitch.onclick = async () => {
  if (!(sortSwitch.classList.contains('active'))) {
    sortSwitch.classList.add('active');
  } else {
    sortSwitch.classList.remove('active');
  }

  getData();
}



function bindBookButtons() {
  const removeButtons = document.getElementsByClassName('remove_button');
  const editButtons = document.getElementsByClassName('edit_button');

  for (let i = 0; i < removeButtons.length; i++) {
    const bookId = removeButtons[i].parentElement.parentElement.id;
    removeButtons[i].addEventListener('click', async () => {
      await fetch(deleteUrl(bookId), {
        method: 'DELETE',
      }).then(() => { getData(); })
    })
  }

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
      modal.style.display = 'block';
      addBookBtn.style.display = 'none';
      updBookBtn.style.display = 'inline';
      updBookBtn.onclick = async () => {
        const bookFields = document.getElementsByClassName('modal_input');
        const bookToUpdate = {
          id: editButtons[i].parentElement.parentElement.id,
          title: bookFields[0].value,
          description: bookFields[1].value,
          autor: bookFields[2].value,
          pages: bookFields[3].value,
          price: bookFields[4].value
        };

        await fetch(putUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(bookToUpdate)
        }).then(() => {
          getData();
          modal.style.display = 'none';
          for (let i = 0; i < bookFields.length; i++) { bookFields[i].value = ''; }
        });
      }
    })
  }
}

function insertBook(books) {
  while (booksStorage.lastElementChild) {
    booksStorage.removeChild(booksStorage.lastElementChild);
  }
  books.map(book => {
    booksStorage.insertAdjacentHTML(
      'afterbegin',
      `<div id=${book.id} class="book">
          <img src="./image/book.png" alt="book image">
          <div class="book_description">
            <span>${book.title}</span>
            <p>${book.description}.<br>Price: <b>${book.price}</b><br>Pages: <b>${book.pages}</b></p>
          </div>
          <div class="book_editing">
            <button class="edit_button">Edit</button>
            <button class="remove_button">Remove book</button>
          </div>
        </div>`
    )
  })
}

searchButton.onclick = async () => {
  const filterKey = searchInput.value;
  let books;
  const response = await fetch(getUrl)
    .then(res => res.json())
    .then(data => books = data)
    .then(async () => {
      books = books.filter(book => { return book.title == filterKey });
      await insertBook(books);
      bindBookButtons();
    });
}

addBookBtn.onclick = async () => {

  const bookFields = document.getElementsByClassName('modal_input');
  const newBook = {
    title: bookFields[0].value,
    description: bookFields[1].value,
    author: bookFields[2].value,
    pages: Number(bookFields[3].value),
    price: Number(bookFields[4].value)
  }

  await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(newBook)
  }).then(() => {
    getData();
    for (let i = 0; i < bookFields.length; i++) { bookFields[i].value = ''; }
    modal.style.display = 'none';
  });
}

clearSearchButton.onclick = () => {
  searchInput.value = '';
  getData();
}

headerAdd.onclick = () => {
  updBookBtn.style.display = 'none';
  addBookBtn.style.display = 'inline';
  modal.style.display = 'block';
}


cancelAddBookBtn.onclick = () => {
  modal.style.display = 'none';
}


window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = none;
  }
}