import '../index.css'
function Footer() {
    return (
        <footer>
        <div>Footer
    
                    <h3 className="visit-us">VISIT US</h3>
                    <p className="directions">
                    CodeSquad Comics <br />
                    123 Dorchester Avenue <br />
                    Boston, Ma 02124
                    </p>
                    </div>
                
    
    
        <div className="footer-box">
            <h3 className="visit-us" >LINKS</h3>
            <nav >
            <ul className="link-box">
            <a className="link-alignment"href="#"> Home</a>
            <a className="link-alignment"href="#"> About</a>
            <a className="link-alignment"href="#"> Login</a>
            </ul>
            </nav>
        </div>
    
    
        <div className="footer-box">
            <h3 className="follow-us">FOLLOW US</h3>
            <nav className="social-media">
            <a className="link-social" href="#"> <i className="fa-brands fa-facebook"></i> </a>
            <a className="link-social" href="#"> <i className="fa-brands fa-instagram"></i> </a>
            <a className="link-social" href="#">  <i className="fa-brands fa-twitter"></i> </a>
            </nav>
        </div>
    
        <div className="footer-box">
          <div className="image-box">
          <h3 className="visit-us">A PRODUCT OF</h3>
          <a href="http://codesquad.org/" target="_blank">
          <img className="footer-image" src="./images/CodeSquad-logo.jpg" alt="footer logo" />
          </a>
      </div>
      </div>
    </footer>
    )
  }

  export default Footer