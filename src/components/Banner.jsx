import "./../styles/Banner.css";
import logo from "./../assets/logo.png";
// function Banner({ children }) {
//     return <div className="lmj-banner">{children}</div>;
// }

function Banner2() {
    const title = "La maison jungle";
    return (
        <div className="lmj-banner">
            <img src={logo} alt="Banner-logo" className="lmj-logo" />
            <h1 className="lmj-title">{title}</h1>
        </div>
    );
}
export default Banner2;
