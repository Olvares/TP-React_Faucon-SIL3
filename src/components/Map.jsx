function Map() {
    const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <ul className="bg-primary">
            {x.map((a, index) => (
                <li key={index}>
                    {a}^2 = {a * a}
                </li>
            ))}
        </ul>
    );
}
export default Map;
