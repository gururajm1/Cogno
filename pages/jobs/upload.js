import React from "react";
import Context from "@/context/Context";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import BackToTop from "../backToTop";
import ApplyJob1 from "@/components/ApplyJob/applyjob1";


const ApplyJob = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
         {/* <Page2/> */}
         <ApplyJob1/>
          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default ApplyJob;
