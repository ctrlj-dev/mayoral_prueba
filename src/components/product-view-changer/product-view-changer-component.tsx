import { CrossIcon, LineIcon } from 'components/svg-icons/svg-icons.component'
import { FC, MouseEventHandler } from 'react'
import styles from './product-view-changer.module.scss'

interface Props {
    viewMoreProductEvent: MouseEventHandler
    viewLessProductEvent: MouseEventHandler
}

const ProductViewChanger: FC<Props> = props => {
    const { viewMoreProductEvent, viewLessProductEvent } = props
    return (
        <div className={styles.productViewChangerContainer}>
            <button id="showLessProductosbutton" onClick={viewLessProductEvent}><LineIcon/></button>
            <button id="showMoreProductosbutton" onClick={viewMoreProductEvent}><CrossIcon/></button>
        </div>
    )
}

export default ProductViewChanger

