import books from "../data/books";
import { useState, useEffect } from "react";

function Home() {
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    setDataBooks(books);
  }, []);

  return (
    <main>
      <div>
        <a href="index.html">
          <div className="logo-container">
            <img
              className="logo-image"
              src="./Public/images/CodeSquad-Comics-logo.png"
              alt="Home"
            />
            <nav>
              <div>
                <i className="fa-solid fa-bars hamburger-menu"></i>
                <ul className="nav-links">
                  <li className="link-li">
                    {" "}
                    <a href="#"> Home </a>{" "}
                  </li>
                  <li className="link-li">
                    <a href="#"> About</a>
                  </li>
                  <li className="link-li">
                    <a href="#"> Login</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </a>
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
            {books.map((book) => (
              <div key={book.id} className="comic-cover-space">
                <a href="#">
                  <img src={`/images/${book.imageUrl}`} alt={book.title} />
                </a>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.rating}</p>
                <p>
                  <a href="#" className="detail-link">
                    {" "}
                    Details{" "}
                  </a>
                </p>
              </div>
            ))}

            {/* <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/watchmen.jpg" alt="watchmen"/> </a>
        <p>Watchmen</p>
        <p>By Alan Moore</p>
        <p>5 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>
        
        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/hunter-x-hunter.jpg" alt="hunter-x-hunter"/> </a>
        <p>Hunter X Hunter Vol 1</p>
        <p>By Yoshihiro Togashi</p>
        <p>5 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>


        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/lumberjanes.jpg" alt="lumberjanes"/> </a>
        <p>Lumberjanes Vol. 1</p>
        <p>By Noelle Stevenson</p>
        <p>4 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/one-piece.jpg" alt="one-piece"/> </a>
        <p>One Piece, Vol. 1: Romance Dawn</p>
        <p>By Eiichiro Oda</p>
        <p>5 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>


        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/wake.jpg" alt="wake" /> </a>
        <p>Wake: The Hidden History of Women-Led Slave Revolts</p>
        <p>By Rebecca Hall</p>
        <p>4 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/black-panther.jpg" alt="black-panther"/> </a>
        <p>Black Panther: A Nation Under Our Feet Book 1</p>
        <p>By Ta-Nehisi Coates</p>
        <p>3 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/the-walking-dead.jpg" alt="the-walking-dead"/> </a> 
        <p>The Walking Dead, Vol. 1: Days Gone Bye</p>
        <p>By Robert Kirkman</p>
        <p>5 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/march.jpg" alt="march"/> </a>
        <p>March: Book One</p>
        <p>By John Lewis</p>
        <p>4 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/batman.jpg" alt="batman"/> </a>
        <p>Batman: The Dark Knight Returns</p>
        <p>By Frank Miller</p>
        <p>3 Stars</p>
        <p><a href="batman.html" className="detail-link"> Details </a></p>
        <a href="batman.html"> </a>
        </div>


        <div className="comic-cover-space">
          <a href="#"> <img src="./public/images/queer.jpg" alt="queer"/> </a>
        <p>Queer: A Graphic History</p>
        <p>By Meg-John Baker</p>
        <p>4 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div>

        <div className="comic-cover-space">
        <a href="#"> <img src="./public/images/parable-of-the-sower.jpg" alt="parable-of-the-sower"/> </a>
        <p>Parable of the Sower</p>
        <p>By Octavia Butler</p>
        <p>4 Stars</p>
        <p><a href="#" className="detail-link" > Details </a></p>
        </div> */}

            <div className="display-more-container">
              <button className="display-more">DISPLAY MORE</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
