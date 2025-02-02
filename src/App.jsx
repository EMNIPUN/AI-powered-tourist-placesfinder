import DestinationListing from "./components/DestinationListion/DestinationListing";
import Hero from "./components/Hero/Hero";
import Navigator from "./components/Navigator/Navigator";
import SectionCard from "./components/SectionCard/SectionCard";

function App() {
  return (
    <>
      <div className=""> 
        <Navigator />
        <div>
          <Hero />
          <img 
            src="/assets/images/Hero/Hero3.jpg"
            alt="random" 
            className='absolute top-0 left-0 w-full h-full object-cover -z-10  hover:brightness-200'
          />
        </div>
      </div>
      <DestinationListing />
      <SectionCard />
    </>
  );
}

export default App;

