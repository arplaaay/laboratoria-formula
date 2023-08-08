const books = document.querySelectorAll(".books-list__item");
const logoTextElement = document.querySelector(".logotype__logo-text");
const wheelTextElem = document.querySelector(".wheel-text__svg");

const wheelFillElem = document.querySelector(".wheel-circle__fill-div");

export const handleScroll = () => {
  const scrollYPostition = window.scrollY;

  // scroll progress wheel
  wheelTextElem.style.transform = `rotate(${scrollYPostition / 3}deg)`;
  wheelFillElem.style.height = `${scrollYPostition / 25}px`;

  //book 1, book 2
  if (scrollYPostition >= 400) {
    books[0].classList.add("book-1-appear");
    books[0].classList.remove("book-1-dissapear");

    books[1].classList.add("book-2-appear");
    books[1].classList.remove("book-2-dissapear");
  } else {
    books[0].classList.add("book-1-dissapear");
    books[0].classList.remove("book-1-appear");

    books[1].classList.add("book-2-dissapear");
    books[1].classList.remove("book-2-appear");
  }

  //logo
  if (scrollYPostition >= 760) {
    logoTextElement.classList.remove("logo-appear");
    logoTextElement.classList.add("logo-hide");
  } else {
    logoTextElement.classList.remove("logo-hide");
    logoTextElement.classList.add("logo-appear");
  }

  //book 3, book 4
  if (scrollYPostition >= 800) {
    books[2].classList.add("book-3-appear");
    books[2].classList.remove("book-3-dissapear");

    books[3].classList.add("book-4-appear");
    books[3].classList.remove("book-4-dissapear");
  } else {
    books[2].classList.add("book-3-dissapear");
    books[2].classList.remove("book-3-appear");

    books[3].classList.add("book-4-dissapear");
    books[3].classList.remove("book-4-appear");
  }

  // book 5
  if (scrollYPostition >= 1200) {
    books[4].classList.add("book-5-appear");
    books[4].classList.remove("book-5-dissapear");
  } else {
    books[4].classList.add("book-5-dissapear");
    books[4].classList.remove("book-5-appear");
  }

  //book 6
  if (scrollYPostition >= 1600) {
    books[5].classList.add("book-6-appear");
    books[5].classList.remove("book-6-dissapear");
  } else {
    books[5].classList.add("book-6-dissapear");
    books[5].classList.remove("book-6-appear");
  }

  //book 7
  if (scrollYPostition >= 2000) {
    books[6].classList.add("book-7-appear");
    books[6].classList.remove("book-7-dissapear");
  } else {
    books[6].classList.add("book-7-dissapear");
    books[6].classList.remove("book-7-appear");
  }
};
