import PropTypes from "prop-types";
import HeroShell from "./HeroShell";
import { Split } from "./heroKit";

/** project: { title, category, description, image, client, year, timeline, team } */
export default function ProjectDetailHero({ project, info: infoProp, onBack = () => {} }) {
  const info = infoProp ?? [["Client", project.client], ["Year", project.year], ["Timeline", project.timeline], ["Engineering Team", project.team]];
  return (
    <HeroShell
      align="left"
      eyebrow={`${project.category} · Production Case Study`}
      title={<Split text={project.title} mode="words" grad />}
      sub={project.description}
      actions={<button type="button" className="hero-btn primary" onClick={onBack}>← Back to Portfolio</button>}
      build={({ q, intro, scrub }) => {
        intro.fromTo(q(".pd-frame"), { clipPath: "inset(100% 0% 0% 0% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.9, ease: "expo.inOut" }, 0.9);
        intro.fromTo(q(".pd-img"), { scale: 1.55 }, { scale: 1, duration: 2.4, ease: "expo.out" }, 0.9);
        intro.from(q(".pd-cell"), { autoAlpha: 0, y: 30, duration: 1, stagger: 0.1 }, 2.0);
        scrub.to(q(".pd-img"), { yPercent: 14, scale: 1.14, duration: 1 }, 0);
      }}
    >
      <div className="pd-frame">
        <img
          className="pd-img"
          src={project.image}
          alt={`${project.title} preview`}
          loading="eager"
          // eslint-disable-next-line react/no-unknown-property
          fetchpriority="high"
        />
      </div>
      <div className="pd-info">
        {info.map(([k, v]) => v && (<div key={k} className="pd-cell hero-glass"><small>{k}</small><b>{v}</b></div>))}
      </div>
    </HeroShell>
  );
}

ProjectDetailHero.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    client: PropTypes.string,
    year: PropTypes.string,
    timeline: PropTypes.string,
    team: PropTypes.string,
  }).isRequired,
  info: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  onBack: PropTypes.func,
};
