import Home from "@/components/Home";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Service from "@/components/Service";
import ChooseUs from "@/components/ChooseUs";
import Footer from "@/components/Footer";
import TeamMembers from "@/components/TeamMembers";


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Home />
      <Services />
      <Service />
      <div>
        <Solutions />
      </div>

      <div>
        <ChooseUs />
      </div>

      <TeamMembers />

      <Footer />
    </main>


  );
}
