const pageStartWrapperElem = document.querySelector(".page-start-wrapper");
const hdrWrapperElem = document.querySelector(".main-hdr-wrapper");
const pageFinalHdrElem = document.querySelector(".final-wrapper__header");
const pageFinalWrapperTextElem = document.querySelector(".final-wrapper__text");

console.log(wheelTextElem);

const viewPortWidth = window.innerWidth;

// pageFinalWrapperTextElem.children[0].style.color = "red";

// hdrWrapperElem.style.visibility = "unset";

const hadleStartHdrPosition = () => {
  const hdrPosition = pageStartWrapperElem.getBoundingClientRect();

  console.log(hdrPosition.top);

  if (viewPortWidth <= 1199) {
    if (hdrPosition.top > -2160) {
      pageFinalWrapperTextElem.style.opacity = "0";
    }

    if (hdrPosition.top <= -2361) {
      hdrWrapperElem.style.visibility = "hidden";
      pageFinalHdrElem.style.visibility = "unset";

      pageFinalWrapperTextElem.style.opacity = "1";
      pageFinalWrapperTextElem.classList.add("final-text-appear");
    } else {
      hdrWrapperElem.style.visibility = "unset";
      pageFinalHdrElem.style.visibility = "hidden";

      pageFinalWrapperTextElem.classList.remove("final-text-appear");
    }
  } else {
    if (hdrPosition.top > -2320) {
      pageFinalWrapperTextElem.style.opacity = "0";
    }

    if (hdrPosition.top <= -2539) {
      hdrWrapperElem.style.visibility = "hidden";
      pageFinalHdrElem.style.visibility = "unset";

      pageFinalWrapperTextElem.style.opacity = "1";
      pageFinalWrapperTextElem.classList.add("final-text-appear");
    } else {
      hdrWrapperElem.style.visibility = "unset";
      pageFinalHdrElem.style.visibility = "hidden";

      pageFinalWrapperTextElem.classList.remove("final-text-appear");
    }
  }
};

document.addEventListener("scroll", hadleStartHdrPosition);
