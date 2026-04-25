import s from "./loading.module.css";

export default function AppLoading() {
  return (
    <div className={s.wrap} aria-busy="true" aria-live="polite">
      <div className={s.panel}>
        <div className={s.kicker}>Preparing content</div>
        <div className={s.title}>Loading this section</div>
        <div className={s.track} aria-hidden>
          <div className={s.indicator} />
        </div>
        <div className={s.skeleton} aria-hidden>
          <div className={s.row} />
          <div className={s.row} />
          <div className={s.rowShort} />
        </div>
      </div>
    </div>
  );
}
