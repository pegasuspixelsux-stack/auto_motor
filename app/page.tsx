import AnnouncementBar from "./components/AnnouncementBar";
import PublishSection from "./components/PublishSection";
import SiteHeader from "./components/SiteHeader";
import BankTicker from "./components/BankTicker";
import Catalog from "./components/Catalog";
import FinanceCalculator from "./components/FinanceCalculator";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewListings from "./components/NewListings";
import { SAMPLE_VEHICLES } from "./data/vehicles";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <main className="mx-auto min-h-screen w-full max-w-[1440px] bg-bg text-fg selection:bg-fg selection:text-bg">
        <NewListings vehicles={SAMPLE_VEHICLES} />
        <Catalog vehicles={SAMPLE_VEHICLES} />
        <PublishSection />
        <FinanceCalculator />
        <BankTicker />
        <Footer />
      </main>
    </>
  );
}
