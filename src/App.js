import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own Store of Nifty NFTS. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marktetplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth conatant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProfNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contians two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by <span className="bold">TeeTheFreelancer</span>
        </p>
      </div>
    </>
  );
};

export default App;
