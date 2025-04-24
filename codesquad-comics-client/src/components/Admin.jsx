import books from "../data/books";
import "../App.css";


import { useState, useEffect } from "react";

function Admin() {
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    fetch ("https://course-project-codesquad-comics-server.onrender.com/api/books")
    .then (res => res.json())
    .then (data => {
      console.log("Fetched data:", data);
      setDataBooks (data.data.books)
    })
    .catch ((error) => {
      console.error("try again", error)
    })
  }, []);

  const handleDelete = (bookId) => {
    fetch (`https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`,{
      method: "DELETE",
    })
    .then ((res) => res.json())
    .then(() => {
      console.log("success")
      setDataBooks ((preBooks) => preBooks.filter((book)=> book.id !== bookId))
    })
    .catch ((error) => {
      console.error("try again", error)
    })
  }




  return (
    <main>
      <div className="middle-container">
        <div className="center-table">
          <header>
            <h1 className="about-code-squad">ADMIN PAGE</h1>
          </header>
          <button className="add-comic-button">ADD NEW COMIC</button>

          <div>
            <table className="table-borders">
              <thead>
                <tr className="table-title">
                  <th className="table-borders">Comic Title</th>
                  <th className="table-borders">EDIT</th>
                  <th className="table-borders">Delete</th>
                </tr>
              </thead>

              <tbody className="tbody">
                {books.map((book) => (
                  <tr key={book.id}>
                    <td> {book.title} </td>
                    <td>
                      <button className="edit-button">EDIT</button>
                    </td>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(book.id)} 
                      >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Admin;
