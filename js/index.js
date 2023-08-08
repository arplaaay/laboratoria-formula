import { handleFinal } from "./page-final.js";
import { handleScroll } from "./scroll.js";

document.addEventListener("scroll", handleScroll);
document.addEventListener("scroll", handleFinal);
