//Cta-Two.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";
import playApp from "../../public/images/cta-img/play-app.png";
import appleApp from "../../public/images/cta-img/apple-app.png";
import viewImg from "../../public/images/cta-img/cta-two.png";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import bgLight from "../../public/images/bg/bg-shape-tree.png";
import ellipse from "../../public/images/cta-img/ellipse.png";
import { contactUs } from "./contactus";
import { toast } from "react-toastify";
import { MuiTelInput } from "mui-tel-input";

const CtaTwo = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    work_email: "",
    company_name: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    Sal();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlePhoneChange = (newValue) => {
    setFormData((prev) => ({
      ...prev,
      phone_number: newValue,
    }));
  };


  const validateForm = () => {
    const validation = {};
    if (formData.first_name.length < 3) {
      validation.first_name = "Name must be at least 3 characters long.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.work_email)) {
      validation.work_email = "Enter a valid email address.";
    }

    if (formData.company_name.length < 3) {
      validation.company_name = "Company name must be at least 3 characters long.";
    }

    if (formData.phone_number.length < 10) {
      validation.phone_number = "Phone number must be at least 10 digits.";
    }

    setErrors(validation);
    return Object.keys(validation).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await contactUs(formData);
      console.log("Response:", response);

      if (response.status === "success") {
        toast.success("Form submitted Successfully!");
        setFormData({
          first_name: "",
          work_email: "",
          company_name: "",
          phone_number: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="aiwave-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "-5vh",
                      marginBottom: "10vh",
                    }}
                  >
                    <Image
                      src="/images/logo/cogno.svg"
                      width={40}
                      height={40} // Adjust height to better align with text size
                      style={{ marginRight: "1rem" }}
                    />
                    <h4
                      className="subtitle"
                      style={{ margin: 0, lineHeight: "2rem" }}
                    >
                      <span
                        style={{ fontSize: "4rem", verticalAlign: "middle" }}
                      >
                        cogno
                      </span>
                    </h4>
                  </div>
                  {/* <h4 className="subtitle">
                    <span className="theme-gradient">
                      Get Started with Cogno
                    </span>
                  </h4> */}
                  <h2 className="title w-200 mb--20">
                    Tired of Manual Interview Scheduling?
                  </h2>
                  <p className="description b1">
                    Streamline Recruitment with Cogno
                  </p>
                </div>
                {/* <div className="app-store-btn">
                  <Link cla
                  <li></li>ssName="store-btn" href="#">
                    <Image
                      src={playApp}
                      width={157}
                      height={55}
                      alt="Play Store Button"
                    />
                  </Link>
                  <Link cla
                  <li></li>ssName="store-btn" href="#">
                    <Image
                      src={appleApp}
                      width={157}
                      height={55}
                      alt="Apple Store Button"
                    />
                  </Link>
                </div> */}
                {/* <div className="app-image">
                  <Image
                    src="/images/products/products-dark/HomePage-Experience.png"
                    width={650}
                    height={500}
                    alt="App Store Button"
                  />
                </div> */}
                <ul>
                  <li>
                    <i className="fa-solid fa-badge-check"></i>
                    AI-driven candidate matching, tailored for every role!
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i>
                    Effortless interview scheduling, on time, every time!
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i>
                    Actionable insights and real-time analytics!
                  </li>
                  <li>
                    <i className="fa-solid fa-badge-check"></i>
                    End-to-end recruitment automation!
                  </li>
                </ul>
              </div>
              {/* <div className="content-right">
                <div className="img-right">
                  <Image
                    src={viewImg}
                    width={500}
                    height={449}
                    alt="Mobile View"
                  />
                </div>
              </div> */}
              <div className="content-right">
                <div className="content-right-inside">
                  <h4 className="demo">Get Your Free Demo Now!</h4>
                  <form
                    style={{ alignItems: "center" }}
                    onSubmit={handleSubmit}
                  >
                    <div style={{ margin: "10px 0" }}>
                      <label>Name *</label>
                      <input
                        className="fields"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                      // required
                      />
                      {errors.first_name && <span className="error">{errors.first_name}</span>}
                    </div>
                    <div style={{ margin: "10px 0" }}>
                      <label>Work-Email *</label>
                      <input
                        className="fields"
                        type="text"
                        name="work_email"
                        value={formData.work_email}
                        onChange={handleInputChange}
                      // required
                      />
                      {errors.work_email && <span className="error">{errors.work_email}</span>}
                    </div>
                    <div style={{ margin: "10px 0" }}>
                      <label>Company Name *</label>
                      <input
                        className="fields"
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleInputChange}
                      // required
                      />
                      {errors.company_name && <span className="error">{errors.company_name}</span>}
                    </div>
                    <div style={{ margin: "10px 0" }}>
                      <label>Phone Number *</label>
                      <div>

                        {/* <input
                        type="number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        maxLength={10}
                        minLength={10}
                      // required
                      // className="phone-number-input"
                      /> */}       
                        
                        <MuiTelInput
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handlePhoneChange}
                          defaultCountry="IN"
                          sx={{
                            width: '100%',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '0.17rem solid rgba(255, 255, 255, 0.1)',
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                border: 'none',
                              },
                              '&.Mui-focused fieldset': {
                                border: '0.18rem solid #6A48F2',
                              },
                            },
                            '& .MuiInputBase-input': {
                              padding: '0.6rem',
                              border: 'none',
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                maxHeight: 200,
                                marginLeft: '1.5rem'
                              },
                            },
                          }}
                        />

                        {errors.phone_number && <span className="error">{errors.phone_number}</span>}
                      </div>
                    </div>
                    <p className="signin-terms">
                      By providing your information, you hereby consent to
                      thecogno {""}
                      <a
                        href="/"
                        className="policies"
                      >
                        Cookie Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/"
                        className="policies"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <div className="join-now">
                      <button type="submit" className="btn-default">
                        Join Today!
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div
                  style={{
                    position: "absolute",
                    bottom: "-50px", // Adjust this value as needed to overlap correctly
                    zIndex: 1, // Lower index so it's behind the form
                  }}
                >
                  <Image
                    src={viewImg}
                    width={500}
                    height={449}
                    alt="Mobile View"
                    priority // Helps with loading image faster
                  />
                </div> */}
              </div>
              <div className="bg-shape-one">
                <Image src={viewImg} width={600} height={300} alt="Bg shape" />
              </div>
            </div>
            {/* <div className="bg-shape-inside">
              <Image src={bgLight} width={968} height={1103} alt="Bg shape" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
