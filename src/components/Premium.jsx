import React from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Premium() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://mindshelf-mlds.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  });
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 grid">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          All premium books <span className="text-pink-400">here!</span>{" "}
        </h1>
        <p className="mt-12">
          You’ve just unlocked a curated world of books, crafted for passionate
          readers like you.This is where knowledge meets exclusivity.
          <br />
          From thought-provoking non-fiction to immersive fiction, you’ll find
          reads that challenge, comfort, and captivate — without distraction,
          without limits.In the Premium Section, discover bestsellers, early
          releases, exclusive collections, and hidden literary gems — all at
          your fingertips. Dive deeper into stories that stay with you.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Premium;
