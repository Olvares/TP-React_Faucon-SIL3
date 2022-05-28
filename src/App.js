import "./App.css";
// import logo from "./assets/logo.png";
import Banner2 from "./components/Banner";
import ShoppingList from "./components/ShoppingList";

function App() {
    // const title = "La maison jungle";
    return (
        <div className="App">
            {/* <Banner>
                <img src={logo} alt="Banner-logo" className="lmj-logo" />
                <h1 className="lmj-title">{title}</h1>
            </Banner> */}
            <Banner2 />
            <ShoppingList />
        </div>
    );
}

export default App;
