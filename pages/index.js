import Head from 'next/head'
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import Intro from './main/FirstHome';

export default function Home() {
  
  return (
    <div>
    <Head>
      <title>Bridgero | Connectivo</title>
      <meta name="theme-color" content="#C7FFEB" />

      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <link href="/assets/css/app.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/assets/css/bootstrap.css"/>
      <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      
     
    </Head>
    <Navbar />
    <Intro/>




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        

   

    </div>
  )
}
