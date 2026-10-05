
        function toggleMenu(event, id) {
            event.stopPropagation();
            const dropdowns = document.querySelectorAll('.dropdown');
            const target = document.getElementById(id);
            dropdowns.forEach(d => { if (d.id!== id) d.classList.remove('show'); });
            target.classList.toggle('show');
        }
        window.onclick = function() { document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('show')); }

        const counters = document.querySelectorAll('.counter');
        const duration = 3000; // 3 seconds

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix');
                    const startTime = performance.now();
                    const update = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        counter.innerText = Math.floor(progress * target) + suffix;
                        if (progress < 1) requestAnimationFrame(update);
                        else counter.innerText = target + suffix;
                    };
                    requestAnimationFrame(update);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(counter => observer.observe(counter));

    const updatedCirculars = [
    "Ph.D Admission 2025 Notification",
    "Research Grant Guidelines – DST",
    "Faculty Seed Money Circular"
];

function setHeroOffset() {
    const topBar = document.querySelector('.top-bar');
    const header = document.querySelector('header');

    const totalHeight =
        (topBar?.offsetHeight || 0) +
        (header?.offsetHeight || 0);

    document.documentElement.style.setProperty(
        '--top-offset',
        totalHeight + 'px'
    );
}

// run on load & resize
window.addEventListener('load', setHeroOffset);
window.addEventListener('resize', setHeroOffset);


// Show popup only if there are updates
if (updatedCirculars.length > 0) {
    const wrapper = document.getElementById("circularWrapper");
    const list = document.getElementById("circularList");

    if (wrapper && list) {
        updatedCirculars.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            list.appendChild(li);
        });

        wrapper.classList.add("show-popup");
    }
}
const circularUpdates = [
    "Ph.D Admission 2025",
    "Seed Money Circular",
    "DST Research Grant Notification"
];

// Badge reference
const circularBadge = document.getElementById("circularBadge");

// Show badge only if updates exist
if (circularUpdates.length > 0) {
    circularBadge.style.display = "flex";
    circularBadge.textContent = circularUpdates.length; // number shown
} else {
    circularBadge.style.display = "none";
}

/* ===== Scroll-based Popup Visibility ===== */

const circularWrapper = document.querySelector(".floating-circular-wrapper");

circularWrapper.addEventListener("click", function (e) {
    e.stopPropagation();               // prevent body click
    this.classList.toggle("active");   // toggle popup
});

document.body.addEventListener("click", function () {
    circularWrapper.classList.remove("active"); // hide when clicking outside
});


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // If user scrolls DOWN → hide popup
    if (currentScrollY > 150) {
        circularWrapper.classList.remove("show-popup");
    }

    // If user scrolls BACK TO TOP → show popup again
    if (currentScrollY <= 150) {
        circularWrapper.classList.add("show-popup");
    }

    lastScrollY = currentScrollY;
});


const newsData = [
  {
    title: "International Conference on AI & Data Science – Jan 2026",
    link: "news_events.html"
  },
  {
    title: "MoU Signed with IIT Madras for Research Collaboration",
    link: "news_events.html"
  },
  {
    title: "KSRCT Researchers Receive DST Grant ₹3.2 Crores",
    link: "news_events.html"
  }
];

const scroll = document.getElementById("newsScroll");

newsData.forEach(item => {
  const span = document.createElement("span");

  span.innerHTML = `
    📰 ${item.title}
    <a href="${item.link}" class="btn" onclick="event.stopPropagation();">
      Read More
    </a>
  `;

  scroll.appendChild(span);
});
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        closeAllDropdowns();
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'block';
    });
});

document.addEventListener('mousemove', (e) => {
    if (!e.target.closest('nav')) {
        closeAllDropdowns();
    }
});

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(d => {
        d.style.display = 'none';
    });
}
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            e.stopPropagation();
            closeAllDropdowns();
            dropdown.style.display = 'block';
        }
    });
});

document.body.addEventListener('click', closeAllDropdowns);

