import React from "react";
import Context from "@/context/Context";

import PageHead from "../../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import AiInterview from "@/components/AiInterview/AiInterview";

const AiInterviewPage = () => {
  return (
    <>
      <PageHead title="Ai-Interview" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <AiInterview />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default AiInterviewPage;
