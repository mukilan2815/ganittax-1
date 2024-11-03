"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import styles from "./ReferralPage.css";

export default function EnhancedReferralPage() {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const referralLink = "https://example.com/ref/yourUniqueCode";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Referral Program"
    >
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Supercharge Your Network</h1>
            <p>Amplify Your Rewards with Every Connection!</p>
            <Link href="#" className={styles.ctaButton}>
              Join Now
            </Link>
          </div>
        </section>

        <section className={styles.referralOptions}>
          <div className={styles.container}>
            <h2>Choose Your Referral Path</h2>
            <div className={styles.referralCards}>
              <div className={styles.referralCard}>
                <div
                  className={`${styles.cardHeader} ${styles.individualHeader}`}
                >
                  <h3>Individual Referral</h3>
                  <p>Perfect for friends and family</p>
                </div>
                <div className={styles.cardContent}>
                  <ul>
                    <li>5 referrals: 5% bonus</li>
                    <li>10 referrals: 10% bonus</li>
                    <li>20 referrals: 15% bonus</li>
                  </ul>
                  <Link href="#" className={styles.cardButton}>
                    Start Referring
                  </Link>
                </div>
              </div>
              <div className={styles.referralCard}>
                <div
                  className={`${styles.cardHeader} ${styles.businessHeader}`}
                >
                  <h3>Business Referral</h3>
                  <p>Ideal for professional networks</p>
                </div>
                <div className={styles.cardContent}>
                  <ul>
                    <li>5 referrals: 10% off subscription</li>
                    <li>10 referrals: 20% off subscription</li>
                    <li>20 referrals: 30% off + VIP support</li>
                  </ul>
                  <Link href="#" className={styles.cardButton}>
                    Become a Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.referralJourney}>
          <div className={styles.container}>
            <h2>Your Referral Journey</h2>
            <div className={styles.journeySteps}>
              {[
                {
                  icon: "🔗",
                  title: "Share Your Link",
                  description: "Spread the word to your network",
                },
                {
                  icon: "👥",
                  title: "They Sign Up",
                  description: "Your referrals join our community",
                },
                {
                  icon: "🎁",
                  title: "Earn Rewards",
                  description: "Enjoy bonuses as your network grows",
                },
                {
                  icon: "🚀",
                  title: "Level Up",
                  description: "Unlock higher tiers and perks",
                },
              ].map((step, index) => (
                <div key={index} className={styles.journeyStep}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.container}>
            <h2>Success Stories</h2>
            <div className={styles.testimonialGrid}>
              {[
                {
                  name: "Sarah K.",
                  role: "Individual Referrer",
                  quote:
                    "I've earned over $500 in bonuses just by referring my friends!",
                  image: "/images/avatar1.jpg",
                },
                {
                  name: "John M.",
                  role: "Business Partner",
                  quote:
                    "Our company saved 30% on our annual subscription thanks to business referrals.",
                  image: "/images/avatar2.jpg",
                },
                {
                  name: "Emily R.",
                  role: "Top Referrer",
                  quote:
                    "The referral program helped me build a thriving network and boost my career!",
                  image: "/images/avatar3.jpg",
                },
              ].map((testimonial, index) => (
                <div key={index} className={styles.testimonial}>
                  <div className={styles.testimonialHeader}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={styles.testimonialAvatar}
                    />
                    <div>
                      <h3 className={styles.testimonialName}>
                        {testimonial.name}
                      </h3>
                      <p className={styles.testimonialRole}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className={styles.testimonialQuote}>
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Ready to Start Earning?</h2>
            <p>Join our referral program today and watch your rewards grow!</p>
            <div className={styles.referralLinkContainer}>
              <input
                type="text"
                value={referralLink}
                readOnly
                className={styles.referralLinkInput}
              />
              <button onClick={copyToClipboard} className={styles.copyButton}>
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </section>

        <section className={styles.featuredRewards}>
          <div className={styles.container}>
            <h2>Featured Rewards</h2>
            <div className={styles.rewardsGrid}>
              {[
                {
                  title: "Cash Bonuses",
                  description: "Earn up to $1000 in cash rewards",
                  image: "/images/cash-bonus.jpg",
                },
                {
                  title: "Exclusive Events",
                  description: "Get VIP access to premium events",
                  image: "/images/vip-event.jpg",
                },
                {
                  title: "Product Discounts",
                  description: "Enjoy up to 50% off on select items",
                  image: "/images/discount.jpg",
                },
              ].map((reward, index) => (
                <div key={index} className={styles.rewardCard}>
                  <Image
                    src={reward.image}
                    alt={reward.title}
                    width={400}
                    height={200}
                    className={styles.rewardImage}
                  />
                  <div className={styles.rewardContent}>
                    <h3>{reward.title}</h3>
                    <p>{reward.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <button
            className={styles.closeButton}
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>
          <h3>Don't Miss Out!</h3>
          <p>Start referring today and earn up to 30% in bonuses!</p>
          <button
            className={styles.ctaButton}
            onClick={() => setShowPopup(false)}
          >
            Get Started
          </button>
        </div>
      )}
    </Layout>
  );
}
