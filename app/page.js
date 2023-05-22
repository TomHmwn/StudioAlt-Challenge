import { Navbar, Announce, Hero, Products, Footer } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Announce />
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
