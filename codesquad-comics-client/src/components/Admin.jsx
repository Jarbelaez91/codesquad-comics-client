import books from "../data/books";
import { useState, useEffect } from "react";

function Admin() {
  const [dataBooks, setDataBooks] = useState([]);

  useEffect(() => {
    setDataBooks(dataBooks);
  }, []);

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
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* //       <td>Batman: The Dark Knight Returns</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Black Panther: A Nation Under Our Feet Book 1</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Fun Home: A Family Tragicomic</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Hunter X Hunter Vol 1</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Lumberjanes Vol. 1</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>March: Book One</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>One Piece, Vol. 1: Romance Dawn</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Parable of the Sower</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Queer: A Graphic History</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>The Walking Dead, Vol. 1: Days Gone Bye</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Wake: The Hidden History of Women-Led Slave Revolts</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  //     <tbody>
  //       <td>Watchmen</td>
  //       <td><button className="edit-button">EDIT</button></td>
  //       <td><button className="delete-button">Delete</button></td>
  //     </tbody>
  */}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Admin;
