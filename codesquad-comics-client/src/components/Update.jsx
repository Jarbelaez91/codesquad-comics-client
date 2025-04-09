import books from "../data/books";
import { useState, useEffect } from "react";

function Update() {
  const id = 1;

  const [book, setBook] = useState({});

  useEffect(() => {
    const bookFound = books.find((b) => b.id === id);
    setBook(bookFound);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "form was submitted",
      e.target.title.value,
      e.target.author.value,
      e.target.publisher.value,
      e.target.synopsis.value,
      e.target.genre.value,
      e.target.rating.value,
      e.target.pages.value
    );
  };

  return (
    <main>
      <div className="middle-container">
        <div className="comics">
          <header>
            <h1 className="comics">UPDATE COMICS</h1>
          </header>
        </div>

        <form onSubmit={handleSubmit} className="form-alignment">
          <div className="form-lines">
            <label className="labels" htmlFor="title">
              {" "}
              Title
            </label>
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>
          <div className="form-lines">
            <label className="labels" htmlFor="author">
              {" "}
              Author
            </label>
            <input type="text" name="author" id="author" placeholder="Author" />
          </div>
          <div className="form-lines">
            <label className="labels" htmlFor="publisher">
              Publisher
            </label>
            <select name="publisher" id="publisher" placeholder="publisher">
              <option value="boom-box">BOOM! Box</option>
              <option value="dc-comics">DC Comics</option>
              <option value="harry-n-abrams">Harry N. Abrams</option>
              <option value="icon-books">Icon Books</option>
              <option value="image-comics">Image Comics</option>
              <option value="marvel">Marvel</option>
              <option value="simon-schuster">Simon & Schuster</option>
              <option value="top-shelf-productions">
                Top Shelf Productions
              </option>
              <option value="viz-media-llc">VIZ Media LLC</option>
            </select>
          </div>
          <div className="form-lines">
            <label className="labels" htmlFor="genre">
              {" "}
              Genre
            </label>
            <input type="text" name="genre" id="genre" placeholder="Genre" />
          </div>
          <div className="form-lines">
            <label className="labels" htmlFor="pages">
              {" "}
              Number of Pages
            </label>
            <input
              type="number"
              name="pages"
              id="pages"
              placeholder="number of pages"
            />
          </div>
          <div className="form-lines">
            <label className="labels" htmlFor="rating">
              {" "}
              Rating
            </label>
            <input type="number" name="rating" id="rating" />
          </div>

          <div className="form-lines">
            <label className="labels" htmlFor="multi-line-text">
              Synopsis
            </label>
            <textarea
              id="multi-line-text"
              placeholder="Synopsis"
              name="synopsis"
            ></textarea>
          </div>
          <div className="submit-button-container">
            <div className="submit-button-div">
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Update;
