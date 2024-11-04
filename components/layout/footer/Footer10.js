import Link from "next/link";

export default function Footer10() {
  return (
    <>
      <div className="footer4-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contcat5-section5-area section-padding15">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="contact5-logo5-text1">
                      <img
                        src="/assets/images/logo/logo.png"
                        alt="Ganit Tax Logo"
                      />
                      <p className="font-ks font-16 weight-500 lineh-26 color32 margin-t margin-b24 text-justify">
                        Ganit Tax, Inc provides expert tax preparation and
                        consulting services for individuals and businesses. We
                        ensure you stay compliant and focused on your primary
                        operations.
                      </p>
                      <div className="icon-social-links">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fa-brands fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-google-plus-g" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="ml1">
                              <i className="fa-brands fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <div className="about-5-links footer10links about40links">
                      <h1 className="font-20 font-lora weight-600 lineh-20 color">
                        Quick Links
                      </h1>

                      <li>
                        <Link
                          href="/tax-planning"
                          className="font-ks font-16 lineh-16 weight-500 color32 d-inline-block margin-t32"
                        >
                          Tax Planning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tax-preparation"
                          className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block"
                        >
                          Tax Preparation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/itin-assistance"
                          className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block"
                        >
                          ITIN Assistance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/fbar-fatca"
                          className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block"
                        >
                          FBAR & FATCA Filing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/amendment-filing"
                          className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block"
                        >
                          Amendment Filing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="contact-footer contactfooter10">
                      <h1 className="font-20 color lineh-20 font-lora margin-b24 weight-600">
                        Contact Us
                      </h1>
                      <div className="email4">
                        <img src="/assets/images/icons/email4.svg" alt="" />
                        <Link
                          href="mailto:info@ganittax.com"
                          className="font-16 lineh-24 color32 weight-400 font-ks"
                        >
                          support@ganittax.com
                        </Link>
                      </div>
                      <span className="location-fooetr ">
                        <img
                          src="/assets/images/icons/location2.png"
                          alt=""
                          className="heightwidth"
                        />
                        <Link
                          href="#"
                          className="font-16 font-ks lineh-26 weight-500 color32 margin-t"
                        >
                          {" "}
                          Delaware: 8 The Green <br />
                          Dover, DE 19901 <br />
                          GA: 6065 Roswell Road, #450 <br />
                          Atlanta, GA 30328-4011
                        </Link>
                      </span>
                      <div className="email4 margin-t">
                        <img src="/assets/images/icons/phone5.svg" alt="" />
                        <Link
                          href="tel:123-456-7890"
                          className="font-16 lineh-24 color32 weight-400 font-ks"
                        >
                          +1 (678) 648-6333
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contactcta5-form">
                      <div className="contact6-ctafrom8">
                        <h1 className="font-20 font-lora weight-600 lineh-20 color">
                          Subscribe Our Newsletter
                        </h1>
                        <form className="form7">
                          <input type="text" placeholder="Enter Your email" />
                          <div className="contact5-btn15">
                            <button className="font-16 font-ks lineh-16 weight-700 color contact-consult">
                              Get A Quote{" "}
                              <img
                                src="/assets/images/icons/arrowben.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/assets/images/elementor/elementor69.png"
                  alt=""
                  className="elementors18"
                />
              </div>
              <div className="border7" />
              <div className="copyright6 text-center">
                <p className="font-ks lineh-26 weight-500 font-16 color32">
                  © Copyright {new Date().getFullYear()} Ganit Tax, Designed by
                  MobiFish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
