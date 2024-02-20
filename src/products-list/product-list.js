import React  from "react";
import styles from "./products-list.module.scss";


function ProductList({heading,productsList}) {
  

  return (
    <>
      {" "}
     <div className={styles.wrapper}>

        <h3>{heading}</h3>
      
     <div className={styles.cart}>
          {productsList.map((img,index) =>  <div className={styles.cartItems}>

        <img src={require(`../images/${img}`)} style={{padding: "0.2rem" }}/> 
        <div className={styles.cartPriceAndRating}>
        <div className={styles.price}>₹1,299 <span className={styles.oldPrice}>₹2499</span> 
         <n/> <n/> <span className={styles.discount}>20% OFF</span>  
        </div>
        <span>Black Veirdo T-shirt</span>
        <div className={styles.review}>
        <span>
          <img src={require(`../images/star.png`)} 
          style={{width:"10px",
          height: "18px",
          marginTop: "13%"}}/> 
          <span>4.5</span></span> <hr/> 
          <span style={{ color: "lightgrey"}}>2k</span></div>

         
     </div>
     
           <div style={{borderTop:"1px solid gray",display:"flex"}}>
            <span className={styles.addToCart}> ADD TO CART </span>
            <span><img src={require(`../images/wishlist.png`)} style={{width:"24px"}}/></span>
            
            
            </div> 
  </div>)
}

</div>  
   
       </div>


   </>
  );
}

export default ProductList;
