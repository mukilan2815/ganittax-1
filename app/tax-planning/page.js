import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={10} footerStyle={10} breadcrumbTitle="Tax Planning">
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="/assets/images/sectionimg/taxplanningimg1.png"
                      alt="Tax Planning"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Comprehensive Tax Planning
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      We specialize in proactive tax planning that minimizes
                      your liabilities and maximizes your potential savings. Our
                      expert team analyzes your unique situation to create a
                      tailored tax strategy, ensuring compliance and providing
                      peace of mind.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Get in touch with us by providing your contact details
                      like email, phone number, or using our contact form, and
                      start optimizing your tax strategy today.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Regulatory Compliance
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Effective tax planning requires not only strategic
                      foresight but also strict adherence to regulatory
                      standards. Our services include guidance on maintaining
                      compliance with the latest tax laws and regulations,
                      protecting you from potential penalties and ensuring
                      long-term financial health.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      We hold certifications from leading professional bodies,
                      such as Certified Tax Consultants (CTC) and the Institute
                      of Tax Professionals (ITP), giving our clients confidence
                      in our expertise and commitment to excellence.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Tax Strategy Development
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
                        Regulatory Compliance
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
                        Our tax consultants stay updated on the latest tax
                        regulations to help monitor and evaluate the outcomes of
                        our tax planning strategies, ensuring your business
                        stays compliant while benefiting from strategic tax
                        advantages.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Industries Benefiting from Tax Planning:
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Our tax planning expertise extends across multiple
                      sectors, including manufacturing, services, retail, and
                      finance. Our industry-specific knowledge allows us to
                      offer tailored tax strategies that maximize savings and
                      ensure compliance.
                    </p>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Business Tax Planning
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Personal Tax Planning
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
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                International Tax Advisory
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Tax Compliance Services
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
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Estate & Trust Tax Planning
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Retirement Tax Strategy
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
              src="/assets/images/elementor/taxplanningfaq.png"
              alt="Tax Planning FAQ"
              className="elementor24"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="faq-textarea margin-b60 text-center">
                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                      Learn More About Our Tax Planning
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="/assets/images/sectionimg/taxstrategy1.png"
                        alt="Tax Strategy"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Tax Strategy
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Optimize your tax obligations with a customized tax
                        strategy.
                      </p>
                      <div className="portfolio-visible-textarea margin-t">
                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                          We work with you to implement tailored solutions that
                          minimize liabilities.
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
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="/assets/images/sectionimg/taxplanning2.png"
                        alt="Compliance & Savings"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Compliance & Savings
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Stay compliant while maximizing tax savings.
                      </p>
                      <div className="portfolio-visible-textarea margin-t">
                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                          We help ensure regulatory compliance while leveraging
                          tax-saving opportunities.
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
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="/assets/images/sectionimg/taxadvice3.png"
                        alt="Advisory Services"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Advisory Services
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Expert advice for tax optimization.
                      </p>
                      <div className="portfolio-visible-textarea margin-t">
                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                          Gain insights on maximizing your financial standing
                          with effective tax planning.
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
        </div>
      </Layout>
    </>
  );
}
