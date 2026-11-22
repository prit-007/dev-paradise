import PropTypes from "prop-types";
import HeroShell from "./HeroShell";
import { Split } from "./heroKit";

/** member: { name, title, description, specialty, email, linkedin, github, initials }
 *  renderAvatar: optionally pass your <TeamAvatar/> render fn to reuse the photo + onError fallback. */
export default function TeamProfileHero({ member, renderAvatar, onBack }) {
  const giant = member.name.toUpperCase();
  return (
    <HeroShell
      align="left"
      eyebrow={member.specialty || "Darshan University Core Engineer"}
      title={<Split text={member.name} grad />}
      sub={`${member.title} — ${member.description}`}
      actions={
        <>
          {onBack && <button type="button" className="hero-btn" onClick={onBack}>← Team</button>}
          {member.email && <a className="hero-btn primary" href={`mailto:${member.email}`}>Email {member.name.split(" ")[0]}</a>}
          {member.linkedin && <a className="hero-btn" href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {member.github && <a className="hero-btn" href={member.github} target="_blank" rel="noreferrer">GitHub</a>}
        </>
      }
      bgExtra={<div className="tp-giant" aria-hidden="true"><span className="outline">{giant}</span><span className="fill">{giant}</span></div>}
      build={({ q, intro, scrub }) => {
        intro.from(q(".tp-giant"), { autoAlpha: 0, scale: 1.2, duration: 2.4, ease: "expo.out" }, 0.2);
        intro.from(q(".tp-avatar"), { scale: 0.4, rotate: -90, autoAlpha: 0, duration: 1.8, ease: "expo.out" }, 1.0);
        scrub.fromTo(q(".tp-giant .fill"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 1 }, 0);
        scrub.to(q(".tp-giant"), { xPercent: -8, duration: 1 }, 0);
        scrub.to(q(".tp-avatar"), { yPercent: 18, scale: 0.85, duration: 1 }, 0);
      }}
    >
      <div className="tp-avatar">
        <div className="tp-avatar-inner">{renderAvatar ? renderAvatar() : <b>{member.initials}</b>}</div>
      </div>
    </HeroShell>
  );
}

TeamProfileHero.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    specialty: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    initials: PropTypes.string,
  }).isRequired,
  renderAvatar: PropTypes.func,
  onBack: PropTypes.func,
};
