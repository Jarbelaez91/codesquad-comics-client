function Update() {
    return (
        <main>
       <div className="middle-container">
      <div className="comics">
      <header>
      <h1 className="comics">UPDATE COMICS</h1>
      </header>
      </div>

    <form className="form-alignment">
      <div className="form-lines">
        <label className="labels" for="title"> Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value="title value stored in database"
          placeholder="Title"
        />
      </div>
      <div className="form-lines">
        <label className="labels" for="author"> Author</label>
        <input 
          type="text"
          name="author"
          id="author"
          value="author value stored in database"
          placeholder="Author"
        />
      </div>
      <div className="form-lines">
        <label className="labels" for="publisher">Publisher</label>
        <select
          name="publisher"
          id="publisher"
          value="publisher value stored in database"
          placeholder="publisher"
        >
          <option value="boom-box">BOOM! Box</option>
          <option value="dc-comics">DC Comics</option>
          <option value="harry-n-abrams">Harry N. Abrams</option>
          <option value="icon-books">Icon Books</option>
          <option value="image-comics">Image Comics</option>
          <option value="marvel">Marvel</option>
          <option value="simon-schuster">Simon & Schuster</option>
          <option value="top-shelf-productions">Top Shelf Productions</option>
          <option value="viz-media-llc">VIZ Media LLC</option>
        </select>
      </div>
      <div className="form-lines">
        <label className="labels" for="genre"> Genre</label>
        <input
          type="text"
          name="genre"
          id="genre"
          value="genre value stored in database"
          placeholder="Genre"
        />
      </div>
      <div className="form-lines">
        <label className="labels" for="pages"> Number of Pages</label>
        <input
          type="number"
          name="publisher"
          id="publisher"
          value="255"
          placeholder="number of pages"
        />
      </div>
      <div className="form-lines">
        <label className="labels" for="rating"> Rating</label>
        <input type="number" name="rating" id="rating" value="5" />
      </div>

      <div className="form-lines">
        <label className="labels" for="multi-line-text">Synopsis</label>
        <textarea
          id="multi-line-text"
          value="synopsis value stored in database"
          placeholder="Synopsis"
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
    )
  }

  export default Update