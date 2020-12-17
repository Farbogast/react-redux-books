const DefaultState = {
    loading:false,
    data:[],
    errorMsg: '',
    count:0,
    books:[]
};

const BookListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case 'BOOK_LIST_LOADING': 
        return {
            ...state,
            loading:true,
            errorMsg: ''
        };

        case 'BOOK_LIST_FAIL':
        return {
            ...state,
            loading:false,
            errorMsg: 'Unable to get books'
        }

        case 'BOOK_LIST_SUCCESS' : 
        return {
            ...state,
            loading:false,
            data:action.payload,
            errorMsg: '',
            count: action.payload.data.count,
            books: action.payload.data.books
        }

        default: 
        return state
    }

}

export default BookListReducer;