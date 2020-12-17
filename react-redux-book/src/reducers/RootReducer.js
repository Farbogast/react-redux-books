import {combineReducers} from 'redux';
import BookListReducer from './BookListReducer'

const RootReducer = combineReducers({
    BookList: BookListReducer
})

export default RootReducer;