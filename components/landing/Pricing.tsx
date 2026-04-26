import Link from "next/link";
import { Check, Lock } from "@phosphor-icons/react/ssr";
import PricingFullTierBilling from "@/components/landing/PricingFullTierBilling";
import s from "./Pricing.module.css";

const freeItems = [
  "Physics, Chemistry, and Biology topic maps",
  "Study notes for the first 3 topics per subject",
  "Drill questions and flashcards for the first 3 topics",
  "Progress tracking on included topics",
];

const fullItems = [
  "Everything in Free",
  "Full notes and practice for all topics and subtopics",
  "All three subjects, fully unlocked",
  "Mistakes archive — every wrong answer saved permanently",
  "Filter and retry mistakes by topic before exams",
];

export default function Pricing({ isSignedIn = false }: { isSignedIn?: boolean }) {
  return (
    <section id="pricing" className={s.section} aria-labelledby="pricing-heading">
      <div className={s.inner}>

        {/* Heading */}
        <div className={s.intro}>
          <span className={s.eyebrow}>Pricing</span>
          <h2 className={s.heading} id="pricing-heading">
            Simple pricing.<br />No surprises.
          </h2>
          <p className={s.sub}>
            Start free. Upgrade when you need the full course.
          </p>
        </div>

        {/* Tier grid */}
        <div className={s.tiers}>

          {/* Free tier */}
          <div className={s.tierFree}>
            <div className={s.tierTitleSlot}>
              <span className={s.tierName}>Free</span>
            </div>
            <div className={s.tierPrice}>
              <span className={s.priceAmount}>$0</span>
            </div>
            <p className={s.tierDesc}>
              Get started with the first three topics of each subject — no card required.
            </p>

            <ul className={s.featureList} aria-label="Free tier features">
              {freeItems.map((item) => (
                <li key={item} className={s.featureItem}>
                  <Check className={s.checkIcon} size={16} weight="bold" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              <li className={`${s.featureItem} ${s.featureItemLocked}`}>
                <Lock className={s.lockIcon} size={16} weight="bold" aria-hidden />
                <span>Mistakes archive</span>
              </li>
              <li className={`${s.featureItem} ${s.featureItemLocked}`}>
                <Lock className={s.lockIcon} size={16} weight="bold" aria-hidden />
                <span>Topics 4 and beyond</span>
              </li>
            </ul>

            <Link href={isSignedIn ? "/dashboard" : "/signup"} className={s.ctaFree}>
              {isSignedIn ? "Open the app" : "Get started free"}
            </Link>
          </div>

          {/* Divider */}
          <div className={s.tierDivider} aria-hidden="true" />

          {/* Full tier */}
          <div className={s.tierFull}>
            <PricingFullTierBilling
              isSignedIn={isSignedIn}
              planTitle={
                <div className={s.fullTierTitleBlock}>
                  <span className={`${s.tierName} ${s.fullTierTitle}`}>Full access</span>
                  <span className={s.badge}>Recommended</span>
                </div>
              }
            >
              <p className={s.tierDesc}>
                Everything, for every topic, across all three subjects. Cancel any time.
              </p>

              <ul className={s.featureList} aria-label="Full access tier features">
                {fullItems.map((item) => (
                  <li key={item} className={s.featureItem}>
                    <Check className={s.checkIcon} size={16} weight="bold" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PricingFullTierBilling>
          </div>

        </div>

        {/* Reassurance line */}
        <p className={s.reassurance}>
          All content is specific to Cambridge International A Level — Physics, Chemistry, and Biology only.
          Not a generic revision platform.
        </p>

      </div>
    </section>
  );
}
