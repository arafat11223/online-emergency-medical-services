const labs = [
  {
    labName: "HealthFirst Diagnostics",
    division: "Dhaka",
    phone: "+8801712345671"
  },
  {
    labName: "CityLab Diagnostics",
    division: "Chattogram",
    phone: "+8801712345672"
  },
  {
    labName: "LabTech Medical Center",
    division: "Khulna",
    phone: "+8801712345673"
  },
  {
    labName: "SureTest Diagnostics",
    division: "Rajshahi",
    phone: "+8801712345674"
  },
  {
    labName: "MediScan Lab",
    division: "Sylhet",
    phone: "+8801712345675"
  },
  {
    labName: "ProHealth Diagnostics",
    division: "Barisal",
    phone: "+8801712345676"
  },
  {
    labName: "BioCheck Medical Lab",
    division: "Rangpur",
    phone: "+8801712345677"
  },
  {
    labName: "Advanced Pathology Center",
    division: "Mymensingh",
    phone: "+8801712345678"
  }
];

const labContainer = document.getElementById("labContainer");

labs.forEach(lab => {
  const card = document.createElement("div");
  card.classList.add("lab-card");

  card.innerHTML = `
    <h2>${lab.labName}</h2>
    <p><strong>Division:</strong> ${lab.division}</p>
    <p><strong>Phone:</strong> ${lab.phone}</p>
  `;

  labContainer.appendChild(card);
});
