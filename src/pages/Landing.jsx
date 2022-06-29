import { Header, ForMen, Simple, Dressed, Socials, OurApp, Footer} from '../containers'

import '../css/Landing.css'

const Landing = () => {
    return(
        <div>
            <Header/>
            <ForMen />
            <Simple />
            <Dressed />
            <Socials />
            <OurApp />
            <Footer />
        </div>
    )
}

export default Landing;