import styles from './ProjectsStyles.module.css';
import viberr from '/Users/sobiajawad/portfolio-website-2/portfolio-website-2/src/assets/viberr.png';
import freshBurger from '/Users/sobiajawad/portfolio-website-2/portfolio-website-2/src/assets/fresh-burger.png';
import hipsster from '/Users/sobiajawad/portfolio-website-2/portfolio-website-2/src/assets/FemaleHeroImage.png';
import fitLift from '/Users/sobiajawad/portfolio-website-2/portfolio-website-2/src/assets/fitlift.png';
import ProjectCard from '/Users/sobiajawad/portfolio-website-2/portfolio-website-2/src/common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  )
}

export default Projects
