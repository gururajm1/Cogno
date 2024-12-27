import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import FooterData from "../../data/footer.json";

import logo from "../../public/images/logo/newlogo1.svg";
import FooterProps from "./FooterProps";
import { useRouter } from "next/router";
import subscribeToNewsletter from "./newsletterAPI";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    
      const result = await subscribeToNewsletter(email);
      if (result.status === 'success') {
        router.push("/newsletter-success");
      } else {
        setError(result.message || "Subscription failed!");
      } 
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget">
                  {/* <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={135}
                        height={35}
                        alt="ChatBot Logo"
                      />
                      <span
                        style={{
                          color: "white",
                          fontSize: "22px",
                          fontWeight: "600",
                          position: "absolute",
                          marginLeft: "-40px",
                        }}
                      >
                        Cogno
                      </span>
                    </Link>
                  </div> */}
                  {/* <p className="b1 desc-text">
                    It has long been known that a reader's <br /> attention will
                    be diverted from{" "}
                  </p> */}
                  <h6 className="subtitle">Join a Newsletter</h6>
                  <form
                    className="newsletter-form"
                    // action="/newsletter-success"
                    onSubmit={handleSubmit}
                  >
                    <p>
                      Subscribe to our newsletter for latest updates and
                      exclusive insights!
                    </p>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Enter Your Email Here"
                        value={email}
                        onChange={handleChange}
                      />
                      <button
                        className="btn-default bg-solid-primary"
                        type="submit"
                      >
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                    {error && (
                      <p style={{ color: "rgb(237 74 74)" }}>{error}</p>
                    )}
                  </form>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <FooterProps list={data.links} />
                    </div>
                  ))}
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <FooterProps list={data.services} />
                    </div>
                  ))}
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                {FooterData &&
                  FooterData.footer.map((data, index) => (
                    <div className="rainbow-footer-widget" key={index}>
                      <div className="widget-menu-top">
                        <h4 className="title">Contact</h4>
                        {data.contact.map((inner, i) => (
                          <div className="inner" key={i}>
                            <ul className="footer-link contact-link">
                              <li style={{ fontWeight: "600" }}>
                                Our Locations
                              </li>
                              <li>
                                <i className="contact-icon fa-regular fa-location-dot"></i>
                                <Link href="https://maps.app.goo.gl/x67Gkj9nRtTK7VvcA">
                                  Coimbatore, TamilNadu (IND)
                                </Link>
                              </li>
                              <li style={{ fontWeight: "600" }}>
                                Contact Info
                              </li>
                              <li>
                                <i className="contact-icon fa-sharp fa-regular fa-envelope"></i>
                                <Link
                                  href={`mailto:${inner.mail}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {inner.mail}
                                </Link>
                              </li>
                              <li>
                                <i className="contact-icon fa-brands fa-linkedin"></i>
                                <Link href="https://www.linkedin.com/company/cognoai/mycompany/">
                                  Cogno
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
