const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const progressBar = document.querySelector(".scroll-progress__bar");
const backToTopButton = document.querySelector(".back-to-top");

const filterButtons = [...document.querySelectorAll(".filter-chip")];
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const galleryCount = document.getElementById("gallery-count");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeLightboxButton = document.querySelector(".lightbox__close");
const prevLightboxButton = document.querySelector(".lightbox__nav--prev");
const nextLightboxButton = document.querySelector(".lightbox__nav--next");

let activeFilter = "all";
let currentLightboxIndex = 0;

const closeNavigation = () => {
  siteNav.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  body.classList.remove("nav-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  body.classList.toggle("nav-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      closeNavigation();
    }
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = siteNav.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle && siteNav.classList.contains("is-open")) {
    closeNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeNavigation();
  }
});

const updateScrollUi = () => {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  progressBar.style.width = `${progress}%`;
  backToTopButton.classList.toggle("is-visible", scrollTop > 540);
};

window.addEventListener("scroll", updateScrollUi);
updateScrollUi();

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const activeId = entry.target.id;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);

        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-20% 0px -35% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const getVisibleGalleryItems = () =>
  galleryItems.filter((item) => !item.hidden);

const updateGalleryCount = () => {
  galleryCount.textContent = String(getVisibleGalleryItems().length);
};

const applyFilter = (filter) => {
  activeFilter = filter;

  galleryItems.forEach((item) => {
    const shouldShow =
      filter === "all" || item.dataset.category === filter;
    item.hidden = !shouldShow;
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateGalleryCount();
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});

const updateLightboxControls = () => {
  const visibleItems = getVisibleGalleryItems();
  const isSingleImage = visibleItems.length <= 1;

  prevLightboxButton.disabled = isSingleImage;
  nextLightboxButton.disabled = isSingleImage;
};

const openLightbox = (index) => {
  const visibleItems = getVisibleGalleryItems();
  const selectedItem = visibleItems[index];

  if (!selectedItem) {
    return;
  }

  const selectedImage = selectedItem.querySelector("img");
  const selectedCaption = selectedItem.querySelector("figcaption");

  currentLightboxIndex = index;
  lightboxImage.src = selectedImage.src;
  lightboxImage.alt = selectedImage.alt;
  lightboxCaption.textContent = selectedCaption.textContent;

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  body.classList.add("lightbox-open");
  updateLightboxControls();
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  body.classList.remove("lightbox-open");
};

const stepLightbox = (direction) => {
  const visibleItems = getVisibleGalleryItems();

  if (visibleItems.length <= 1) {
    return;
  }

  currentLightboxIndex =
    (currentLightboxIndex + direction + visibleItems.length) %
    visibleItems.length;

  const nextItem = visibleItems[currentLightboxIndex];
  const nextImage = nextItem.querySelector("img");
  const nextCaption = nextItem.querySelector("figcaption");

  lightboxImage.src = nextImage.src;
  lightboxImage.alt = nextImage.alt;
  lightboxCaption.textContent = nextCaption.textContent;
  updateLightboxControls();
};

galleryItems.forEach((item) => {
  item.setAttribute("tabindex", "0");
  item.setAttribute("role", "button");
  item.setAttribute("aria-label", item.querySelector("figcaption").textContent);

  item.addEventListener("click", () => {
    const visibleItems = getVisibleGalleryItems();
    const index = visibleItems.indexOf(item);
    openLightbox(index);
  });

  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const visibleItems = getVisibleGalleryItems();
      const index = visibleItems.indexOf(item);
      openLightbox(index);
    }
  });
});

closeLightboxButton.addEventListener("click", closeLightbox);
prevLightboxButton.addEventListener("click", () => stepLightbox(-1));
nextLightboxButton.addEventListener("click", () => stepLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
    closeNavigation();
  }

  if (!lightbox.classList.contains("is-open")) {
    return;
  }

  if (event.key === "ArrowLeft") {
    stepLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    stepLightbox(1);
  }
});

applyFilter(activeFilter);
