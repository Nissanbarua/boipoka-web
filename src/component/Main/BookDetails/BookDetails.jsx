import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList } from "../../../Utilitis/AddToDb";
import { addToWishList } from "../../../Utilitis/addToWish";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image } = book;
  const handleRead = (id) => {
    addToReadList(id);
  };
  const handlewish = (id) => {
    addToWishList(id);
  };

  return (
    <div>
      <h2>This is the details of book {bookId} </h2>
      <img className="h-[200px]" src={image} />

      <button
        onClick={() => handleRead(bookId)}
        className="btn  btn-outline btn-accent"
      >
        Read
      </button>
      <button onClick={() => handlewish(bookId)} className="btn btn-active btn-accent">
        WhisList
      </button>
    </div>
  );
};

export default BookDetails;
