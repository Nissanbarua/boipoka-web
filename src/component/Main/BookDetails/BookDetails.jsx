import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
const {bookId} = useParams()
console.log(bookId)

          return (
                    <div>
                             <h2>This is the details of book {bookId} </h2>
                    </div>
          );
};

export default BookDetails;