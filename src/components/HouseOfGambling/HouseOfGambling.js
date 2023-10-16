import React from "react";
import { Blog, CirclesContainer, Footer, Navbar, TitleAndBtnSection } from "../../components";

export default function HouseOfGambling() {
  return (
    <div>
      <Navbar />
      <main>
        <TitleAndBtnSection />
        <CirclesContainer />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
