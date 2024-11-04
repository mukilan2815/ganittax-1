"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import styles from "./referrals.module.css";

export default function ReferralsPage() {
  const [referrals, setReferrals] = useState({ individual: 0, business: 0 });
  const [discount, setDiscount] = useState(0);
  const [referralLink, setReferralLink] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);

  useEffect(() => {
    const uniqueId = Math.random().toString(36).substr(2, 6).toUpperCase();
    setReferralLink(`https://taxease.com/refer/${uniqueId}`);

    // Show initial popup after 5 seconds
    const initialTimer = setTimeout(() => setShowPopup(true), 5000);
    // Show offer popup after 30 seconds
    const offerTimer = setTimeout(() => setShowOfferPopup(true), 30000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(offerTimer);
    };
  }, []);

  useEffect(() => {
    let newDiscount = 0;
    if (referrals.individual >= 15) newDiscount += 15;
    else if (referrals.individual >= 10) newDiscount += 10;
    if (referrals.business >= 10) newDiscount += 15;
    else if (referrals.business >= 5) newDiscount += 10;
    setDiscount(newDiscount);
  }, [referrals]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Other Compliance Services"
    >
      <div className={styles.referralPage}>
        <main className={styles.mainContent}>
          <section className={styles.heroBanner}>
            <h2>Unlock Exclusive Discounts!</h2>
            <p>
              Refer friends and businesses to earn up to 30% off your next tax
              filing!
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/16820/16820244.png"
              alt="Referral rewards illustration"
              className={styles.heroImage}
            />
          </section>

          <section className={styles.referralOffers}>
            <h2>Our Referral Offers</h2>
            <div className={styles.offerGrid}>
              <div className={styles.offerCard}>
                <h3>Individual Referrals</h3>
                <ul>
                  <li>10 referrals = 10% discount</li>
                  <li>15 referrals = 15% discount</li>
                </ul>
              </div>
              <div className={styles.offerCard}>
                <h3>Business Referrals</h3>
                <ul>
                  <li>5 referrals = 10% discount</li>
                  <li>10 referrals = 15% discount</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.referralStats}>
            <h2>Your Referral Impact</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h3>Individual Referrals</h3>
                <p className={styles.statNumber}>{referrals.individual}</p>
                <p className={styles.statTarget}>
                  Next target: {referrals.individual < 10 ? 10 : 15}
                </p>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${Math.min(
                      (referrals.individual / 15) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              <div className={styles.statCard}>
                <h3>Business Referrals</h3>
                <p className={styles.statNumber}>{referrals.business}</p>
                <p className={styles.statTarget}>
                  Next target: {referrals.business < 5 ? 5 : 10}
                </p>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${Math.min((referrals.business / 10) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.currentDiscount}>
              <h3>Your Current Discount</h3>
              <p className={styles.discountAmount}>{discount}% OFF</p>
            </div>
          </section>

          <section className={styles.referralLink}>
            <h2>Your Unique Referral Link</h2>
            <div className={styles.linkContainer}>
              <span className={styles.link}>{referralLink}</span>
              <button onClick={handleCopyLink} className={styles.copyButton}>
                Copy Link
              </button>
            </div>
          </section>

          <section className={styles.howItWorks}>
            <h2>How to Refer</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <p>Copy your unique referral link above</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <p>
                  Share the link with friends, family, or business associates
                  via email, social media, or messaging apps
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <p>
                  When they click your link and sign up for TaxEase, you'll
                  automatically get credit for the referral
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <p>
                  Track your referrals and watch your discounts grow in
                  real-time!
                </p>
              </div>
            </div>
          </section>

          <section className={styles.referralTips}>
            <h2>Tips for Successful Referrals</h2>
            <ul>
              <li>Personalize your message when sharing your referral link</li>
              <li>Highlight the benefits of using TaxEase for tax filing</li>
              <li>
                Follow up with your referrals to answer any questions they might
                have
              </li>
              <li>
                Share your positive experiences with TaxEase to encourage
                sign-ups
              </li>
            </ul>
          </section>

          <section className={styles.ctaBanner}>
            <h2>Ready to Start Saving?</h2>
            <p>Share your referral link now and watch your discounts grow!</p>
            <Link href="/share" className={styles.ctaButton}>
              Share Your Link
            </Link>
          </section>
        </main>

        {showPopup && (
          <div className={styles.popup}>
            <h3>Start Referring Today!</h3>
            <p>
              Share your unique link and earn up to 30% off your next tax
              filing!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className={styles.closeButton}
            >
              Got it!
            </button>
          </div>
        )}

        {showOfferPopup && (
          <div className={styles.offerPopup}>
            <h3>Limited Time Offer!</h3>
            <p>
              Refer 3 friends in the next 24 hours and get an additional 5%
              discount!
            </p>
            <button
              onClick={() => setShowOfferPopup(false)}
              className={styles.closeButton}
            >
              I'm on it!
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
