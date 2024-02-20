import React  from "react";
import styles from "./header.module.scss";


function Header() {
  

  return (
    <>
      {" "}
     <div className={styles.wrapper}>
      
        <a href="https://veirdo.in/" className={styles.logo}>
          <img  src={require("../images/logo.jpg")} style={{width: "5rem",marginLeft:"11%"}}/>
         </a>

         <div className={styles.nav}>
          <ul>
            <li >NEW ARRIVALS</li>
            <li>MEN</li>
            <li>WINTER COLLECTION</li>
            <li>SHOP BY MARCH</li>
            <li>UNISEX</li>
          </ul>
         </div>
         <input placeholder="Try Search `T-shirts` "/>
       <div className={styles.cartLogos}>
         
         <img  src={require("../images/user.png")} />
         <img  src={require("../images/wishlist.png")} />
         <span title="cart" >
         <img  src={require("../images/cart.png")} />
         <span className={styles.cartSpan}>2</span>
         </span>
        
      </div>
   
</div>


</>
  );
}

export default Header;
