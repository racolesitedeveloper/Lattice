import s from "./section-loading.module.css";

type SectionLoadingProps = {
  title?: string;
  hint?: string;
  /** Fills a navigation overlay host without double-padding the shell. */
  overlay?: boolean;
};

export default function SectionLoading({
  title = "Loading this section",
  hint = "Syncing your workspace",
  overlay = false,
}: SectionLoadingProps) {
  return (
    <div
      className={overlay ? s.wrapOverlay : s.wrap}
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading section"
    >
      <div className={s.frame}>
        <div className={s.scan} aria-hidden />

        <header className={s.head}>
          <div className={s.status}>
            <span className={s.pulse} aria-hidden />
            <span className={s.kicker}>Preparing content</span>
          </div>
          <h2 className={s.title}>{title}</h2>
          <p className={s.hint}>{hint}</p>
        </header>

        <div className={s.preview} aria-hidden>
          <div className={s.previewChrome}>
            <span className={s.chip} />
            <span className={s.chip} />
            <span className={s.chipWide} />
          </div>
          <div className={s.previewBody}>
            <div className={s.shimmerLine} />
            <div className={s.shimmerLine} />
            <div className={s.shimmerLine} />
            <div className={`${s.shimmerLine} ${s.shimmerLineShort}`} />
          </div>
        </div>

        <ol className={s.pipeline} aria-hidden>
          <li className={s.pipelineStep} data-active>
            <span className={s.pipelineDot} />
            Route
          </li>
          <li className={s.pipelineStep} data-active>
            <span className={s.pipelineDot} />
            Data
          </li>
          <li className={s.pipelineStep}>
            <span className={s.pipelineDot} />
            View
          </li>
        </ol>
      </div>
    </div>
  );
}
