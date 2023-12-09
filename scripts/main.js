window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const navbarMenu = document.getElementById("navbarMenu");
  if (!navbarMenu.style.display) {
    navbarMenu.style.display = "flex";
  } else if (navbarMenu.style.display) {
    navbarMenu.style.display = null
  }
}

function handleScroll(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

fetch("./assets/projects.json")
  .then(res => res.json())
  .then(projects => {
    const projectsList = document.getElementById("projectsList");
    projects.map(project => {
      if (project.online) {
        const newCard = document.createElement("li");
        newCard.classList.add("projectCard", "bothShadows", "animatedElement");
        newCard.innerHTML = `
        <h1 class="cardTitle ">${project.name}</h1>
        <p>${project.description}</p>
        <div class="buttonWrap">
          <a href="${project.code}" target="_blanc"><button class="projectButton">Code</button></a>
          <a href="${project.demo}" target="_blanc"><button class="projectButton">Demo</button></a>
        </div>
        <ul class="technologies">
        </ul>
        `;
        projectsList.appendChild(newCard);
        observer.observe(newCard);

        const techList = newCard.querySelector("ul");
        project.technologies.map(technology => {
          const newTech = document.createElement("li");
          newTech.innerHTML = `
            <li>
              ${technology}
            </li>
          `;
          techList.appendChild(newTech);
        })
      }
    })
  })

fetch("./assets/techStack.json")
  .then(res => res.json())
  .then(techStack => {
    const techList = document.getElementById("techList");
    techStack.map(tech => {
      const newCard = document.createElement("li");
      newCard.classList.add("bothShadows", "animatedElement");
      newCard.innerHTML = `
        <img src="${tech.icon}" alt="${tech.name} icon" title=${tech.name} />
      `;
      techList.appendChild(newCard);
      observer.observe(newCard);
    })
  })

fetch("./assets/softSkills.json")
  .then(res => res.json())
  .then(softSkills => {
    const softSkillsList = document.getElementById("softSkillsList");
    softSkills.map(softSkill => {
      const newCard = document.createElement("li");
      newCard.classList.add("largeShadow", "softSkillCard", "animatedElement");
      newCard.innerHTML = `
        <li class="softskillCard largeShadow">
          <h4 class="cardTitle">${softSkill.name}</h4>
          <p>${softSkill.description}</p>
       </li>
      `;
      softSkillsList.appendChild(newCard)
      observer.observe(newCard)
    })
  })
