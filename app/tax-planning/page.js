'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [progress1, setProgress1] = useState(0); // Tax Strategy Development
  const [progress2, setProgress2] = useState(0); // Regulatory Compliance

  useEffect(() => {
    const incrementProgress1 = setInterval(() => {
      if (progress1 < 98) {
        setProgress1((prev) => prev + 1);
      } else {
        clearInterval(incrementProgress1);
      }
    }, 30); // Delay between percentage increments

    const incrementProgress2 = setInterval(() => {
      if (progress2 < 96) {
        setProgress2((prev) => prev + 1);
      } else {
        clearInterval(incrementProgress2);
      }
    }, 30); // Delay between percentage increments

    return () => {
      clearInterval(incrementProgress1);
      clearInterval(incrementProgress2);
    };
  }, [progress1, progress2]);

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
                      src="https://assets.upstox.com/content/assets/images/cms/2024216/Tax%20Planning.jfif"
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
                    {/* Progress Bar 1 */}
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Tax Strategy Development
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          {progress1}%
                        </p>
                      </div>
                      <div className="progress-wrap3">
                        <div
                          className="progress-bar3"
                          style={{ width: `${progress1}%` }}
                        />
                      </div>
                    </div>
                    {/* Progress Bar 2 */}
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Regulatory Compliance
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        {progress2}%
                      </p>
                    </div>
                    <div className="progress-wrap3">
                      <div
                        className="progress-bar3"
                        style={{ width: `${progress2}%` }}
                      />
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
        </div>
      </Layout>
    </>
  );
}
