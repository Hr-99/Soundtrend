import Ad from "./Ad";
import Footer from "./Footer";
import Hashtag from "./Hashtag";
import Hero from "./Hero";
import Process from "./Process";
import Share from "./Share";

function Home(){
    return(
        <>
        <Hero/>
        <Share/>
        <Process/>
        <Hashtag/>
        <Ad/>
        <Footer/>
        </>
    );
}

export default Home;