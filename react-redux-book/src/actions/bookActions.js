import axios from 'axios'


export const GetBookList = (page) => async dispatch =>{
    try {
        dispatch({
            type: 'BOOK_LIST_LOADING'
        });
       

        const url = `http://nyx.vima.ekt.gr:3000/api/books?page=${page}`
        const res = await axios.post(url)

        console.log('res',res)
        console.log('books',res.data.books)

        dispatch({
            type:'BOOK_LIST_SUCCESS',
            payload: res
        })
    } catch(e){
        dispatch({
            type:'BOOK_LIST_FAIL'

        })
    }
};