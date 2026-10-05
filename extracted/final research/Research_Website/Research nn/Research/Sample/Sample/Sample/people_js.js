function safeUrl(url) {
  if (!url) return "";
  url = url.trim();

  // remove unwanted prefix like ": https://..."
  url = url.replace(/^:\s*/, "");

  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return "https:" + url;

  return "https://" + url;
}

function setLink(id, url) {
  const a = document.getElementById(id);
  if (!a) return;

  const finalUrl = safeUrl(url);

  if (!finalUrl || finalUrl === "https://#") {
    a.style.display = "none";
    a.removeAttribute("href");
  } else {
    a.style.display = "flex";  // because icons use flex
    a.href = finalUrl;
    a.target = "_blank";
    a.rel = "noopener";
  }
}

function openProfile(card) {
  const popup = document.getElementById("profilePopup");

  const name = card.dataset.name || "";
  const designation = card.dataset.designation || "";
  const dept = card.dataset.dept || "";
  const email = card.dataset.email || "";
  const photo = card.dataset.photo || "";
  const research = card.dataset.research || "";

  document.getElementById("popupName").textContent = name;

  const desEl = document.getElementById("popupDesignation");
  if (desEl) {
    if (!designation.trim()) {
      desEl.style.display = "none";
      desEl.textContent = "";
    } else {
      desEl.style.display = "block";
      desEl.textContent = designation;
    }
  }

  document.getElementById("popupDept").textContent = dept;
  const cleanedEmail = email.replace(/^📧\s*:?\s*/, "").trim();
  document.getElementById("popupEmailText").textContent = cleanedEmail;
  document.getElementById("popupResearch").textContent = research;

  const img = document.getElementById("popupPhoto");
  img.src = photo ? photo : "default.jpg";
  img.alt = name;

  // ✅ Set icon links
  setLink("linkScholar", card.dataset.scholar);
  setLink("linkRG", card.dataset.researchgate);
  setLink("linkScopus", card.dataset.scopus);
  setLink("linkWos", card.dataset.wos);
  setLink("linkOrcid", card.dataset.orcid);

  popup.style.display = "flex";
}

function closeProfile() {
  document.getElementById("profilePopup").style.display = "none";
}

// overlay click close
document.addEventListener("click", (e) => {
  const popup = document.getElementById("profilePopup");
  if (e.target === popup) closeProfile();
});
