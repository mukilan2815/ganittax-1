export default function Contact8() {
  return (
    <>
      <div className="contact10-section-area section-padding5">
        <img
          src="/assets/images/elementor/elementor62.png"
          alt=""
          className="elementors70"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="contact10-header text-center margin-b60">
                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">
                  Contact Us
                </span>
                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s">
                  Request A Free Consult Now!
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="zoom-out"
              data-aos-duration={1200}
            >
              <div className="contact10-section">
                <h1 className="Lora font-24 lineh-28 weight-600 colorhp3 margin-b20">
                  Send us a Message
                </h1>
                <p className="font-ks font-16 lineh-26 weight-500 color-p10 margin-b">
                  Our response time is within 30 minutes during business hours.
                </p>
                <ul className="contact-select">
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector m-0">
                    Tax Preparation
                  </li>
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector">
                    ITIN Services
                  </li>
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector">
                    Business Consulting
                  </li>
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector">
                    Payroll Services
                  </li>
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector">
                    Accounting & Bookkeeping
                  </li>
                  <li className="font-ks font-16 lineh-16 weight-600 colorhp3 selector">
                    Business Incorpatation
                  </li>
                </ul>
                <div className="contact-tabarea">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input type="text" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input type="text" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input type="number" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input type="date" placeholder="Date" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-tabcontact">
                        <input
                          type="time"
                          placeholder="Time"
                          min="09:00"
                          max="17:00"
                          step="900" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-tabcontact">
                        <textarea placeholder="Message" cols={30} rows={10} />
                      </div>
                    </div>
                    <div
                      className="consalt-contact"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <button className="font-16 font-ks lineh-16 weight-700 color contact-consult">
                        Get A Quote{" "}
                        <img src="/assets/images/icons/arrowben.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="zoom-out"
              data-aos-duration={1400}
            >
              <div className="contact10-images">
                <img
                  src="/assets/images/sectionimg/contact10img.png"
                  alt=""
                  className="contact10img"
                />
                <img
                  src="/assets/images/elementor/elementor17.png"
                  alt=""
                  className="elementors69 keyframe3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
