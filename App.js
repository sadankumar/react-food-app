 import React from "react";
 import ReactDOM from "react-dom/client";
 
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//writing style in card
const styleCard = {
    backgroundColor: "orange", 
};

//Adding style in the component style={styleCard}
//or we can directly put in component using style={{backgroundColor: "orange"}}
//props : destructing is the javascript functionality not React
const RestaurantCard = (props)=>{
    console.log(props);
    const {resName, cuisine} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf">

            </img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 Stars, 30 min ETA</h4>
            <img></img>
        </div>
    );
};

//body container will contain the card component
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard  resName ="Meghana Food" cuisine="Biryani, North India."/>
                <RestaurantCard resName ="KFC" cuisine="Burger, ."/>
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};

//Main app layout

const AppLayout = ()=>{
   return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);

root.render(<AppLayout />)

//React Component
