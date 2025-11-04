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

const RestaurantCard = (props) => {
    const {resName, cuisines, rating, deliveryTime, img} = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="rest-logo" src={img}/>
            <div className="food-detail">
                <h3 className="res-name">{resName}</h3>
                <h4>{cuisines}</h4>
                <h4>{rating} star</h4>
                <h4>{deliveryTime} min</h4>
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
                <RestaurantCard
                resName="KFC" 
                cuisines="Burger, Rolls, Fast Food" 
                rating="4.3" 
                deliveryTime="33" 
                img="https://b.zmtcdn.com/data/pictures/5/2195/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg"
                />
                <RestaurantCard
                resName="Biryani Blues" 
                cuisines="Biryani, Lucknowi, Desserts" 
                rating="4.4" 
                deliveryTime="30-35"
                img="https://tse3.mm.bing.net/th/id/OIP.Y9RJzxf8B4R5mKrZOSn8ngHaD9?pid=Api&P=0&h=180"
                />
                <RestaurantCard
                resName="The Yellow Bowl" 
                cuisines="Chinese, Momos, Tandoori" 
                rating="4.4" 
                deliveryTime="20-25"
                img="https://tse2.mm.bing.net/th/id/OIP.OjiVZh8XiC5DlTn0HDp8LAHaDt?pid=Api&P=0&h=180"
                />
                <RestaurantCard
                resName="Keventers - Milkshakes & Desserts" 
                cuisines="Beverages, Ice Cream" 
                rating="4.3" 
                deliveryTime="30-35"
                img="https://tse1.mm.bing.net/th/id/OIP.oD_W8IgRm7umfkrllkS-ZQHaD9?pid=Api&P=0&h=180"
                />
                <RestaurantCard
                resName="Burger King" 
                cuisines="Burgers, American" 
                rating="4.4" 
                deliveryTime="25-30"
                img="https://tse3.mm.bing.net/th/id/OIP.YPN8WcJbH5HgJ90LyLzSZQHaEK?pid=Api&P=0&h=180"
                />
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