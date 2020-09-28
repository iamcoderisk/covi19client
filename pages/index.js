import Head from 'next/head'
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import Intro from './main/FirstHome';
import Partials from './main/Partials';
export default function Home() {
  
  return (
    <div>
    <Head>
      
      <Partials />
     
    </Head>
    <Navbar />
    <Intro/>




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
     
     
   

    </div>
  )
}
