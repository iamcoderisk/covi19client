export default function Navbar(){
  if (typeof window !== 'undefined') {
    
    document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 54) {
      
        $(".navbar").removeClass('bg-transparent')
        $(".navbar").removeClass('transparent')
         $(".navbar").addClass('navbar-light shadow p-3 mb-5 bg-white rounded')
         $(".navbar").addClass('bg-light')
      }else{
          $(".navbar").removeClass('navbar-light shadow p-3 mb-5 bg-white rounded') 
         $(".navbar").removeClass('bg-light')
         $(".navbar").addClass('bg-transparent') 
         $(".navbar").addClass('transparent') 
         $(".navbar").addClass('navbar-light')
         $(".navbar").addClass('bg-light')

      }
  });
  }
 
  return(
    <div>
    {/* <nav class="navbar bg-transparent navbar-expand-lg navbar-light bg-light fixed-top transparent"> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">
      <a class="navbar-brand" href="/">
     Bridgero
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        
        <form class="form-inline my-2 my-lg-0 mr-md-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>

      <ul class="nav my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#"><i className="ion-android-notifications-none"></i></a>
        <div className="reduced"><img src="./assets/img/prince.svg" classNameclass="rounded-circle"/></div>
          <li className="nav-item dropdown">
         
        <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"><i className="ion-person"></i> Profile</a>
          <a class="dropdown-item" href="#"><i class="ion-gear-b"></i> Settings</a>
          <a class="dropdown-item" href="#"><i className="ion-power"></i>Logout</a>
        </div>
  
          </li>
      </ul>
      </div>
        </div>
      </nav>
    </div>
  );
}
