import React from 'react'
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />

            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
                <Product 
                    id="1234567"
                    title="Wireless Switch Joy Con Controller, Vivefox Ergonomic Switch Controller L/R Replacement Joycon with Grip Connector Turbo, Gyro Axis, Alternatives Joy-con for Switch & Lite Remote Gamepad Black"
                    price={40.32}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61cjjd7Sr4L._AC_SL1500_.jpg"
                />
                <Product 
                    id="1234567"
                    title="The Future of Economics: An Islamic Perspective (Islamic Economics)"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51gf35xbfuL.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1234567"
                    title="All-new Fire HD 8 tablet, 8' HD display, 32 GB, designed for portable entertainment, Black"
                    price={99.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61i5aMuVN8L._AC_SL1000_.jpg"
                />
                <Product 
                    id="1234567"
                    title="Apple 16' MacBook Pro (2019) Intel Core i9 2.3GHz, 16GB RAM, 1TB SSD, macOS, Silver (Renewed)"
                    price={2099.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41GzxD5kc%2BL._AC_.jpg"
                />
                <Product 
                    id="1234567"
                    title="Echo Dot (3rd Gen) with Clock with Mandalorian The Child stand"
                    price={40.51}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ka-NCLsXL._AC_SL1000_.jpg"
                />
            </div>
            {/* Product */}

        </div>
    );
}

export default Home;
