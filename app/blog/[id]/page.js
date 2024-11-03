"use client";
import Layout from "@/components/layout/Layout";
import VideoPopup from "@/components/elements/VideoPopup";
import data from "@/util/blog.json";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  let Router = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const id = Router.id;

  useEffect(() => {
    setBlogPost(data.find((data) => data.id == id));
  }, [id]);

  return (
    <>
      <Layout headerStyle={10} footerStyle={10} breadcrumbTitle="Blog Middle">
        {blogPost && (
          <>
            <div className="blogleft-section-area section-padding5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-1" />
                  <div className="col-lg-10">
                    <div className="blogleftinner3-area p-0">
                      <img
                        src={`/assets/images/sectionimg/${blogPost.img}`}
                        alt=""
                        className="w-100 innerimg"
                      />
                      <div className="afteralex-area">
                        <div className="alex">
                          <img
                            src="/assets/images/sectionimg/alex1.png"
                            alt=""
                          />
                          <Link href="#" className="color-29">
                            <p className="font-ks font-16 lineh-24 weight-600 color-29">
                              Alex Robartson
                            </p>
                          </Link>
                        </div>
                        <div className="alex">
                          <img src="/assets/images/icons/daterane.png" alt="" />
                          <Link
                            href="#"
                            className="font-16 lineh-16 font-ks weight-600 color-29"
                          >
                            05 Jun 2023
                          </Link>
                        </div>
                        <div className="alex">
                          <img src="/assets/images/icons/tag1.png" alt="" />
                          <Link href="#" className="color-29">
                            <p className="font-ks font-16 lineh-24 weight-600 color-29">
                              Business Evaluation
                            </p>
                          </Link>
                        </div>
                        <div className="alex alex1">
                          <img src="/assets/images/icons/cmnt1.svg" alt="" />
                          <Link href="#" className="color-29">
                            <p className="font-ks font-16 lineh-24 weight-600 color-29">
                              2 Comments
                            </p>
                          </Link>
                        </div>
                      </div>
                      <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                        {" "}
                        {blogPost.title}
                      </h1>
                      <p className="font-ks fotn-16 weight-500 lineh-26 color-30  margin-b20">
                        It is important for leaders to pause and brainstorm
                        ideas to help employees rejuvenate. Companies often
                        believe that devoting work hours to team socialization
                        is a waste of time. Let us consider a situation. Imagine
                        a book with no spaces. Yes, all the words put together
                        with the aim to make sense and deliver knowledge but
                        without spaces. Will it be of any use? What value can it
                        provide one it? All it can lead to is stress and
                        confusion. Hence, it is important to take breaks. It is
                        important.
                      </p>
                      <p className="font-ks fotn-16 weight-500 lineh-26 color-30 ">
                        Our mission is to be more than just consultants – we aim
                        to be your strategic partners, working collaboratively
                        to transform your vision into reality. By combining
                        industry insights with tailored solutions, we help you
                        navigate the complexities of today's business landscape
                        and achieve.
                      </p>
                      <div className="border30" />
                      <img
                        src="/assets/images/sectionimg/blogleftimg2.png"
                        alt=""
                        className="w-100 innerimg"
                      />
                      <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t32">
                        Organizational Development And Leadership Consulting
                      </h1>
                      <p className="font-ks fotn-16 weight-500 lineh-26 color-30  margin-b20">
                        With years of experience across a diverse range of
                        industries, we understand the challenges you face. Our
                        proven track record of delivering results speaks to our
                        commitment to excellence. Whether you're a startup
                        seeking to disrupt the market or an established
                        corporation looking to streamline operations, our
                        tailored approach ensures that your unique needs are
                        met.
                      </p>
                      <div className="checkservice-area">
                        <ul>
                          <li>
                            <p className="font-ks font-16 lineh-16 weight-600 color-29">
                              <span>
                                <img
                                  src="/assets/images/icons/check1.png"
                                  alt=""
                                />
                              </span>
                              Share your expert insights, tips, and advice
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
                                  alt=""
                                />
                              </span>
                              Detail your consulting process and methodology
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
                                  alt=""
                                />
                              </span>
                              Include a contact form for visitors to submit
                              inquiries
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="checkservice-area m-0">
                        <ul>
                          <li>
                            <p className="font-ks font-16 lineh-16 weight-600 color-29">
                              <span>
                                <img
                                  src="/assets/images/icons/check1.png"
                                  alt=""
                                />
                              </span>
                              List the industries you specialize in and have
                              experience with
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="peragraph-pera peragraeabg">
                        <p className="font-16 font-ks font-16 lineh-26 weight-500 color ts">
                          Don't just take our word for it. Explore our case
                          studies to see how we've transformed to be businesses
                          like yours. Discover how we've helped companies
                          increase market share, boost a revenues, and enhance
                          their competitive edge. Digital Transformation:
                          Leverage technology to transform your business and
                          meet evolving customer demands.
                        </p>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="moda-blog-area">
                            <div className="modal-img">
                              <img
                                src="/assets/images/sectionimg/modalimg1.png"
                                alt=""
                              />
                            </div>
                            <VideoPopup />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="modal-textarea">
                            <h1 className="font-24 font-lora weight-500 color-29 margin-b20">
                              Unleash Your Business Potential
                            </h1>
                            <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                              {" "}
                              These titles can help create a compelling
                              narrative that encourages visitors to explore
                              further and engage with your business.
                            </p>
                            <div className="checkservice-area">
                              <ul>
                                <li>
                                  <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                    <span>
                                      <img
                                        src="/assets/images/icons/check1.png"
                                        alt=""
                                      />
                                    </span>
                                    Business Planning
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
                                        alt=""
                                      />
                                    </span>
                                    International Business{" "}
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
                                        alt=""
                                      />
                                    </span>
                                    Business Finance Planning
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border30 borderpadding" />

                      <div className="boredr30 borderpadding1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*===== CTA STARST=======*/}
            <div className="cta5-section-area section-padding4">
              <img
                src="/assets/images/elementor/elementor72.png"
                alt=""
                className="elementors72"
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="cta5-auhtor6-area">
                      <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                        Get expert Law advice on criminal strategies
                      </h1>
                      <p className="font-ks font-16 lineh-26 weight-500 color-21">
                        We believe that informed clients make better Law
                        decisions. As part of our service, we'll provide
                        educational resources and workshops to help.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2" />
                  <div className="col-lg-4">
                    <div className="cta5-btn5-sexction">
                      <Link
                        href="/contact1"
                        className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16"
                      >
                        Get Law Advice
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                      <Link
                        href="/contact2"
                        className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16"
                      >
                        Contact Us
                        <span>
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/assets/images/elementor/elementor72.png"
                alt=""
                className="elementors73"
              />
            </div>
          </>
        )}
      </Layout>
    </>
  );
}
