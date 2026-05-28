import Home from "@/components/Home";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Service from "@/components/Service";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import TeamMembers from "@/components/TeamMembers";
import Header from "@/components/Header";
import ProjectSwipper from "@/components/ProjectSwipper";
import OurService from "@/components/OurService";
import OurProject from "@/components/OurProject";
import FAQ from "@/components/FAQ";
import Banner from "@/components/Banner";
import About from "@/components/About"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Header />
      <Home />
      <ProjectSwipper />
      <Services />
      <Service />
      <Solutions />
      <ChooseUs />
      <OurProject />
      <OurService />
      <TeamMembers />
      <Banner />
      <About />
      <FAQ />
      <Footer />
    </main>


  );
}
