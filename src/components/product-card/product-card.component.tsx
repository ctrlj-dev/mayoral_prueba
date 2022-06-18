import IProduct from 'models/IProduct';
import Image from 'next/image';
import { FC } from 'react';
import { calculateDiscount, roundToTwo } from '../../tools/tools';
import styles from './product-card.module.scss';

export interface Props extends IProduct {
    showMoreProduct?: boolean,
    showLessProduct?: boolean
}

const ProductCardComponent: FC<Props> = (props) => {
    const { name, discount, price, featuredImg, colors, showMoreProduct, showLessProduct } = props;  
    return (
        <div className={`${styles.productCard} ${showMoreProduct && styles.moreProductView} ${showLessProduct && styles.lessProductView}`}>
            <div className={styles.productCardContainer}>
                <Image priority width={80} height={80} layout='responsive' src={featuredImg} alt={name} />
                <h2 className={styles.productName}>{name}</h2>
                <div className={styles.productCardBody}>
                    {discount ?
                        <>
                            <p className={styles.oldPrice}>{price}</p>
                            <p className={styles.priceWithDiscount}>{roundToTwo(calculateDiscount(price, discount))} <span>(-{discount}%)</span></p>
                        </>
                        :
                        <p className={styles.price}>{price}</p>
                    }
                    {colors && <p className={styles.colors}>más colores</p>}
                </div>
                <button>Añadir</button>
            </div>
        </div>
    )
}
export default ProductCardComponent