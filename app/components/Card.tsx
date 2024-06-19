export function Card({ name, content, image }) {
    return (
        <div className="relative">
            <img className="img-portfolio" src={`${image}`} alt={`${name}`} />
            <div className="img-override">
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
}