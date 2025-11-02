import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => (
    <div id="header">
        <div id="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/food-signal-online-food-ordering-logo-design_825834-7421.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)