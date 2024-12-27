import React from "react";
import Context from "@/context/Context";

import PageHead from "../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Roadmap from "@/components/Roadmap/Roadmap";
import BackToTop from "../backToTop";
import Career from "@/components/Career/Career";

const CareerPage = () => {
  return (
    <>
      <PageHead title="Career" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          {/* <Breadcrumb title="Career" text="Career" /> */}
          <Career />
          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default CareerPage;