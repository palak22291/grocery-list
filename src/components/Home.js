import FeaturedItems from "./FeaturedItems"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import HowItWorks from "./HowItWorks"
import SearchBar from "./SearchBar"

function Home(){
    return(
        <>
        
     <SearchBar/>
        <HeroSection/>
        <FeaturedItems/>
        <HowItWorks/>
        <Footer/>
     

        </>
    )
}


export default Home;
