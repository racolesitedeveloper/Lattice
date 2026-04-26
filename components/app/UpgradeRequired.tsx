import UpgradePlanCheckout from "./UpgradePlanCheckout";
import s from "./upgrade-required.module.css";

export default function UpgradeRequired({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section className={s.card} aria-labelledby="upgrade-required-title">
      <p className={s.kicker}>Full access</p>
      <h2 id="upgrade-required-title" className={s.title}>
        {title}
      </h2>
      <p className={s.message}>{message}</p>
      <UpgradePlanCheckout />
    </section>
  );
}
