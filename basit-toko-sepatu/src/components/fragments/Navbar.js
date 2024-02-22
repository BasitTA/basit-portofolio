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
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                     </a>
                     <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}