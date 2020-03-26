   <div id="menu">
      <div class="header-outs" id="header">
         <div class="header-w3layouts">
            <!--//navigation section -->
            <nav class="navbar navbar-expand-lg navbar-light">
               <div class="hedder-up">
                  <h1><a class="navbar-brand" href="index.php?page=controller_home&op=list" data-tr="Joyas"></a></h1>
               </div>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul class="navbar-nav ">
                     <li class="nav-item active">
                        <a class="nav-link" href="index.php?page=controller_home&op=list" data-tr="Inicio"> <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_joyas&op=list" data-tr="Joyas" class="nav-link"></a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_order&op=list" class="nav-link">Order</a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_shop&op=list" class="nav-link">Shop</a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_login&op=list" class="nav-link">Login</a>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Pages
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                           <a href="index.php?page=controller_gallery&op=list" data-tr="Galeria" class="nav-link"></a>
                           <a href="index.php?page=controller_services&op=list" data-tr="Servicios" class="nav-link"></a>
                           <a href="index.php?page=controller_aboutus&op=list" data-tr="Nosotros" class="nav-link"></a>
                           <a href="index.php?page=controller_contact&op=list" data-tr="Contacto" class="nav-link"></a>
                        </div>
                     </li>

                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Lenguages
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                           <select class="nav-item" id="language">
                              <option data-tr="Español" value="es" id="es"></option>
                              <option data-tr="Inglés" value="en" id="en"></option>
                              <option data-tr="Valenciano" value="va" id="va"></option>
                           </select>
                        </div>
                     </li>
                     <div class="sing-up-jel ">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                           Sign In
                        </button>
                     </div>
                  </ul>


               </div>

            </nav>
            </br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>
            <form class="search">
               <select id="type">
                  <option value="0">Type of Jewerly</option>

               </select>

               <select id="brand">
                  <option value="0">Brand</option>
               </select>

               <section class="autocomplete">
                  <input list="products" id="autocomplete" name="autocomplete">
                  <datalist id="products">
                  </datalist>
               </section>
               <a class="a">BUSCAR</a>
               
            </form>
            <div class="clearfix"> </div>
         </div>

         <div class="slider">
            <div class="callbacks_container">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                     <!-- <div class="carousel-item active">
                     <img src="view/images/b1.jpg" alt="...">
                  </div>
                  <div class="carousel-item">
                     <img src="view/images/b2.jpg" alt="...">
                  </div>
                  <div class="carousel-item">
                     <img src="view/images/b3.jpg" alt="...">
                  </div> -->
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
         <!-- This is here just to demonstrate the callbacks -->
         <!-- <ul class="events">
               <li>Example 4 callback events</li>
               </ul>-->
         <div class="clearfix"></div>
      </div>
   </div>
   <!-- //banner -->
   <!-- Modal 1-->
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
               <div class="register-form">
                  <form action="#" method="post">
                     <div class="fields-grid">
                        <div class="styled-input">
                           <input type="text" placeholder="Your Name" name="Your Name" required="">
                        </div>
                        <div class="styled-input">
                           <input type="email" placeholder="Your Email" name="Your Email" required="">
                        </div>
                        <div class="styled-input">
                           <input type="password" placeholder="password" name="password" required="">
                        </div>
                        <button type="submit" class="btn-block mb-3">Sign In</button>
                     </div>
                  </form>
               </div>
            </div>
            <div class="modal-footer">
               <div class="sing-up-jeweler ">
                  <a href="#" class="text-left" data-toggle="modal" data-target="#myModal3"> Don't Have an Account...?</a>
               </div>
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
         </div>
      </div>
   </div>
   <!-- //Modal 1-->
   <!-- Modal2 -->
   <div class="modal fade" id="myModal3" tabindex="-1" role="dialog">
      <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
            <div class="modal-header_w3layouts_agile">
               <button type="button" class="close" data-dismiss="modal">&times;</button>
               <div class="signin-form profile">
                  <div class="register-form">
                     <h3 class="sign">Sign Up</h3>
                     <div class="login-form">
                        <form action="#" method="post">
                           <input type="text" name="name" placeholder="Name" required="">
                           <input type="email" name="email" placeholder="Email" required="">
                           <input type="password" name="password" placeholder="Password" id="password" required="">
                           <input type="password" placeholder="Confirm Password" id="confirm_password" required>
                           <button type="submit" class="btn-block mb-3">Sign Up</button>
                        </form>
                     </div>
                  </div>
                  <div class="clearfix"></div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
               </div>
            </div>
         </div>
      </div>
   </div>