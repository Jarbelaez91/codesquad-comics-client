import "../App.css";

// import books from "../data/books";
import { useState, useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


function Home() {
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
  fetch(`${API_BASE_URL}/api/books`)
    .then(res => res.json())
    .then(data => {
      setDataBooks(data.data.books); 
    })
    .catch(error => {
      console.error("try again", error);
    });
}, []);

  return (
    <main>
        <div className="codesquad-comics">
          <header>
            <h1 className="comics"> CODESQUAD COMICS </h1>
          </header>

          <p className="about-paragraph">
            CodeSquad Comics is a collection of graphic novels read by Your
            Jeffrey Arbelaez. Copyrighted images are used for review purposes
            only. Meta information about this collection can be found below. A
            detailed list of all the graphic novels in this collection can be
            found on the homepage. Additional details about each comic book
            including the author, genre, number of pages, and a brief synopsis,
            can be found by navigating to the homepage and clicking the image of
            the book cover or the Details link for the desired graphic novel.
          </p>
        </div>

        <div className="middle-container">
          <div className="comics">
            <header>
              <h1>COMPLETE COLLECTION</h1>
            </header>
          </div>

          <div className="comic-cover">
            {dataBooks.map((book) => (
              <div key={book._id} className="comic-cover-space">
                  <img src={`/images/${book.imageUrl}`} alt={book.title} />
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.rating}</p>
                <p>
                  <a href="#" className="detail-link">
                    Details
                  </a>
                </p>
              </div>
            ))}

            <div className="display-more-container">
              <button className="display-more">DISPLAY MORE</button>
            </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
