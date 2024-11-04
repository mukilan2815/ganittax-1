import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={10} footerStyle={10} breadcrumbTitle="About US">
        <div>
          {/*===== ABOUT STARTS=======*/}
          <div className="about3-section-area section-padding5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about3-images1">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1679922879581-5ff33fce0e5a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <img
                      src="/assets/images/elementor/elementor17.png"
                      alt=""
                      className="elementor-9 keyframe3"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about3-textarea1">
                    <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">
                      About Us
                    </span>
                    <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">
                      Welcome to Ganit Tax Inc
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      At Ganit Tax Inc, we go beyond traditional financial
                      services. We’re dedicated partners in your success,
                      committed to delivering excellence and integrity in US
                      Taxation, Accounting, Bookkeeping, Tax Consulting,
                      Payroll, and more.
                    </p>
                    <h2 className="font-lora font-24 lineh-32 weight-600 color-29 margin-b20">
                      Our Values
                    </h2>
                    <ul className="font-ks font-16 lineh-26 weight-500 color-30">
                      <li>
                        <strong>Client-Centric Approach:</strong> Your needs
                        come first.
                      </li>
                      <li>
                        <strong>Continuous Improvement:</strong> Adapting and
                        innovating with the financial landscape.
                      </li>
                      <li>
                        <strong>Ethical Standards:</strong> Upholding integrity
                        and transparency.
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

          {/*===== ABOUT END=======*/}
          {/*===== LAW PROVIDE STARTS =======*/}
          <div className="lawprovide-section-area section-padding5">
            <img
              src="/assets/images/elementor/elementor23.png"
              alt=""
              className="elementor24"
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="lawprovide-textarea">
                    <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">
                      GanitTax: Your Partner in Comprehensive Tax Solutions
                    </h1>
                    <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                      At GanitTax, we offer a wide range of services including
                      bookkeeping, payroll management, tax filing, and
                      preparation. Our goal is to help businesses navigate their
                      financial obligations with ease and confidence.
                    </p>
                    <p className="font-ks font-16 weight-500 lineh-26 color-30">
                      Our dedicated team of tax professionals is committed to
                      providing accurate, reliable, and up-to-date tax advice
                      tailored to your specific needs. Trust us to optimize your
                      tax strategies and ensure compliance.
                    </p>
                    <Link
                      href="/team"
                      className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                    >
                      Meet Our Team
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="lawprovide-boaxrea margin-b30">
                    <div className="guidiance-boxarea">
                      <img
                        src="/assets/images/icons/gudeiance1.svg"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="lax-conultingprovide">
                      <Link href="/servicemiddle" className="color-29">
                        <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                          Bookkeeping Services
                        </h1>
                      </Link>
                      <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                        Accurate bookkeeping is essential for your business. We
                        help you maintain organized financial records to keep
                        your operations running smoothly.
                      </p>
                    </div>
                  </div>
                  <div className="lawprovide-boaxrea margin-b30">
                    <div className="guidiance-boxarea">
                      <img
                        src="/assets/images/icons/consulting1.svg"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="lax-conultingprovide">
                      <Link href="/servicemiddle" className="color-29">
                        <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                          Payroll Management
                        </h1>
                      </Link>
                      <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                        Let us handle your payroll processing. We ensure timely
                        and accurate payroll, compliance with tax regulations,
                        and peace of mind for your business.
                      </p>
                    </div>
                  </div>
                  <div className="lawprovide-boaxrea">
                    <div className="guidiance-boxarea">
                      <img
                        src="/assets/images/icons/support1.svg"
                        alt=""
                        className="ts"
                      />
                    </div>
                    <div className="lax-conultingprovide">
                      <Link href="/servicemiddle" className="color-29">
                        <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b14 ts">
                          Tax Filing & Preparation
                        </h1>
                      </Link>
                      <p className="font-ks lineh-26 weight-500 color-30 font-16 ts">
                        Our tax experts are here to assist you with all your tax
                        filing and preparation needs, ensuring compliance and
                        maximizing your tax benefits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/elementor/elementor23.png"
              alt=""
              className="elementor25"
            />
          </div>

          {/*===== LAW PROVIDE END=======*/}
          {/*===== MISSION STARTS=======*/}
          <div className="mission-area-starts section-padding5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="missionimg">
                    <img
                      src="/assets/images/sectionimg/missionimg1.png"
                      alt=""
                      className="missionimg2"
                    />
                    <img
                      src="/assets/images/elementor/elementor17.png"
                      alt=""
                      className="elementor-9 keyframe3"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="missiontextarea">
                    <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">
                      Our Mission
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      At GanitTax, our mission is to provide exceptional tax and
                      financial services that empower our clients to achieve
                      their financial goals. We focus on bookkeeping, payroll,
                      and tax filing to streamline your business operations.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      We are committed to delivering accurate and timely
                      solutions, ensuring compliance, and providing peace of
                      mind in all financial matters.
                    </p>
                    <ul>
                      <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                        <span>
                          <img src="/assets/images/icons/check1.png" alt="" />
                        </span>
                        Client-Focused Solutions and Results
                      </li>
                      <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                        <span>
                          <img src="/assets/images/icons/check1.png" alt="" />
                        </span>
                        Tailored Financial Strategies to Meet Your Needs
                      </li>
                      <li className="font-ks font-16 lineh-16 weight-600 color-17 margin-b20">
                        <span>
                          <img src="/assets/images/icons/check1.png" alt="" />
                        </span>
                        Proactive Tax Planning and Compliance
                      </li>
                      <li className="font-ks font-16 lineh-16 weight-600 color-17">
                        <span>
                          <img src="/assets/images/icons/check1.png" alt="" />
                        </span>
                        A team of dedicated and experienced tax professionals
                      </li>
                    </ul>
                    <Link
                      href="/servicev1"
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

          {/*===== MISSION END=======*/}
          {/*===== VISSION STARTS=======*/}
          <div className="vission-section-area section-padding5">
            <img
              src="/assets/images/elementor/elementor23.png"
              alt=""
              className="elementor24"
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="vission-textarea">
                    <h1 className="font-48 lineh-56 font-lora weight-600 color-29 margin-b20">
                      The First Choice For Your Financial Needs
                    </h1>
                    <p className="font-16 lineh-26 weight-500 color-30 margin-b24">
                      At GanitTax, we strive to be your trusted partner in
                      navigating the complexities of finance and taxation. Our
                      dedicated team is here to listen to your unique concerns
                      and offer tailored solutions that help you succeed.
                    </p>
                    <div className="border7 margin-b20" />
                    <div className="nav-section-area">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active nav-btn1"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            Our Vision
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link nav-btn1"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Our History
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link nav-btn1"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            Why Choose Us
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                          tabIndex={0}
                        >
                          <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                            <span className="weight-700 color-29">
                              Client-Focused Approach:
                            </span>{" "}
                            Our clients are at the heart of everything we do. We
                            take the time to understand your needs, ensuring we
                            provide solutions that truly fit your financial
                            goals.
                          </p>
                          <p className="font-ks font-16 weight-500 lineh-26 color-30">
                            <span className="weight-700 color-29">
                              Commitment to Excellence:
                            </span>{" "}
                            We are dedicated to providing the highest quality of
                            service, backed by our expertise and commitment to
                            your financial well-being.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                          tabIndex={0}
                        >
                          <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                            <span className="weight-700 color-29">
                              Our Legacy:
                            </span>{" "}
                            With years of experience in the industry, we have
                            built a reputation for reliability and integrity.
                            Our history is one of growth, innovation, and a
                            steadfast commitment to our clients.
                          </p>
                          <p className="font-ks font-16 weight-500 lineh-26 color-30">
                            <span className="weight-700 color-29">
                              Milestones:
                            </span>{" "}
                            We take pride in our achievements, having helped
                            numerous clients achieve their financial goals
                            through personalized service and expert guidance.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                          tabIndex={0}
                        >
                          <p className="font-ks font-16 weight-500 lineh-26 margin-b20 color-30">
                            <span className="weight-700 color-29">
                              Trusted Expertise:
                            </span>{" "}
                            Our team consists of highly skilled professionals
                            who are committed to staying updated with the latest
                            industry trends and regulations.
                          </p>
                          <p className="font-ks font-16 weight-500 lineh-26 color-30">
                            <span className="weight-700 color-29">
                              Comprehensive Support:
                            </span>{" "}
                            We provide a full range of services to meet your
                            financial needs, ensuring you have the support you
                            require to succeed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/servicev1"
                      className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32"
                    >
                      Get Started Now
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="vissionimages">
                    <img
                      src="/assets/images/sectionimg/vissionimg.png"
                      alt=""
                    />
                    <img
                      src="/assets/images/elementor/elementor17.png"
                      alt=""
                      className="elementor-23 keyframe3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/elementor/elementor23.png"
              alt=""
              className="elementor25"
            />
          </div>

          {/*===== VISSION END=======*/}
          {/*===== TEAM STARTS=======*/}
          <div className="team1-section-area section-padding8">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="team-section-textarea text-center margin-b60">
                    <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">
                      Our Expert 
                    </span>
                    <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">
                      Meet Our Expert Tax <br /> Filing Team
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 margin-b30 col-md-6">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img src="/assets/images/sectionimg/team1.png" alt="" />
                    </div>
                    <div className="project-content-two">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-pera text-center margin-t">
                      <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                        <Link href="/team" className="color-29">
                          Johnathan Stehr
                        </Link>
                      </h1>
                      <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                        Subject Matter Experts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30 col-md-6">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img src="/assets/images/sectionimg/team2.png" alt="" />
                    </div>
                    <div className="project-content-two">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-pera text-center margin-t">
                      <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                        <Link href="/team" className="color-29">
                          Brian Ebert DVM
                        </Link>
                      </h1>
                      <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                        Educational Consultantst
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30 col-md-6">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img src="/assets/images/sectionimg/team1.png" alt="" />
                    </div>
                    <div className="project-content-two">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-pera text-center margin-t">
                      <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                        <Link href="/team" className="color-29">
                          Marion Blanda PhD
                        </Link>
                      </h1>
                      <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                        Nonprofit Consultants
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 margin-b30 col-md-6">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img src="/assets/images/sectionimg/team3.png" alt="" />
                    </div>
                    <div className="project-content-two">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-x-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="team-pera text-center margin-t">
                      <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12">
                        <Link href="/team" className="color-29">
                          Warren Predovic
                        </Link>
                      </h1>
                      <p className="font-16 lineh-16 weight-500 color-30 font-ks">
                        Technology Consultantst
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== TEAM END=======*/}
          {/*===== CTA STARST=======*/}
          <div className="cta10-section-area section-padding4">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="cta10-header">
                    <h1 className="font-44 font-lora lineh-52 weight-600 color margin-b">
                      Get expert tax advice and consultation for your financial
                      success.
                    </h1>
                    <p className="font-16 font-ks lineh-26 weight-500 color-21">
                      We believe that informed clients make better financial
                      decisions. As part of our service, we offer educational
                      resources and personalized consultations to guide you
                      through the complexities of taxation and financial
                      planning.
                    </p>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="cta10-btnarea">
                    <Link
                      href="/contact1"
                      className="font-ks font-16 lineh-16 color weight-700 solutions11"
                    >
                      Schedule an Apointment{" "}
                      <span>
                        <img src="/assets/images/icons/arrowgreen.svg" alt="" />
                      </span>
                    </Link>
                    <Link
                      href="/contact1"
                      className="font-ks font-16 lineh-16 color-h10 weight-700 solutions12"
                    >
                      Contact Us{" "}
                      <span>
                        <img src="/assets/images/icons/arrowgreen.svg" alt="" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== CTA END=======*/}
        </div>
      </Layout>
    </>
  );
}
