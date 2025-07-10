const doctors = [
  {
    id: 1,
    name: "Dr. Arafat Hossain",
    specialty: "cardiologist",
    experience: 12,
    photo: "images/arafat.jpg",
  },
  {
    id: 2,
    name: "Dr. Abdullah Tausin",
    specialty: "Dentistry",
    experience: 8,
    photo: "images/tausin.jpg",
  },
  {
    id: 3,
    name: "Dr. Jhonny",
    specialty: "Gynecology",
    experience: 50,
    photo: "images/johnny.jpg",
  },
  {
    id: 4,
    name: "Dr. David Lee",
    specialty: "Psychiatry",
    experience: 15,
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 5,
    name: "Dr. Laura Brown",
    specialty: "Anesthesiology",
    experience: 9,
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialty: "Colorectal Surgery",
    experience: 7,
    photo: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const searchBox = document.getElementById("searchBox");
const categoryFilters = document.querySelectorAll(".category-filters input[type=checkbox]");
const doctorList = document.getElementById("doctorList");

// Render doctor cards
function renderDoctors(filteredDoctors) {
  if (filteredDoctors.length === 0) {
    doctorList.innerHTML = `<p style="text-align:center; font-size:1.2rem; color:#777;">No doctors found.</p>`;
    return;
  }

  doctorList.innerHTML = filteredDoctors
    .map(
      (doc) => `
    <article class="doctor-card" tabindex="0" aria-label="Doctor ${doc.name}, specialty ${doc.specialty}">
      <img class="doctor-photo" src="${doc.photo}" alt="Photo of ${doc.name}" />
      <h2 class="doctor-name">${doc.name}</h2>
      <p class="doctor-specialty">${doc.specialty}</p>
      <p class="doctor-experience">${doc.experience} years of experience</p>
      <button class="book-btn" aria-label="Book appointment with ${doc.name}">Book Now</button>
    </article>
  `
    )
    .join("");
}

// Filter doctors based on search and categories
function filterDoctors() {
  const searchTerm = searchBox.value.trim().toLowerCase();
  const selectedCategories = Array.from(categoryFilters)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const filtered = doctors.filter((doc) => {
    const matchesName = doc.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(doc.specialty);
    return matchesName && matchesCategory;
  });

  renderDoctors(filtered);
}

// Event listeners
searchBox.addEventListener("input", filterDoctors);
categoryFilters.forEach((cb) => cb.addEventListener("change", filterDoctors));

// Initial render
renderDoctors(doctors);
