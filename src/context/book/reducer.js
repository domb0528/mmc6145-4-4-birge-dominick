// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'



// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}

export default function reducer(prevState, {action, payload}) {
  switch (action) {
    case ADD_BOOK:
      saveToLocalStorage([...prevState.favoriteBooks, payload])
      return {...prevState, favoriteBooks:[...prevState.favoriteBooks, payload]}

      case SEARCH_BOOKS:
        return {...prevState, bookSearchResults: payload}

        case REMOVE_BOOK:
          saveToLocalStorage(prevState.favoriteBooks.filter(({id}) => id !== payload));
          return {...prevState, favoriteBooks:prevState.favoriteBooks.filter(({id}) => id !== payload)}
          default:
          return prevState
  }
  }