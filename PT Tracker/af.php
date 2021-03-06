<?php
//Step1
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "cadet_records");

$db = mysqli_connect(DB_SERVER , DB_USER, DB_PASSWORD, DB_DATABASE)
// $db = mysqli_connect('localhost','tkj15','Tojo042181','cadet_records')
or die('Error connecting to MySQL server.');
?>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>APFT Scoreboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="css/freelancer.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top" class="index">

    <!-- Navigation -->
    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">ROTC PT Tracker</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#portfolio">Standards</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#about">Cadet Records</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#calc">AFPFT Calculator</a>
                    </li>
                    <li>
                        <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
                    <ul id="login-dp" class="dropdown-menu">
                        <li>
                             <div class="row">
                                    <div class="col-md-12">
                                         <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                                <div class="form-group">
                                                     <label class="sr-only" for="exampleInputEmail2">Email address</label>
                                                     <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                                                </div>
                                                <div class="form-group">
                                                     <label class="sr-only" for="exampleInputPassword2">Password</label>
                                                     <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                                </div>
                                                <div class="form-group">
                                                     <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                                </div>
                                         </form>
                                    </div>
                             </div>
                        </li>
                    </ul>
                </li>
                    </li>
                    <li>
                        <input class="btn btn-primary btn-lg" type="button" value="ARMY" onclick="location.href='army.html'"/>
                        <input class="btn btn-primary btn-lg" type="button" value="AIR FORCE" onclick="location.href='af.html'"/>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- Header -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="img-responsive" src="img/airforce.png" alt="">
                    <div class="intro-text">
                        
                        <hr class="star-light">
                        <span class="skills"><i>“The man on top of the mountain didn’t fall there.” - Unknown</i></span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Portfolio Grid Section -->
    <section id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Standards</h2>
                    <hr class="star-primary">
                </div>
            </div>
   
                <div class="col-md-3.5 portfolio-item">
                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/HWButton.png" class="img-responsive" alt="">
                    </a>
                </div>
            
            
                <div class="col-md-3.5 portfolio-item">
                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/PushupButton.png" class="img-responsive" alt="">
                    </a>
                </div>
           
         
                <div class="col-md-3.5 portfolio-item">
                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/SUButton.png" class="img-responsive" alt="">
                    </a>
                </div>
            
 
                <div class="col-md-3.5 portfolio-item">
                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
                        <div class="caption">
                            <div class="caption-content">
                                <i class="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/runButton.png" class="img-responsive" alt="">
                    </a>
                </div> 
            
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="success" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Cadet Records</h2>
                    <hr class="star-light">
                </div>
                <?php
                    $resource = $db->query('SELECT * FROM airforce_cadets');
                    while($row = $resource->fetch_assoc()){
                    echo "{$row['Name']}", "{$row['Unit']}"."<br />";
                    }
                    $resource->free();
                    $db->close();
                ?>
            </div>
            
    </section>

    <!-- Calc Section -->
    <section id="calc">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>AFPFT Calculator</h2>
                    <hr class="star-primary">
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-8 col-lg-offset-2">
                    <form id="form-container" class="form-container">
                    
                        <div id='calc-holder'>

                        <label for='gender'>Gender</label>
                        <select id='gender' name='gender'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="age">Age</label>
                                <input class="form-control" id="age" name="age" placeholder="Enter Age" required data-validation-required-message="Please enter Cadet's age.">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="height">Height (in)</label>
                                <input class="form-control" id="height" name="height" placeholder="Enter Height (in)" required data-validation-required-message="Please enter Cadet's height.">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="weight">Weight (lbs)</label>
                                <input class="form-control" id="weight" name="weight" placeholder="Enter Weight (lbs)" required data-validation-required-message="Please enter Cadet's weight.">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="abd">Abdominal Circumference (in)</label>
                                <input class="form-control" id="abd" name="abd" placeholder="Abdominal Circumference (in)" required data-validation-required-message="Please enter Cadet's Abdominal Circumference (inches).">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="push">Push-Ups</label>
                                <input class="form-control" id="push" name="push" placeholder="Push-Ups" required data-validation-required-message="Please enter Cadet's push-ups.">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="sit">Sit-Ups</label>
                                <input class="form-control" id="sit" name="sit" placeholder="Sit-Ups" required data-validation-required-message="Please enter Cadet's sit-ups.">
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="run">Run Time</label>
                                <input class="form-control" id="run-min" name="run-min" placeholder="Minutes (Run)" required data-validation-required-message="Please enter Cadet's run time minutes."/> <input class="form-control" id="run-sec" name="run-sec" placeholder="Seconds (Run)" required data-validation-required-message="Please enter Cadet's run time seconds."/> 
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label for="walk">Walk Time</label>
                                <input class="form-control" id="walk-min" name="walk-min" placeholder="Minutes (Walk, optional)" required data-validation-required-message="Please enter Cadet's walk time minutes."/> <input class="form-control" id="walk-sec" name="walk-sec" placeholder="Seconds (Walk, optional)" required data-validation-required-message="Please enter Cadet's walk time seconds."/> 
                                <p class="help-block text-danger"></p>
                            </div>
                        <br>
                        <div class="form-group col-xs-12 text-center">
                            <button class="btn btn-success btn-lg" onclick='usafcalc()'>Submit</button>
                        </div>


                    </div>


                    <div style='clear:both;margin:5px;padding:10px;'>&nbsp;</div>

                    <div id='results'>
                        <h1>Results</h1>
                        <p id='result-scores'>
                        <label for='run-score'>Run Time</label> <span id='run-score' name='run-score'>0 / 60</span>
                        <br>
                        <label for='walk-score'>Walk Time</label> <span id='walk-score' name='walk-score'>Pass / Fail</span>
                        <br>
                        <label for='abd-score'>Abdominal Circumference</label> <span id='abd-score' name='abd-score'>0 / 20</span>
                        <br>
                        <label for='push-score'>Push-Ups Score</label> <span id='push-score' name='push-score'>0 / 10</span>
                        <br>
                        <label for='sit-score'>Sit-Ups Score</label> <span id='sit-score' name='sit-score'>0 / 10</span>
                        <hr>
                        <p id='result-scores'>
                        <label for='composite'>Composite Score</label> <span id='composite' name='composite'>0 / 100</span>
                        <br>
                        <label for='bmi'>Body Mass Index</label> <span id='bmi' name='bmi'>00.0</span>
                        <br>
                        <label for='category'>Composite Rating</label> <span id='category' name='category'>N/a</span>
                        <br>
                        </p>
                    </div>
                </div>
            </div>
    </section>

    <!-- Footer -->
    <footer class="text-center">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="footer-col col-md-4">
                        <h3>Created For Use By</h3>
                        <p>Texas State University Air Force ROTC
                            <br>Bobcat Battalion</p>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>Around the Web</h3>
                        <ul class="list-inline">
                            <li>
                                <a href="https://www.facebook.com/bobcatairmen/" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-col col-md-4">
                        <h3>ROTC PT Tracker</h3>
                        <p>Your one stop ROTC PT hub! We help you train, track, and consolodate your fitness records.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; Thomas Jordan and Austin Stamper 2017
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>

    <!-- Portfolio Modals -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>Height and Weight/Body Composition</h2>
                            <hr class="star-primary">
                            <center>
                                <h4>Height and Weight Standards</h4>
                                <img src="img/AF_HW1.png" class="img-responsive" alt="">
                                <img src="img/AF_HW2.png" class="img-responsive" alt="">
                                <h4>Male Body Composition</h4>
                                <img src="img/BC_AF.png" class="img-responsive" alt="">
                                <h4>Female Body Composition</h4>
                                <img src="img/F_BC_AF.png" class="img-responsive" alt="">
                            </center>
                            <!--<button type="button" class="btn btn-primary btn-lg btn-block">Male</button>
                            
                            <button type="button" class="btn btn-primary btn-lg btn-block">Female</button>
                            <!--<button type="button" class="btn btn-primary btn-lg btn-block" data-dismiss="modal"><i class="fa fa-times"></i>Close</button>
                        -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>The Push-Up</h2>
                            <hr class="star-primary">
                            <center>
                                <h4>Males</h4>
                                <img src="img/Male_PU_AF1.png" class="img-responsive" alt="">
                                <img src="img/Male_PU_AF2.png" class="img-responsive" alt="">
                                <h4>Females</h4>
                                <img src="img/Female_PU_AF1.png" class="img-responsive" alt="">
                                <img src="img/Female_PU_AF2.png" class="img-responsive" alt="">
                            </center>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>The Sit-Up</h2>
                            <hr class="star-primary">
                            <center>
                                <h4>Males</h4>
                                <img src="img/M_SU_AF.png" class="img-responsive" alt="">
                                <h4>Females</h4>
                                <img src="img/F_SU_AF1.png" class="img-responsive" alt="">
                                <img src="img/F_SU_AF2.png" class="img-responsive" alt="">
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div class="modal-body">
                            <h2>The 1.5-Mile Run</h2>
                            <hr class="star-primary">
                            <center>
                                <h4>Males</h4>
                                <img src="img/af_run_standards.png" class="img-responsive" alt="">
                                <h4>Females</h4>
                                <img src="img/af_run_standards_f" class="img-responsive" alt="">
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="js/jqBootstrapValidation.js"></script>
    <script src="js/contact_me.js"></script>


    <!-- APFT Calculator -->
    <script src="js/Calculator.js"></script>
    <!-- Theme JavaScript -->
    <script src="js/freelancer.min.js"></script>

</body>

</html>
