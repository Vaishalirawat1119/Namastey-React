import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
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
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="rest-logo" src="https://b.zmtcdn.com/data/pictures/5/2195/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg"/>
            <div className="food-detail">
                <h2>KFC</h2>
                <h3>Burger, Rolls, Fast Food</h3>
                <h3>4.3 star</h3>
                <h3>33 min</h3>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>
        </div>
        
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)