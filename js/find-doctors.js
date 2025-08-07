const doctors = [
  {
    id: 1,
    name: "Dr. Tanvir Ahmed Khan",
    specialty: "cardiologist",
    experience: 12,
    photo: "images/Cardiologist.jpg",
  },
  {
    id: 2,
    name: "Dr. Nusrat Jahan Tuli",
    specialty: "Dentistry",
    experience: 8,
    photo: "images/Dentist.jpg",
  },
  {
    id: 3,
    name: "Dr. Rezaul Karim Shuvo",
    specialty: "Gynecology",
    experience: 50,
    photo: "images/Gynecologist.jpg",
  },
  {
    id: 4,
    name: "Dr. Sharmin Akter Jahan",
    specialty: "Psychiatry",
    experience: 15,
    photo: "images/Psychiatrist.jpg",
  },
  {
    id: 5,
    name: "Dr. Farzana Yasmin Chowdhury",
    specialty: "Anesthesiology",
    experience: 9,
    photo: "images/Anesthesiologist.jpg",
  },
  {
    id: 6,
    name: "Dr. Mahmudul Hasan Joy",
    specialty: "Colorectal Surgery",
    experience: 7,
    photo: "images/Colorectal Surgerist.jpg",
  },
  {
    id: 7,
    name: "Dr. Ayesha Siddika Mim",
    specialty: "Dermatology",
    experience: 10,
    photo: "images/Dermatologist.jpg",
  },
  {
    id: 7,
    name: "Dr. Mohammad Rakib Hasan",
    specialty: "Hematology",
    experience: 10,
    photo: "images/Hematologist.jpg",
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
      <a href = "apointment.html">Book now</a>
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
// --------
// Check for specialty from URL
const urlParams = new URLSearchParams(window.location.search);
const specialtyFromUrl = urlParams.get("specialty");

if (specialtyFromUrl) {
  // Uncheck all checkboxes first
  categoryFilters.forEach(cb => cb.checked = false);

  // Find matching checkbox and check it
  categoryFilters.forEach(cb => {
    if (cb.value.toLowerCase() === specialtyFromUrl.toLowerCase()) {
      cb.checked = true;
    }
  });

  // Clear search box
  searchBox.value = "";

  // Run the filter
  filterDoctors();

  // Optional: scroll into view
  doctorList.scrollIntoView({ behavior: "smooth" });
}
