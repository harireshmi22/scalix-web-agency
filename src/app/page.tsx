import Home from "@/components/Home";
import TeamMembers from "@/components/TeamMembers";
import ProjectSwipper from "@/components/ProjectSwipperClient";
import OurService from "@/components/OurService";
import OurProject from "@/components/OurProject";
import FAQ from "@/components/FAQ";
import Banner from "@/components/Banner";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Home />
      <ProjectSwipper />
      <About />
      <OurService />
      <OurProject />
      <TeamMembers />
      <FAQ />
      <Banner />
    </div>
  );
}

