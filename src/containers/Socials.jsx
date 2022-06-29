import { TalkButton } from '../components';

function Socials (){
    return (
        <section id="Socials">
            <h2>We like to talk a lot on social media about fashion</h2>
            <div className="Spread">
                <div id="insta"><a href="https://www.instagram.com/gentlemens_crib_ng/">
                    <TalkButton>
                        <img src="../images/Instagram.svg"/>
                        <p>@gentlemans_crib_ng</p>
                        <span>Visit Page</span>
                    </TalkButton></a>
                </div>
                <div id="facebook"><a href="https://www.facebook.com/pages/category/E-commerce-Website/Gentlemens-Crib-101456768779286/"><TalkButton><img src="../images/Facebook.svg"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="twitter"><a href="https://twitter.com/gentlemenscrib"><TalkButton><img src="../images/Twitter.svg"/>
                <p>@GentlemensCrib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="whatsapp"><a href="https://wa.me/2348027132741"><TalkButton><img src="../images/Whatsapp.svg"/>
                <p>wa.me/2348027132741</p>
                        <span>Send a Text</span>
                </TalkButton></a></div>
                <div id="linkedin"><a href="https://www.linkedin.com/company/gentlemens-crib/"><TalkButton><img src="../images/LinkedIn.svg"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Profile</span>
                </TalkButton></a></div>
            </div>
        </section>
    );
}

export default Socials;