"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const [showBanner, setShowBanner] = useState(true); // New state for banner

  const closeBanner = () => {
    setShowBanner(false);
  };

  const handleBannerClick = () => {
    window.location.href = "https://ganittax.com/contact1"; // Redirect link
  };

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Start your Business"
      >
        {" "}
        {showBanner && (
          <div className="popup-banner">
            <div className="banner-content">
              <img
                src="/assets/images/banner.jpg" // Your banner image path
                alt="Promotional Banner"
                onClick={handleBannerClick}
                style={{
                  cursor: "pointer",
                  height: "80vh",
                  objectFit: "cover",
                }}
              />
              <button onClick={closeBanner} className="close-banner">
                X
              </button>
            </div>
          </div>
        )}
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="/assets/images/sectionimg/servicedeailsimg1.png"
                      alt=""
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Start Your Business with Confidence
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Launching a business requires careful planning, compliance
                      with regulatory requirements, and strategic tax
                      management. Our services provide comprehensive support,
                      helping you navigate every step of the startup process.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      From entity formation to compliance and tax advisory, we
                      offer tailored solutions designed to optimize your
                      financial outcomes and ensure regulatory compliance, so
                      you can focus on growing your vision into reality.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Maximize Your Business Potential
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Explore our range of services to find the right solutions
                      for your unique needs. From tax planning to operational
                      strategy, we help businesses thrive in today’s competitive
                      environment.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="approach-area margin-t32">
                          <div className="approach-img">
                            <img
                              src="/assets/images/icons/stragig1.svg"
                              alt=""
                              className="approahimages ts"
                            />
                          </div>
                          <div className="approach-text">
                            <Link
                              href="/servicemiddle"
                              className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                            >
                              Tax and Financial Planning
                            </Link>
                            <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                              We help optimize your tax strategies, maximizing
                              deductions and reducing liabilities, so you can
                              invest more back into your business.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="approach-area margin-t32">
                          <div className="approach-img">
                            <img
                              src="/assets/images/icons/approach1.svg"
                              alt=""
                              className="approahimages ts"
                            />
                          </div>
                          <div className="approach-text">
                            <Link
                              href="/servicemiddle"
                              className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                            >
                              Compliance and Registration
                            </Link>
                            <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                              From business registration to filing amendments,
                              we ensure you meet all legal requirements with
                              ease.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Benefits of Choosing Our Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Our comprehensive advisory approach focuses on efficient
                      financial planning, regulatory compliance, and strategic
                      guidance, helping you avoid costly mistakes and achieve
                      sustainable growth.
                    </p>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Start-Up Strategy
                          </p>
                        </div>
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Tax Management
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Compliance Consulting
                          </p>
                        </div>
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Tailored Financial Plans
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Amendments and Filing
                          </p>
                        </div>
                        <div className="checkservice-area">
                          <p className="font-ks font-16 lineh-16 weight-600 color-29">
                            <span>
                              <img
                                src="/assets/images/icons/check1.png"
                                alt=""
                              />
                            </span>
                            Risk Management
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Achieve long-term success with our expert support and
                      guidance tailored to your business goals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="serviceour-area">
                    <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b24">
                      Our Services
                    </h1>
                    <div className="singlepalnning-area margin-b20">
                      <Link
                        href="#"
                        className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                      >
                        Business Growth Plan
                      </Link>
                      <span>
                        <i className="fa-solid fa-angle-right ts" />
                      </span>
                    </div>
                    <div className="singlepalnning-area margin-b20">
                      <Link
                        href="#"
                        className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                      >
                        Compliance & Registration
                      </Link>
                      <span>
                        <i className="fa-solid fa-angle-right ts" />
                      </span>
                    </div>
                    <div className="singlepalnning-area margin-b20">
                      <Link
                        href="#"
                        className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                      >
                        Tax Strategy Planning
                      </Link>
                      <span>
                        <i className="fa-solid fa-angle-right ts" />
                      </span>
                    </div>
                    <div className="singlepalnning-area margin-b20">
                      <Link
                        href="#"
                        className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                      >
                        Filing & Amendments
                      </Link>
                      <span>
                        <i className="fa-solid fa-angle-right ts" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .popup-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .banner-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .close-banner {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
