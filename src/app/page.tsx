import Home from "@/components/Home";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Service from "@/components/Service";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Home />
      <Services />
      <Service />
      <div>
        <Solutions />
      </div>
    </main>

    
  );
}
