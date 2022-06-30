import { Cards, Button } from '../components';

function Simple () {
    return (
        <section className="Simple">
            <h2>Fashion should not be difficult</h2>
            <p className="simpler">...and we make it even simpler</p>
            <div id="info">
                <Cards>
                    <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/find.svg" alt=""></img>
                    <p>Find the information you need, answers to any questions</p>
                </Cards>
            </div>
            <div id="stores">
                <Cards>
                <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Location.svg" alt=""></img>
                <p>Find the best stores to shop from</p>
                </Cards>
            </div>
            <div id="middle">
                <Cards>
                <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/AI.svg" alt=""></img>
                <p>Use our AI to build up your styles</p>
                </Cards>
            </div>
            <div id="connect">
                <Cards>
                <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Needle.svg" alt=""></img>
                <p>Connect to the best of fashion talent in Nigeria</p>
                </Cards>
            </div>
            <div id="auto">
                <Cards>
                <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Hanger.svg" alt=""></img>
                <p>Simple, automated wardrobe building plans.</p>
                </Cards>
            </div>
            <Button>
                <span>Let's Go</span>
            </Button>
        </section>
    );
}

export default Simple;