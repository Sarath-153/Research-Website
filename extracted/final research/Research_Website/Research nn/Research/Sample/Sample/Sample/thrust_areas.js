/* =========================
   DROPDOWN TOGGLE
========================= */
function toggleMenu(event, id) {
  event.stopPropagation();

  // close all other dropdowns
  document.querySelectorAll(".dropdown").forEach(dd => {
    if (dd.id !== id) dd.classList.remove("show");
  });

  // toggle current
  const menu = document.getElementById(id);
  if (menu) menu.classList.toggle("show");
}

// close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach(dd => dd.classList.remove("show"));
});


/* =========================
   DEPARTMENT MODAL (CONTENT ONLY)
========================= */
const deptModal = document.getElementById("deptModal");
const deptModalOverlay = document.getElementById("deptModalOverlay");
const deptModalClose = document.getElementById("deptModalClose");

const deptModalTitle = document.getElementById("deptModalTitle");
const deptModalAbout = document.getElementById("deptModalAbout");
const deptModalList = document.getElementById("deptModalList");

// ✅ Updated department content (your data)
const deptInfo = {
  "Textile Technology": {
    thrust: ["Technical Textile"]
  },

  "Electronics And Communication Engineering": {
    thrust: [
      "Embedded Systems",
      "Deep Learning and Image Processing",
      "VLSI Design",
      "Communication and Networking",
      "Signal Processing"
    ]
  },

  "Mechanical Engineering": {
    thrust: [
      "Composite Materials",
      "Welding Technology",
      "Alternative Fuels",
      "Tribology"
    ]
  },

  "Artificial Intelligence And Data Science": {
    thrust: [
      "Data Science",
      "Deep Technology",
      "Automation",
      "Data Analytics & Visualization"
    ]
  },

  "Civil Engineering": {
    thrust: [
      "Construction Materials",
      "Hydrology and Water Resources",
      "Water and Wastewater Treatment",
      "Structural Health Monitoring"
    ]
  },

  "Mechatronics Engineering": {
    thrust: [
      "Drone Technology",
      "Electric Vehicle",
      "FMEA in Industries",
      "Nano Fluids"
    ]
  },

  "Chemistry": {
    thrust: [
      "Natural Products",
      "Food Formulations",
      "Nano Materials",
      "Environmental Chemistry",
      "Fuel Cell",
      "Photomaterials",
      "Medicinal Chemistry"
    ]
  },

  "Food Technology": {
    thrust: [
      "Food Processing and Engineering",
      "New Product Development and Innovation",
      "Food Packaging Technology",
      "Food Chemistry and Microbiology",
      "Food Testing and Formulations and Preservations",
      "Beverage Technology"
    ]
  },

  "MBA": {
    thrust: [
      "Fintech & Digital Finance",
      "Working Capital & MSME",
      "Corporate Finance",
      "Neuro Marketing & Customer Experience",
      "Consumer behaviour in digital platforms",
      "Research on E-commerce",
      "Stress Management"
    ]
  },

  "Computer Science And Business System": {
    thrust: [
      "Machine Learning",
      "Deep Learning",
      "Computer Networks"
    ]
  },

  "EE(VLSIDT)": {
    thrust: [
      "Low Power VLSI Design",
      "Machine Learning and Image Processing"
    ]
  },

  "Information Technology": {
    thrust: [
      "Artificial Intelligence",
      "Data Analytics",
      "Deep Learning",
      "Wireless Networking",
      "Internet of Things",
      "Cloud Computing"
    ]
  },

  "CSE (AIML)": {
    thrust: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision and Image Processing",
      "Natural Language Processing",
      "Data Analytics"
    ]
  },

  "Electrical and Electronics Engineering": {
    thrust: [
      "Power Systems & Smart Grids",
      "Control & Automation",
      "Power Electronics & Drives",
      "Embedded Systems & IoT"
    ]
  },

  "Physics": {
    thrust: [
      "Material Science",
      "Luminescence",
      "Energy Storage Devices"
    ]
  },

  "Mathematics": {
    thrust: [
      "Mathematical Modeling",
      "Differential Equations",
      "Fluid Dynamics",
      "Fuzzy Image Processing",
      "Fuzzy Algebra"
    ]
  },

  "English": {
    thrust: [
      "Indian Writing in English",
      "English Language Teaching"
    ]
  },

  "Master Of Computer Application (MCA)": {
    thrust: [
      "Artificial Intelligence & Machine Learning",
      "Agentic AI",
      "Data Science",
      "Cloud Computing & DevOps",
      "Full Stack Development",
      "Computational Biology"
    ]
  },

  "Nano Science And Technology": {
    thrust: [
      "Carbon-Based Nanomaterials and Nanocomposites",
      "Thermal Barrier and Protective Coatings",
      "Anticorrosion and Antibacterial Surface Engineering",
      "Green Catalysis and Sustainable Chemistry",
      "Nanomaterials for Water Purification and Wastewater Treatment",
      "Energy Storage Materials (Supercapacitors and Batteries)",
      "CO₂ Capture, Conversion, and Utilization",
      "Tissue Engineering and Nanobiomaterials"
    ]
  }
};

function openDeptModal(deptName) {
  const data = deptInfo[deptName] || {
    thrust: ["Thrust areas will be updated."]
  };

  deptModalTitle.textContent = deptName;
  deptModalAbout.textContent = data.about;

  deptModalList.innerHTML = data.thrust.map(item => `<li>${item}</li>`).join("");

  deptModal.classList.add("show");
  deptModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDeptModal() {
  deptModal.classList.remove("show");
  deptModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// click handler for cards
document.querySelectorAll(".dept-card").forEach(card => {
  card.addEventListener("click", () => {
    const deptName = card.querySelector(".dept-name")?.textContent?.trim();
    if (deptName) openDeptModal(deptName);
  });
});

// close actions
deptModalClose.addEventListener("click", closeDeptModal);
deptModalOverlay.addEventListener("click", closeDeptModal);

// ESC close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && deptModal.classList.contains("show")) closeDeptModal();
});