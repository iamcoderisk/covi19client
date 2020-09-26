import Link from 'next/link'
export default function FirstHome(){
  return(
    <div className="main">
      <div className="sidebar">
          <div className="connect">
            <p>Connect Shop <i className="ion-plus"></i></p>
          </div>

          <ul className="side_nav">
            <li class="side_n active"><a href="#"><i className="ion-grid"></i> Dashboard</a></li>
            <li class="side_n"><a href="#"><i className="ion-ios-cloud-upload"></i> Upload Feed</a></li>
            <li class="side_n"><a href="#"><i className="ion-bag"></i> Add Marketplaces</a></li>
            <li class="side_n"><a href="#"><i className="ion-ios-pricetags"></i> Products</a></li>
            <li class="side_n"><a href="#"><i className="ion-android-cart"></i> Order</a></li>
            <li class="side_n"><a href="#"><i className="ion-gear-b"></i> Settings</a></li>
          </ul>

      </div>
      <div className="main_box">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="icon_circle">
                                <i className="ion-android-cart"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shoppers">
                              <h3>1,050</h3>
                              <p>Webshops</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="dots">
                        <img src="./assets/img/dots.svg" className="img-fluid" />
                        </div>
                        </div>
                   </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="icon_circle">
                                <i className="ion-android-cart"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shoppers">
                              <h3>1,050</h3>
                              <p>Webshops</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="dots">
                        <img src="./assets/img/dots.svg" className="img-fluid" />
                        </div>
                        </div>
                   </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="icon_circle">
                                <i className="ion-android-cart"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shoppers">
                              <h3>10,271</h3>
                              <p>Orders</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="dots">
                        <img src="./assets/img/dots.svg" className="img-fluid" />
                        </div>
                        </div>
                   </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="icon_circle">
                                <i className="ion-ios-barcode-outline"></i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="shoppers">
                              <h3>1,050</h3>
                              <p>Marketplaces</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div className="dots">
                        <img src="./assets/img/dots.svg" className="img-fluid" />
                        </div>
                        </div>
                   </div>
                </div>
              </div> 

            </div>

            <div className="container"><div className="row justify-content-center">
              <div className="col-md-5 text-center">
                <div className="gains_container">
                <h5>GAINS</h5>
                </div>
              </div>
            </div></div>


            <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        
                        <div className="col-md-12 text-center">
                            <div className="shoppers profit">
                              <h3>1,050</h3>
                              <p>MONTHLY NET PROFIT</p>
                            </div>
                        </div>
                        
                   </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        
                        <div className="col-md-12 text-center">
                            <div className="shoppers profit">
                              <h3>32,050</h3>
                              <p>MONTHLY DAILY AVERAGE GROSS REVENUE</p>
                            </div>
                        </div>
                        
                   </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        
                        <div className="col-md-12 text-center">
                            <div className="shoppers profit">
                              <h3>11,050</h3>
                             <p>TOTAL SALES</p>T
                            </div>
                        </div>
                        
                   </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="simple_container">
                   <div className="row">
                        
                        <div className="col-md-12 text-center">
                            <div className="shoppers profit">
                              <h3>10,231</h3>
                              <p>TOTAL CUSTOMERS THIS MONTH</p>
                            </div>
                        </div>
                        
                   </div>
                </div>
              </div>

              

            </div>
            </div>



          </div>
      </div>

    </div>
  );
}
