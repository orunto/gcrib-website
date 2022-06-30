import { Header, ReadoftheDay, Yesterday, MoreReads, Footer } from '../../containers';

import '../../css/Blog.css'

const Reads = () => {
    return(
        <div>
            <Header />
            <ReadoftheDay />
            <Yesterday />
            <MoreReads />
            <Footer />
        </div>
    )
}

export default Reads;