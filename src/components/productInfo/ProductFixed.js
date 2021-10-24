import React from 'react'
import {courses,sale} from '../../dummyData/courses'
import '../../scss/_product-cta.scss'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useScrollTracker from '../../customHooks/useScrollTracker'
const ProductFixed = () => {


    const {
        title,
        img,
        price,
        saleOptIn,
        length,
        accessType,
        certification,
      } = courses[0];

      const currentPrice =saleOptIn && sale ? price * sale :price

      const {tooClose} =useScrollTracker(90);

      console.log(tooClose);

    const fixedClass =tooClose 
    ? "product-cta__buynow product-cta__buynow--offset " :
    "product-cta__buynow"
    return (
        <div className={fixedClass}>
            <img className="product-cta__buynow--top" src={img} alt='top img' />
            <div className="product-cta__buynow--bottom">
            <div className="product-cta__buynow--bottom--price">₹:{currentPrice}
            {saleOptIn && sale ?(
                <span className="product-cta__buynow--bottom--price--slash"></span>
            ): null}
            </div>
            <input className="product-cta__buynow--bottom--addtocard" type='submit'value='add to card'  />
            <div className="product-cta__buynow--bottom--points">
                <strong>
                    <ul>courses includes with :</ul>
                </strong>
            </div>
            <div className="product-cta__buynow--bottom--points--medium">
                <li>length :{length}</li>
                <li>length :{accessType}</li>
                <li>certification :{certification}</li>
                
            </div>
            </div>
          
            
        </div>
    )
}

export default ProductFixed
