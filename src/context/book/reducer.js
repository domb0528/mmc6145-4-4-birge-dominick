// TODO: import actions and implement reducer for each action

import { useReducer } from 'react'
export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const SEARCH_BOOKS = 'SEARCH_BOOKS'


export default function reducer(prevState, {action, payload}) {
    switch(action) {
    case ADD_BOOK:
      saveToLocalStorage([...prevState.favoriteBooks, payload]);
      return {...prevState, favoriteBooks:[...prevState.favoriteBooks, payload] }
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: payload }
    case REMOVE_BOOK:
      saveToLocalStorage(prevState.favoriteBooks.filter(({id}) => id !== payload));
      return {...prevState, favoriteBooks:prevState.favoriteBooks.filter(({id}) => id !== payload)}
    default:
      return prevState 
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}