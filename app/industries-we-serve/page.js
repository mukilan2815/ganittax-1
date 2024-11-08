"use client";

import { useState } from "react"; 
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Home() {
  const [openSections, setOpenSections] = useState({ 0: true });

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const servicesData = [
    {
      title: "Accommodation and Food Services",
      image: "https://www.foodandwine.com/thmb/el_3hy9yGmYMHsQxSN8Ben-cHlY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Heres-How-to-Get-a-Burger-King-Croissanwich-for-Just-One-Cent-FT-BLOG0124-f3e18b0ce7d44bb2940b93e2e0490076.jpg",
      services: [
        "Cash and Card Sales Reconciliation and Variances Tracker",
        "Online Sales Reconciliation",
        "Suspicious Credit Card Sale Chargebacks Reporting",
        "Day To Day Bookkeeping",
        "Inventory Management",
        "Virtual HR and Payroll Calculation",
        "Benchmarking",
        "Budgets and Financial Analysis",
        "Accounts Payables Reconciliation",
        "Amortization of Assets",
        "Periodical Financial Statements",
        "Sales Tax filings",
        "Royalty and Commission Calculations",
        "Federal and State Tax filings",
      ],
    },
    {
      title: "Information Technology Consulting",
      image: "/assets/images/sectionimg/itconsulting.jpg",
      services: [
        "Timesheets Management",
        "Paperwork Handling",
        "Virtual HR and Payroll Calculation",
        "Billing the Client and Sending Invoices",
        "Following up with Consultant and the Vendor/Client",
        "Accounts Payables Reporting",
        "Periodical ARs and APs Reconciliation",
        "Employee W2 and 1099 Filings",
        "Day To Day Bookkeeping",
        "Suspicious Transactions Reporting",
        "Periodical Bookkeeping",
        "Periodical Financial Statements",
        "Federal and State Tax filings",
      ],
    },
    {
      title: "Real Estate Rental and Leasing",
      image: "/assets/images/sectionimg/realestate.jpg",
      services: [
        "Project/Property Wise Expenses and Revenue Reporting",
        "Raising and Creating an Invoice to the Client",
        "Accounts Payable Management",
        "Virtual HR and Payroll Calculation",
        "Periodical AR & AP Reconciliation",
        "Suspicious Transactions Reporting",
        "Periodical Bookkeeping",
        "Periodical Financial Statements",
        "Federal and State Tax filings",
      ],
    },
    {
      title: "Retail and Wholesale Trade",
      image: "/assets/images/sectionimg/retail.jpg",
      services: [
        "Cash and Card Sales Reconciliation and Variances Tracker",
        "Suspicious Credit Card Sale Chargebacks Reporting",
        "Day To Day Bookkeeping",
        "Inventory Management",
        "Virtual HR and Payroll Calculations",
        "Benchmarking",
        "Commissions/Rebates Calculations",
        "Accounts Payables Reconciliation",
        "Accounts Receivables Reconciliation",
        "Periodical Financial Statements",
        "Sales Tax filings",
        "Federal and State Tax filings",
      ],
    },
  ];

  const logoData = [
    { src: "/assets/images/Industries/google.png", alt: "google" },
    { src: "/assets/images/Industries/connect.png", alt: "IT Consulting" },
    { src: "/assets/images/Industries/Burger-King-Logo.png", alt: "Real Estate Rental and Leasing" },
    { src: "/assets/images/Industries/five.jpg", alt: "Retail and Wholesale Trade" },
    { src: "/assets/images/Industries/kfc.png", alt: "Retail and Wholesale Trade" },
    { src: "/assets/images/Industries/papajohns.png", alt: "Retail and Wholesale Trade" },

  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Industries We Serve"
      >
        <section className="homeSection">
          <div className="container">
            <motion.div
              className="industriesHeader"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="industries-section-area section-padding5">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="industries-images">
                        <img
                          src="/assets/images/sectionimg/industriesweserver.jpg"
                          alt="Industries We Serve"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="industries-textarea">
                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">
                          Industries We Serve
                        </span>
                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">
                          Specialized Solutions for Key Sectors
                        </h1>
                        <p
                          className="font-ks font-16 lineh-26 weight-500 color-30"
                          style={{ textAlign: "justify" }}
                        >
                          Ganit Tax Inc. delivers specialized financial services
                          to diverse industries. Our expert team is dedicated to
                          helping businesses tackle industry-specific
                          challenges, streamline operations, and achieve
                          financial excellence.
                        </p>
                        <h2 className="font-lora font-24 lineh-32 weight-600 color-29 margin-b20">
                          Industries We Support
                        </h2>
                        <ul
                          className="font-ks font-16 lineh-26 weight-500 color-30"
                          style={{ textAlign: "justify" }}
                        >
                          <li>
                            <strong>Accommodation & Food Services:</strong>{" "}
                            Tailored financial services to optimize sales,
                            inventory, payroll, and tax filings, empowering
                            hospitality businesses.
                          </li>
                          <li>
                            <strong>IT Consulting:</strong> Comprehensive
                            accounting and payroll management for tech
                            consultants, ensuring smooth operations and
                            compliance.
                          </li>
                          <li>
                            <strong>Real Estate & Leasing:</strong> Strategic
                            financial management to support property
                            investments, rental tracking, and tax requirements.
                          </li>
                          <li>
                            <strong>Retail & Wholesale:</strong> Enhanced
                            inventory management, financial reporting, and
                            reconciliation to support growth and streamline
                            operations.
                          </li>
                        </ul>
                        <Link
                          href="/contact1"
                          className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                        >
                          Learn More{" "}
                          <span>
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div>
              <div
                style={{ marginBottom: "60px" }}
                className="industriesTitleContainer"
              >
                <h1 className="industriesTitle">Industries We Serve</h1>
              </div>
            </motion.div>

            <Slider {...sliderSettings} className="logoSlider">
              {logoData.map((logo, index) => (
                <div key={index} className="logoSlide">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </Slider>


            <motion.div className="industriesSection" style={{marginTop: "100px"}}>
              {servicesData.map((section, index) => (
                <div key={index} className="section">
                  <div
                    className="sectionHeader"
                    onClick={() => toggleSection(index)}
                  >
                    <h3>{section.title}</h3>
                  </div>
                  {openSections[index] && (
                    <div className="sectionContent">
                      <div className="contentContainer">
                        <div className="servicesListContainer">
                          <ul className="servicesList">
                            {section.services.map((service, i) => (
                              <li key={i}>{service}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="imageContainer">
                          <img src={section.image} alt={section.title} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        <img
          src="/assets/images/elementor/elementor17.png"
          alt="Industry Icon"
          className="elementor-icon keyframe3"
        />
                <div className="cta10-section-area section-padding4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta10-header">
                  <h1 className="font-44 font-lora lineh-52 weight-600 color margin-b">Get expert tax advice and consultation for your financial success.</h1>
                  <p className="font-16 font-ks lineh-26 weight-500 color-21"  style={{ textAlign:"justify" }}>We believe that informed clients make better financial decisions. As part of our service, we offer educational resources and personalized consultations to guide you through the complexities of taxation and financial planning.</p>
                </div>
              </div>
              <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="cta10-btnarea">
                    <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions11">Schedule
                      an Apointment <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                    <Link href="/contact1" className="font-ks font-16 lineh-16 color-h10 weight-700 solutions12">Contact Us <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <style jsx>{`
          .homeSection {
            padding: 20px;
          }

          .industriesTitleContainer {
            text-align: center;
            position: relative;
            padding-bottom: 20px;
            margin-bottom: 60px;
          }

          .industriesTitle {
            font-size: 2.5rem;
            font-weight: 700;
            color: #d4af37; 
            line-height: 1.2;
            letter-spacing: 1.2px;
            margin: 0;
            position: relative;
          }

          .industriesTitle::after {
            content: "";
            display: block;
            width: 100px;
            height: 4px;
            background: #004b4d; 
            margin: 15px auto 0;
            border-radius: 2px;
          }

          .industriesTitle:hover {
            color: #004b4d;
            transition: color 0.3s ease;
          }

          .industriesTitle:hover::after {
            box-shadow: 0px 0px 10px rgba(212, 175, 55, 0.5);
          }

          .industriesHeader {
            text-align: center;
            margin-bottom: 30px;
            color: #d4af37;
          }
          .industriesHeader h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #d4af37;
          }
          .industriesHeader p {
            font-size: 1rem;
            color: #555;
            max-width: 600px;
            margin: 0 auto;
          }
          .industriesSection {
            display: flex;
            flex-direction: column;
            gap: 15px;
            background-color: #f8f9fa; 
            padding: 20px;
            border-radius: 10px;
          }

          .section {
            border: 1px solid #d4af37;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .sectionHeader {
            background-color: #004b4d;
            padding: 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          .sectionHeader h3 {
            margin: 0;
            font-size: 1.2rem;
            color: #d4af37;
            font-weight: 600;
          }

          .sectionContent {
            padding: 15px;
            background-color: #ffffff;
          }

          .contentContainer {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 15px;
          }

          .servicesListContainer {
            flex: 1;
          }

          .servicesList {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .servicesList li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            font-size: 0.95rem;
            color: #333;
          }

          .imageContainer {
            flex: 1;
            max-width: 50%;
            height: 600px;
          }

          .imageContainer img {
            width: 100%;
            border-radius: 5px;
            object-fit: cover;
          }
          .logoSlider {
            margin-bottom: 40px;
            padding: 20px 0;
          }

          .logoSlide {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logoSlide img {
            max-width: 60%;
            height: auto;
            object-fit: contain;
          }
        `}</style>
      </Layout>
    </>
  );
}
