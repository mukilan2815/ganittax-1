"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome10() {
  const images = [
    "https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/full/1696008957-6591.jpg",
    "https://www.docsplanner.com/blogs/wp-content/uploads/2022/06/what-is-income-tax-return.jpg",
    "https://images.indianexpress.com/2024/06/Filing-income-tax-returns-is-more-than-just-a-statutory-duty-it-is-a-practice-that-fosters-financial-discipline-and-transparency.-Here-are-top-10-benefits-of-filing-ITR-on-time.-Source-Freepik.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        className="welcome10-section-area"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="header10-textarea"
                data-aos="zoom-out"
                data-aos-duration={500}
              >
                <span className="font-ks lineh-16 weight-500 color aboutspan font-16 d-inline-block margin-b24">
                  Tax Filing Services{" "}
                </span>
                <h1
                  className="font-lora font-48 lineh-54 weight-600 color margin-b24"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                >
                  Welcome to Ganit Tax Inc
                </h1>
                <p className="font-ks text-justify font-16 weight-500 color opacity2 lineh-26">
                  Your trusted partner for comprehensive tax and advisory
                  services. At Ganit Tax Inc, we go beyond conventional
                  solutions. We listen attentively to our clients, understanding
                  their unique requirements, and provide integrated services.
                  This not only ensures compliance but also empowers our clients
                  to concentrate on their core operations.
                </p>
                <div
                  className="div"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  <Link
                    href="/contact1"
                    className="font-16 font-ks weight-700 color lineh-16 homepagebtn10 d-inline-block margin-t32 ts"
                  >
                    Schedule a Meeting{" "}
                    <span>
                      <img
                        src="/assets/images/icons/arrowben.svg"
                        alt=""
                        className="ts"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5">
              <div
                className="welcome-bgarea"
                data-aos="zoom-in"
                data-aos-duration={3000}
              >
                <div
                  className="welcome-ellips"
                  data-aos="zoom-out"
                  data-aos-duration={3200}
                >
                  <img
                    src="/assets/images/background/homepagewelbg.png"
                    alt=""
                    className="homewelbg keyframe3"
                  />
                  <div className="elips-icon">
                    <img src="/assets/images/icons/export4.svg" alt="" />
                  </div>
                </div>
                <div className="welcomeellips-icon">
                  <div className="ellipsarea1">
                    <div className="exportellips">
                      <img src="/assets/images/icons/export5.svg" alt="" />
                    </div>
                    <img
                      src="/assets/images/elementor/elementor61.png"
                      alt=""
                      className="elementor60 keyframe3"
                    />
                  </div>
                </div>
                <div className="welcomeellips-icon1">
                  <div className="ellipsarea2">
                    <div className="exportellips">
                      <img src="/assets/images/icons/export6.svg" alt="" />
                    </div>
                    <img
                      src="/assets/images/elementor/elementor61.png"
                      alt=""
                      className="elementor60 keyframe3"
                    />
                  </div>
                </div>
                <div className="welcomeellips-icon2">
                  <div className="ellipsarea3">
                    <div className="exportellips">
                      <img src="/assets/images/icons/export7.svg" alt="" />
                    </div>
                    <img
                      src="/assets/images/elementor/elementor61.png"
                      alt=""
                      className="elementor60 keyframe3"
                    />
                  </div>
                </div>
                <div className="welcomeellips-icon3">
                  <div className="ellipsarea4">
                    <div className="exportellips">
                      <img src="/assets/images/icons/export8.svg" alt="" />
                    </div>
                    <img
                      src="/assets/images/elementor/elementor61.png"
                      alt=""
                      className="elementor60 keyframe3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
