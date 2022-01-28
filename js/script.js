import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimacao from "./modules/scroll-animacao.js";
import AccordionList from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-js="menu"] a[href^="#"]');
scrollSuave.init();

const accordionList = new AccordionList('[data-js="accordion"] dt');
accordionList.init();

const tabNav = new TabNav(
  '[data-js="tabmenu"] li',
  '[data-js="tabcontent"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
initFetchBitcoin();
initScrollAnimacao();
