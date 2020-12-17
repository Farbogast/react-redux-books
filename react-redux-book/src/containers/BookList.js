import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {GetBookList} from '../actions/bookActions';
import ReactPaginate from "react-paginate";
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const BookList = (props) => {

const [search, setSearch] = useState('')

const dispatch = useDispatch()
const bookList = useSelector(state => state.BookList)

useEffect(() => {
    FetchData(1);
}, [])

const FetchData = (page) => {
    dispatch(GetBookList(page))
}

//const FilterBook = (filter) => {
    //const listOfTitle =[]
    //console.log('list of title', listOfTitle)
    //console.log('search', search)

    //for (let i = 1; i < 20; i++) {
      //listOfTitle.push(bookList.books.[i].book_title)
     // listOfTitle.filter((filter) => filter.includes`${search}`)

    //}

//}

const ShowData = () => {

    if (bookList.loading) {
        return <div className='loading'><p>Loading..</p> <CircularProgress size={200}/></div>
    }

    if (!_.isEmpty(bookList.books)) {

        console.log('booklist',bookList)
        console.log('props', props)

        return(
            <div className='list-wrapper'>
            {bookList.books.map(el =>{
            return (<div className='book-item'>
                <p>{el.book_title}</p>
                <p>{el.book_author}</p>
            </div>)
            })}
        </div>  
        ) 
        }

    if(bookList.errorMsg !== ''){
        return <p>{bookList.errorMsg}</p>
    }

    return <p>Unable to get data</p>
}

return(
    <div>
        <div className='search-wrapper'>
            
        <div className='search-wrapper'>
            <p>Search:</p>
            <input type='text' onChange={e => setSearch(e.target.value)}/>
            <Button variant="contained" color="primary" /*onClick={FilterBook()}*/ >Search</Button> 
        </div>
          
        </div>
        {ShowData()}
        {!_.isEmpty(bookList.books) && (
            <ReactPaginate 
                pageCount={Math.ceil(bookList.count/20)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={(data) => FetchData(data.selected + 1)}
                containerClassName={"pagination"}
            />)}
    </div>
    
    )
};

export default BookList;