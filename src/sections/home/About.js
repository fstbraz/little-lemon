export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h2>Little Lemon</h2>
                <p className="about-subtext">Bacon ipsum dolor amet jowl filet mignon sausage salami beef ribs doner spare ribs ball tip. 
                Beef shoulder tongue meatball beef ribs andouille cow biltong. Cow porchetta alcatra doner. 
                Pork loin sirloin boudin ground round sausage beef ribs. 
                Meatloaf jerky andouille prosciutto, ham flank capicola cupim brisket boudin turducken. 
                Kevin pork belly drumstick sausage cupim beef ribs, short ribs pig leberkas filet mignon chicken.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}