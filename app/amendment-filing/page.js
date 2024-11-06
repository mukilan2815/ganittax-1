import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Amendment Filing"
      >
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="https://www.valuestax.com/image/VImages/19.jpg"
                      alt="Amendment Filing"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Professional Amendment Filing Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Mistakes or missed information in a tax return can be
                      corrected with an amendment filing. Our service ensures
                      that any necessary changes are processed accurately and in
                      compliance with IRS guidelines.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Let us guide you through the amendment filing process to
                      correct and update your tax records.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Efficient & Accurate Amendment Process
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Our team will carefully review your existing return,
                      identify discrepancies, and handle the filing of amended
                      forms to correct any issues.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Accuracy in Amendments
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          100%
                        </p>
                      </div>
                      <div
                        className="progress-wrap3 progress3"
                        data-progress-percent={100}
                      >
                        <div className="progress-bar3 progress3" />
                      </div>
                    </div>
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Timely Updates
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        100%
                      </p>
                    </div>
                    <div
                      className="progress-wrap3 progress3"
                      data-progress-percent={100}
                    >
                      <div className="progress-bar3 progress3" />
                    </div>
                    <div className="peragraph-pera">
                      <p className="font-ks font-16 lineh-26 weight-500 color-30 ts">
                        We ensure a smooth amendment filing process, providing
                        peace of mind and reducing potential penalties.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Our Amendment Filing Services Include:
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
                                Return Review & Analysis
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
                                Amendment Form Preparation
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
                                IRS Submission Assistance
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
              alt="Amendment FAQ"
              className="elementor24"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="faq-textarea margin-b60 text-center">
                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                      Frequently Asked Questions about Amendment Filing
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
                        alt="Eligibility for Amendments"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Eligibility for Amendments
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Learn if your tax return qualifies for an amendment.
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
                        alt="Error Correction"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Error Correction
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Fix mistakes on your original tax return with ease.
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
                        alt="Amendment Benefits"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Amendment Benefits
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Understand the advantages of filing an amended return.
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
