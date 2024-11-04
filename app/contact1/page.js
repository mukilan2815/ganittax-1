'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={10} footerStyle={10} breadcrumbTitle="Contact Us">
                <div>
                    <div className="contactinner-section-area section-padding5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contcat5-textarea5">
                                        <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact
                                            Us</span>
                                        <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Contact Us for
                                            Expert Tax Services</h1>
                                        <p className="font-ks font-16 weight-500 lineh-26 color-30">
                                            At Ganit Tax Inc, we pride ourselves on delivering excellence in tax services, providing
                                            professional advice and guidance to help clients navigate their tax obligations.
                                        </p>
                                        <div className="phone7-textarea margin-t32 contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/phone8.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Give us a Call</p>
                                                <Link href="tel:+12384567894" className="font-lora font-24 weight-700 lineh-24 color-29">+1 (238) 456 7894</Link>
                                            </div>
                                        </div>
                                        <div className="phone7-textarea margin-t contactinnerbg">
                                            <div className="phone7-icon">
                                                <img src="/assets/images/icons/email7.png" alt="" />
                                            </div>
                                            <div className="phone7-text">
                                                <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Send us an Email</p>
                                                <Link href="mailto:support@ganittax.com" className="font-lora font-24 weight-700 lineh-24 color-29">support@ganittax.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact5-main-section">
                                        <div className="contact-main-text">
                                            <h1 className="font-lora font-24 lineh-24 weight-600 color">Send us a Message</h1>
                                            <p className="font-ks font-16 lineh-26 weight-500 color margin-t">
                                                As your trusted partner in comprehensive tax services, we look forward to assisting you with your needs.
                                            </p>
                                        </div>
                                        <div className="contac5-input5area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t32">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-5area margin-t">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <input type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input-5area margin-t">
                                                        <textarea cols={30} rows={10} placeholder="Message" />
                                                    </div>
                                                    <div className="contact5-btn5">
                                                        <button className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5" type="submit">
                                                            Submit Now <span><i className="fa-solid fa-arrow-right" /></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CONTACT END =======*/}

                    {/*===== FAQ STARTS=======*/}
                    <div className="faq-section-area section-padding5">
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="faq-textarea margin-b60">
                                        <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">Frequently Asked Questions
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="accordian-area accourbutton">
                                        <div className="accordion accordian4" id="accordionExample">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                What types of services does Ganit Tax Inc offer?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-22">We offer a range of services including tax preparation, bookkeeping, payroll management, tax consulting, and ITIN assistance. Our aim is to help businesses and individuals navigate their financial responsibilities efficiently.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                How does the tax preparation process work?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30">Our tax preparation process begins with a thorough review of your financial documents. We then ensure compliance with IRS regulations while maximizing your potential deductions and credits to optimize your tax outcomes.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                What industries do you specialize in?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30">We specialize in providing services to various industries including small businesses, freelancers, and individuals. Our expertise allows us to address the unique financial challenges faced by different sectors.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item m-0 bordernone">
                                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                What sets Ganit Tax Inc apart from other firms?
                                                            </button>
                                                        </h2>
                                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p className="font-ks font-16 lineh-26 weight-500 color-30">Our commitment to client-centric solutions, integrity, and continuous improvement sets us apart. We prioritize understanding your unique needs and delivering tailored strategies for your financial success.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="accordian-area accourbutton">
                                                        <div className="accordion accordian4">
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(5)}>
                                                                    <button className={isActive.key == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                                        What can I expect during an initial consultation?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseFive" className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-22">During an initial consultation, we will discuss your financial situation, understand your goals, and outline how our services can assist you. This meeting is an opportunity to ask questions and clarify any concerns.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(6)}>
                                                                    <button className={isActive.key == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                        What steps do you take to ensure compliance?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSix" className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">We stay updated with the latest tax laws and regulations. Our team conducts thorough reviews and audits of your financial records to ensure compliance and avoid any potential issues with tax authorities.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(7)}>
                                                                    <button className={isActive.key == 7 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                        Can your consulting services help with crisis management?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseSeven" className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">Yes, our team can assist with crisis management by providing expert advice and support during challenging financial situations. We help you navigate through tough times and develop strategies for recovery and resilience.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item m-0 bordernone">
                                                                <h2 className="accordion-header" onClick={() => handleClick(8)}>
                                                                    <button className={isActive.key == 8 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                                        How does data and analytics play into your consulting approach?
                                                                    </button>
                                                                </h2>
                                                                <div id="collapseEight" className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                                    <div className="accordion-body">
                                                                        <p className="font-ks font-16 lineh-26 weight-500 color-30">We leverage data and analytics to inform our strategies and recommendations. By analyzing financial data, we can identify trends, opportunities, and areas for improvement, enabling us to provide data-driven solutions for your business.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
                    </div>
                    {/*===== FAQ END=======*/}
                    {/*===== CTA STARST=======*/}
                    <div className="cta10-section-area section-padding4">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta10-header">
                                        <h1 className="font-44 font-lora lineh-52 weight-600 color margin-b">Get expert tax advice and consultation for your financial success.</h1>
                                        <p className="font-16 font-ks lineh-26 weight-500 color-21">We believe that informed clients make better financial decisions. As part of our service, we offer educational resources and personalized consultations to guide you through the complexities of taxation and financial planning.</p>
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
                </div>

            </Layout>
        </>
    )
}