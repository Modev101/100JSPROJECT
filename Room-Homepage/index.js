const mobileMenu = document.getElementById("mobileMenu");
const mobileCloseList = document.getElementById("mobileCloseList");
const mobileMenuList = document.getElementById("mobileMenuList");

mobileMenu.addEventListener("click", () => {
  mobileMenuList.classList.remove("top-0");
  mobileMenuList.classList.add("top-16");
});
mobileCloseList.addEventListener("click", () => {
  mobileMenuList.classList.remove("top-16");
  mobileMenuList.classList.add("top-0");
});

const contentimg = document.getElementById("contentimg");
const contentimgMobile = document.getElementById("contentimgMobile");
const rightbtn = document.getElementById("rightbtn");
const leftbtn = document.getElementById("leftbtn");
const title = document.getElementById("title");
const content = document.getElementById("content");

const slides = [
  {
    desktop: "/images/desktop-image-hero-1.jpg",
    mobile: "/images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    content: `We provide unmatched quality, comfort, and style for property owners across the country. 
Our experts combine form and function in bringing your vision to life. Create a room in your 
own style with our collection and make your property a reflection of you and what you love.`,
  },
  {
    desktop: "/images/desktop-image-hero-2.jpg",
    mobile: "/images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`,
  },
  {
    desktop: "/images/desktop-image-hero-3.jpg",
    mobile: "/images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`,
  },
];

let currentSlide = 0;

function showSlide(index) {
  const slide = slides[index];
  contentimg.src = slide.desktop;
  contentimgMobile.src = slide.mobile;
  title.innerText = slide.title;
  content.innerText = slide.content;
}

rightbtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

leftbtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);
