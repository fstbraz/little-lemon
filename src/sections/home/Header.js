import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <p className="subsection">Bacon ipsum dolor amet jowl filet mignon sausage salami beef ribs doner spare ribs ball tip. Beef shoulder tongue meatball beef ribs andouille cow biltong. Cow porchetta alcatra doner. Pork loin sirloin boudin ground round sausage beef ribs.</p>
                    <br></br>
                    <Link className="action-button" to="/reservation">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}