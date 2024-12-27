import React from "react";
import Context from "@/context/Context";

import PageHead from "../Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const NewsLetterSuccessPage = () => {
  return (
    <>
      <PageHead title="Thank you for subscribing" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <section className="success-subs">
            <span>Thank You for Subscribing!</span>
            <p>your newsletter will arrive in your inbox soon.</p>
          </section>
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default NewsLetterSuccessPage;
