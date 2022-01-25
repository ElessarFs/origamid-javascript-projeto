import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimacao from "./modules/scroll-animacao.js";
import AccordionList from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
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

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimacao();
