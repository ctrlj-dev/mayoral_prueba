import React, { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import {SearchIcon} from "components/svg-icons/svg-icons.component";
import styles from "./product-search-filter.module.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    placeholder: string
    onChange: ChangeEventHandler
}

const ProductSearchFilter: FC<Props> = props => {
    const { id, placeholder, onChange} = props
    return (
        <div className={styles.searchContainer}>
            <SearchIcon/>
            <input
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                type={'text'}
            />
        </div>
    )
}

export default ProductSearchFilter

