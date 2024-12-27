import React from "react";
import Context from "@/context/Context";

import PageHead from "../../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import AiScreening from "@/components/AiScreening/AiScreening";

const AiScreeningPage = () => {
  return (
    <>
      <PageHead title="Ai-Screening" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <AiScreening />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default AiScreeningPage;