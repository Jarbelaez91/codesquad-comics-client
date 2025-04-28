import books from "../data/books";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";




function Update() {
  const navigate = useNavigate();

  const { bookId } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch (`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}`)
      .then((res) => res.json())
      .then ((result) => {
        console.log("success", result)
        setBook(result)
    })
    .catch((error) => {
      console.error("try again", error)
    })
  }, [bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body= { 
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      synopsis: e.target.synopsis.value,
      genre: e.target.genre.value,
      rating: e.target.rating.value,
      pages: e.target.pages.value
  };
  fetch(
    "https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((result) => {
      console.log("form submitted 2", result);
      setBook(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/admin");
    })
    .catch((error) => console.log("try again", error));
};

  return (
    <main>
      <div style={{border: "5px solid var(--blue)",
  backgroundPosition: "center center",
  margin: "10vh auto",
  height: "10%",
  width: "70%",
  backgroundColor: "var(--white)",
  padding: "5px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"}}>
        <div style={{
    textAlign: 'center',
    color: 'var(--blue)',
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    width: '100%',
  }}>
          <header>
            <h1 style={{
    textAlign: 'center',
    color: 'var(--blue)',
    display: 'flex',
    justifyContent: 'center',
    height: '15%',
    width: '100%',
  }}>UPDATE COMICS</h1>
          </header>
        </div>

        <form onSubmit={handleSubmit} className="form-alignment">
          <div style={{ marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
            <label className="labels" htmlFor="title">
              {" "}
              Title
            </label>
            <input type="text" name="title" id="title" placeholder="Title" />
          </div>
          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
            <label className="labels" htmlFor="author">
              {" "}
              Author
            </label>
            <input type="text" name="author" id="author" placeholder="Author" />
          </div>
          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
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
          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
            <label className="labels" htmlFor="genre">
              {" "}
              Genre
            </label>
            <input type="text" name="genre" id="genre" placeholder="Genre" />
          </div>
          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
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
          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
            <label className="labels" htmlFor="rating">
              {" "}
              Rating
            </label>
            <input type="number" name="rating" id="rating" />
          </div>

          <div style={{marginBottom: "15px",
  width: "100%",
  display: "flex",
  justifyContent: "center"}}>
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
