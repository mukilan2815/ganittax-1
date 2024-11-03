import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="ITIN Assistance"
      >
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="https://via.placeholder.com/800x400"
                      alt="ITIN Assistance"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Professional ITIN Assistance Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      We offer comprehensive support for obtaining an Individual
                      Taxpayer Identification Number (ITIN) to meet IRS
                      requirements for individuals without a Social Security
                      Number (SSN).
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Reach out to us to simplify your ITIN application and
                      filing process.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Streamlined Application Process
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Our team ensures that your ITIN application process is
                      smooth, accurate, and fully compliant with IRS guidelines,
                      reducing any potential delays or complications.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Application Accuracy
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          98%
                        </p>
                      </div>
                      <div
                        className="progress-wrap3 progress3"
                        data-progress-percent={98}
                      >
                        <div className="progress-bar3 progress3" />
                      </div>
                    </div>
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Compliance Support
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        96%
                      </p>
                    </div>
                    <div
                      className="progress-wrap3 progress3"
                      data-progress-percent={96}
                    >
                      <div className="progress-bar3 progress3" />
                    </div>
                    <div className="peragraph-pera">
                      <p className="font-ks font-16 lineh-26 weight-500 color-30 ts">
                        Stay assured with our expert guidance to navigate
                        through each step of the ITIN application and compliance
                        process.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Our ITIN Assistance Includes:
                    </h1>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                ITIN Application Preparation
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                Document Verification
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                Follow-up Support
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-section-area section-padding8">
            <img
              src="https://via.placeholder.com/1200x400"
              alt="ITIN FAQ"
              className="elementor24"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="faq-textarea margin-b60 text-center">
                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                      Frequently Asked Questions about ITIN
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Quick Processing"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Quick Processing
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Get your ITIN application processed quickly and
                        efficiently.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Expert Guidance"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Expert Guidance
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Our team provides expert advice for every step of the
                        ITIN process.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Reliable Support"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Reliable Support
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Receive ongoing assistance to ensure a smooth
                        application.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
