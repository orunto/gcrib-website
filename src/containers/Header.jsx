import { Button } from '../components';

const dropdown = document.querySelector('#dropdown');
const menu = document.querySelector('#menu');
const menu2 = document.querySelector('#menu2');
const mobilemenu = document.querySelector('#mobilemenu');
const mobilemenu2 = document.querySelector('#mobilemenu2');
const creators = document.querySelector('#creators');
const store = document.querySelector('#store');
const stylists = document.querySelector('#stylists');
const partners = document.querySelector('#partners');
const partners2 = document.querySelector('#partners2');

// Interactions
function Drop () {
    dropdown.style.top = "0px";
    menu.style.display = "none";
    menu2.style.display = "block";
}

function Retract () {
    dropdown.style.top = "-600px";
    menu2.style.display = "none";
    menu.style.display = "block";
}


function MobileDrop () {
    dropdown.style.top = "0px";
    mobilemenu.style.display = "none";
    mobilemenu2.style.display = "block";
}

function MobileRetract () {
    dropdown.style.top = "-600px";
    mobilemenu2.style.display = "none";
    mobilemenu.style.display = "block";
}


function ShowPartners () {
    const button = document.querySelector(".Button");
    creators.style.display = "block";
    store.style.display = "block";
    stylists.style.display = "block";
    setTimeout(
        function() {
            creators.style.opacity = "1";
            store.style.opacity = "1";
            stylists.style.opacity = "1";
        }
    , 300);
    partners.style.display = "none";
    partners2.style.display = "block";
    button.style.top = "515px";
}

function HidePartners () {
    const button = document.querySelector(".Button");
    setTimeout(
        function() {
            creators.style.opacity = "0";
            store.style.opacity = "0";
            stylists.style.opacity = "0";
        }
    , 300);
    creators.style.display = "none";
    store.style.display = "none";
    stylists.style.display = "none";
    partners2.style.display = "none";
    partners.style.display = "block";
    button.style.top = "380px";
}

function Header (){
    return(
        <nav id="navbar">
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Logo.png" id="logo" alt="Logo"></img>
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Icon.png" id="logo2" alt="Logo"></img>
            <span onClick={Drop} className="menu" id="menu">Menu<img src="/images/Menu.svg" alt="Menu"></img></span>
            <span onClick={Retract} className="menu" id="menu2">Menu<img src="/images/cancel.svg" alt="Close"></img></span>
            <span id="search">Search<img src="/images/search.svg" alt="Search"></img></span>

            <img onClick={MobileDrop} className="mobilemenu" id="mobilemenu" src="/images/Menu.svg" alt="Menu"></img>
            <img onClick={MobileRetract} className="mobilemenu" id="mobilemenu2" src="/images/cancel.svg" alt="Close"></img>
            <img id="mobilesearch" src="/images/search.svg" alt="Search"></img>
            <div id="dropdown">
                <ul>
                   <li> <a href="#">Home</a> </li>
                   <li> <a href="#">For You</a> </li>
                   <li> <a href="#">For You +</a> </li>
                   <li id="partners" onClick={ShowPartners}> <a href="#">Partners <img src="/images/partner.svg" alt="Show"></img></a> </li>
                   <li id="partners2" onClick={HidePartners}> <a href="#">Partners <img src="/images/partner.svg" alt="Hide"></img></a> </li>
                   <li className="partneritem" id="creators"> <a href="#">Creators</a> </li>
                   <li className="partneritem" id="store"> <a href="#">Stores</a> </li>
                   <li className="partneritem" id="stylists"> <a href="#">Stylists</a> </li>
                   <li> <a href="#">For Companies</a> </li>
                </ul>

                <a href="https://blog.gentlemenscrib.com" id="dropbutton"><Button>Visit Crib</Button></a>
            </div>
        </nav>
    );
}

export default Header;