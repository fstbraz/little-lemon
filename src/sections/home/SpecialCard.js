export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                <p>{props.description}</p>
            </section>
        </article>
    );
}