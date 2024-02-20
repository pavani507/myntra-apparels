import React from 'react'
import Header from './header/header';
import About from './about/about';
import Footer from './footer/footer';
import ProductList from './products-list/product-list';


const HomePage = () => {
    
    return (
        <div style={{backgroundColor: "#FFF"}}>
           <Header/> 
           <About/>
           <ProductList heading={"SIMILAR PRODUCTS"} productsList={["shirt1.jpg","shirt2.jpg","shirt1.jpg","shirt2.jpg",
           "shirt1.jpg","shirt2.jpg","shirt1.jpg","shirt2.jpg"]}/>
            <ProductList heading={"RECENTLY VIEWED PRODUCTS"} productsList={["shirt1.jpg","shirt2.jpg","shirt1.jpg","shirt2.jpg",
           "shirt1.jpg","shirt2.jpg","shirt1.jpg","shirt2.jpg"]}/>

           <Footer />
         
        </div>
    )
}

export default HomePage;

//<Footer/>


