import React  from "react";
import styles from "./about.module.scss";


const details = ({

}) => {
  
  return (
    <div className={styles.productDetailsWrapper}>
      
    
      

      <div className={styles.detailContainer}>
        <div className={styles.imageWrapper}>
          <div className={styles.productsImage}>
            
            {["shirt1.jpg","shirt2.jpg","shirt3.jpg","shirt1.jpg"].map((img) => {
                  return (
                    
                      <img
                        src={require(`../images/${img}`)}/>
                  
                  );
                })}
            
          </div>
        </div>

        <div className={styles.detailsWrapper}>
          <div className={styles.price}>₹1,299 <span className={styles.oldPrice}>₹2499</span> 
         <n/> <n/> <span className={styles.discount}>20% OFF</span>  
         <span style={{marginLeft:"auto"}}>
          <img src={require(`../images/purplestar.png`)} 
          style={{width:"10px",
          height: "18px",
          marginTop: "13%"}}/> </span></div>
         <div className={styles.productName}>Flower Printed Oversized Fit</div>
         <div className={styles.review}> 
         <span>
          <img src={require(`../images/star.png`)} 
          style={{width:"10px",
          height: "18px",
          marginTop: "13%"}}/> 
          <span>4.5</span></span> <hr/> 
          <span style={{ color: "lightgrey"}}>2k</span></div>
         
          <h3> OFFERS</h3>

        <div style={{display:"flex"}}>
          {[1,2].map((_,index) =>  <div className={styles.offers}>

        <img src={require(`../images/offers.png`)} style={{width:"30px"}}/> 

        <div className={styles.description}>
        <div className={styles.offerTitle}>Buy 2 tees at just ₹699 </div>
        <div className={styles.offersSubTitle}>Add any 2 tees to cart avail</div>
     </div>
<div className={styles.description} style={{marginLeft:"auto"}}>
  <div className={styles.offerTitle}>1/3</div>
  <div className={styles.offersSubTitle}>...</div>
</div>
</div>)
}

</div>

<h3>COLORS - BRIDGE</h3>

        <div style={{display:"flex"}}>
          {["shirt1.jpg","shirt2.jpg","shirt3.jpg","shirt4.jpg"].map((img,index) =>  <div className={styles.colorBridge}>

        <img src={require(`../images/${img}`)} style={{width:"50px"}}/> 

  </div>)
}
</div>
<div className={styles.sizeHeading}>
<h4>SELECT SIZE</h4>
<h4 className={styles.heading2}>SIZE GUIDE</h4>
</div>

        <div style={{display:"flex"}}>
          {[{size:"28",active:false,outofStock:false},
          {size:"30",active:true,outofStock:false},
          {size:"32",active:false,leftItems:"2 left",outofStock:false}, 
          {size:"34",active:false,outofStock:false},
          {size:"36",active:false,outofStock:true},
          {size:"28",active:false,outofStock:false}].map((sizes,index) =>  <div className={`${styles.size}`}>

        
        <span className={`${styles.sizeSpan} ${sizes.active?styles.sizeActive:styles.sizeNormal} ${sizes.outofStock?styles.sizeOutofstock:styles.sizeNormal}`}>{sizes.size}</span>
        <span className={styles.leftItemSpan}>{sizes?.leftItems}</span>


  </div>)
}
</div>
          
  <button className={styles.addToCart}> ADD TO CART </button>
      
  <h3>CHECK FOR DELIVERY DEAILS</h3>
      
            
            <div className={styles.contactDetails}>
              
                <div className={styles.sendLink}>
                <div className={styles.linkSend}>
                  <input placeholder="ENTER PINCODE" />
                  <div className={styles.button}>CHECK</div>
                </div>
              </div>
            </div>
       
         
          
      <h4>PRODUCT INFORMATION</h4>
        


      <div style={{display:"flex",flexDirection:"column"}}>
          {[{title:"Prodcut Description",subTitle:"Manufacture, care, fit"},
          {title:"Free shipping",subTitle:"We offer free shipping across india"},
          {title:"14 days Return & Exchange",subTitle:"Know about retun & exchange policy"}, 
         ].map((product,index) =>  <div className={styles.productInfo}>

        <img src={require(`../images/files.png`)} style={{width:"20px",height:"29px"}}/> 

        <div className={styles.description}>
        <div className={styles.offerTitle}>{product.title}</div>
        <div className={styles.offersSubTitle}>{product.subTitle}</div>
     </div>
<div className={styles.description} style={{marginLeft:"auto",fontSize: "26px"}}>
  <div className={styles.offerTitle}>+</div>
  
</div>
</div>)
}

</div>

      <h4>CUSTOM RATING & REVIEWS</h4>
        <div className={styles.reviewAndRatings}>
            <div >
               <h3 style={{marginLeft: "1rem",height: "10px" }}>4.0</h3>
              <div>84 review</div>
              {[1,2,3,4,5].map((_,index)=> <img src={require(`../images/star.png`)} style={{width:"10px",margin:"2px"}}/>) }

            </div >

            <div className={styles.ratinBar}>

             {[{reviewNo:"5",range:"15"},
             {reviewNo:"4",range:"34"},
             {reviewNo:"3",range:"26"},
             {reviewNo:"2",range:"5"},
             {reviewNo:"1",range:"4"}].map(rating=><div style={{display:"flex"}}>
              <span>{rating.reviewNo}</span>
              <div className={styles.ratingBarContainer}>
           <div className={styles.ratingBar} 
           style={{width: `${rating.range}%`, 
           backgroundColor: `${parseInt(rating.range)>10?"#185707":"lightgray"}`}}>
           </div>
          </div>
             
              <span style={{color:"lightgray"}}>({rating.range})</span>
               </div>)}
             </div>
             
            
             

              </div>
        

              <div className={styles.sizeHeading}>
<span >Harsha</span>
<span style={{color:"green", marginLeft:"5px"}}>Verified Buyer</span>
<span className={styles.heading2} style={{color:"gray"}}>7 month ago</span>
</div>
<div className={styles.review} style={{width:"27%"}}> 
         <span>
          <img src={require(`../images/star.png`)} 
          style={{width:"10px",
          height: "18px",
          marginTop: "13%"}}/> 
          <span>4</span></span> <hr/> 
          <span style={{ marginTop: "3px",
    fontSize: "12px"}}>Power blue, Size L</span></div>
     
     <p className={styles.productDescription}><span>Superb Product</span> Great Quality and nice design. will buy more products from Veirdo</p> 
     <div style={{display:"flex"}}>
          {["shirt1.jpg","shirt2.jpg","shirt3.jpg","shirt4.jpg"].map((img,index) =>  <div className={styles.colorBridge}>

        <img src={require(`../images/${img}`)} style={{width:"50px"}}/> 

  </div>)
}
</div>  
  </div>
  </div>

     
    
          
     
    </div>
  );
};

export default details;
