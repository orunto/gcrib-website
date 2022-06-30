import { ArticleCard1 } from '../components';
import { ArticleCard2 } from '../components';
import { ArticleCard3 } from '../components';

function MoreReads (){
    return(
        <section className="MoreReads">
            <h2>More Reads for You</h2>
            <ArticleCard1 />
            <ArticleCard2 />
            <ArticleCard3 />
        </section>
    )
}

export default MoreReads;