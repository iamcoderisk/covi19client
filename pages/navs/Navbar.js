export default function Navbar(){
 
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
      <a class="navbar-brand" href="/">
      <img src="./assets/img/logo.png" classNameclass="nav-logo img-fluid"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        
      <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item text-white">
        <a class="nav-link btn btn-danger text-white" href="symptoms">Symptoms</a>
      </li>
   
    </ul>

      <ul class="nav my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Prince E. Darlington</a>
        <div className="reduced">
        <img src="./assets/img/prince.svg" classNameclass="rounded-circle"/></div>
          
      </ul>
      </div>
        </div>
      </nav>
    </div>
  );
}
