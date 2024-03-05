export default function Navbar(){

   return(
      <nav className="navbar navbar-expand-lg position-absolute w-100 z-3">
         <div className="fixed-top container-fluid bg-body-tertiary">
            <a className="navbar-brand" href="#">
               <img src="https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bootstrap" width="80" height="50" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
               <ul className="navbar-nav text-center">
                  <li className="nav-item">
                     <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#unique-value">Why Us?</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#offer">Limited Offer</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#review">Testimony</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#partner">Partners</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}