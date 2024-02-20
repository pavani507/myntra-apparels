import React  from "react";
import styles from "./footer.module.scss";



function Footer() {
 

  return (
    <div className={`${styles.wrapper}`}>

<div className={styles.footerHeadingDiv}>

<div className={styles.footerHeading}>
 <h1>JOIN OUR VEIRDO FAM</h1>
 <p>Here the space for marketing bro's to use some combinations of alpabets to convence people to give their email </p>
</div>
     <div className={styles.sendLink}>
            
                <div className={styles.linkSend}>
                  <input placeholder="veirdo@yahoo.com" />
                  <div className={styles.button}>SUBSCRIBE</div>
                </div>
              </div>
</div>

<div className={styles.socialMedia}>

  <span>INSTAMGRAM</span>
  <span>LINKED IN</span>
  <span>WHATS APP</span>
  <span>TWITTER</span>


</div>
    


        
       
        <div className={styles.sections}>
          
          <div className={styles.sectionData}>
            <h6>CATEGORIES</h6>

            <div className={styles.list}>
            {["NEW ARRIVALS","BESTSELLERS","WINTER-WARE","T_SHIRTS","SHIRTS","SWETERSHIRTS"].map(link=><p
               
               >
                {link}
                
               </p>)}
             
               </div>
          </div>

          <div className={styles.sectionData}>
            <h6>COMPANY</h6>

            <div className={styles.list}>
            {["ABOUT US","BLOG","PRIVACY POLICY","TERMS & CONDITIONS","WORK WITH US"].map(link=><p
               
               >
                {link}
                
               </p>)}
             
               </div>
          </div>
          <div className={styles.sectionData}>
            <h6>FOR CUSTOMERS</h6>

            <div className={styles.list}>
            {["CONTACT US","FAQ`S","TRACK ORDER","RETURN POLICY","SHIPPING POLICY"].map(link=><p
               
               >
                {link}
                
               </p>)}
             
               </div>
          </div>
         
          
        
        <br />
      </div>
     
    <div className={styles.rights}>@2023 VEIRDO All Rights Reserved by Pratyaya E-commerece Pvt Ltd</div>
    </div>
  );
}

export default Footer;
