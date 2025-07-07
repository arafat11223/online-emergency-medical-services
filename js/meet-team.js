const members = [
  {
    name: "Arafat Hossain",
    varsity: "International Islamic University Chittagong",
    photo: "images/arafat.jpg",
    facebook: "https://www.facebook.com/share/1Zp9R4H7by/",
    github: "https://github.com/arafat11223",
  },
  {
    name: "Rafew",
    varsity: "International Islamic University Chittagong",
    photo: "images/rafew.jpg",
    facebook: "https://www.facebook.com/irfanul.karim.853943",
    github: "https://github.com/ANRafew",
  },
  {
    name: "Irfanul Karim",
    varsity: "International Islamic University Chittagong",
    photo: "images/Irfan.png",
    facebook: "https://www.facebook.com/share/1AiEoPHLdt/",
    github: "https://github.com/Irfan-IIUC-197",
  },
  {
    name: "Abdullah Tausin",
    varsity: "International Islamic University Chittagong",
    photo: "images/tausin.jpg",
    facebook: "https://www.facebook.com/share/16oUHkRgbY/",
    github: "https://github.com/Irfan-IIUC-197",
  },
];

const container = document.getElementById("membersContainer");

function renderMembers() {
  container.innerHTML = members
    .map(
      (member) => `
    <article class="member-card" tabindex="0" aria-label="Group member ${member.name}">
      <img class="member-photo" src="${member.photo}" alt="Photo of ${member.name}" />
      <h2 class="member-name">${member.name}</h2>
      <p class="member-varsity">${member.varsity}</p>
      <div class="social-links">
        <a href="${member.facebook}" aria-label="Facebook profile of ${member.name}">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="${member.github}" aria-label="GitHub profile of ${member.name}">
          <i class="fab fa-github-square"></i>
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

// Initial render
renderMembers();
