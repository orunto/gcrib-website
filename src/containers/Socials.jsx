import { TalkButton } from '../components';

function Socials (){
    return (
        <section id="Socials">
            <h2>We like to talk a lot on social media about fashion</h2>
            <div className="Spread">
                <div id="insta"><a href="https://www.instagram.com/gentlemens_crib_ng/">
                    <TalkButton>
                        <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Instagram.svg" alt="Instagram"/>
                        <p>@gentlemans_crib_ng</p>
                        <span>Visit Page</span>
                    </TalkButton></a>
                </div>
                <div id="facebook"><a href="https://www.facebook.com/pages/category/E-commerce-Website/Gentlemens-Crib-101456768779286/"><TalkButton><img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Facebook.svg" alt="Facebook"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="twitter"><a href="https://twitter.com/gentlemenscrib"><TalkButton><img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Twitter.svg" alt="Twitter"/>
                <p>@GentlemensCrib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="whatsapp"><a href="https://wa.me/2348027132741"><TalkButton><img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Whatsapp.svg" alt="WhatsApp"/>
                <p>wa.me/2348027132741</p>
                        <span>Send a Text</span>
                </TalkButton></a></div>
                <div id="linkedin"><a href="https://www.linkedin.com/company/gentlemens-crib/"><TalkButton><img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/LinkedIn.svg" alt="LinkedIn"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Profile</span>
                </TalkButton></a></div>
            </div>
        </section>
    );
}

export default Socials;