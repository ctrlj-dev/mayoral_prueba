import React, { ChangeEventHandler, FC, InputHTMLAttributes } from "react";
import { SearchIcon } from "components/svg-icons/svg-icons.component";
import styles from "./product-search-filter.module.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    placeholder: string
    onChange: ChangeEventHandler
    className?: string
    value: string,
}

const ProductSearchFilter: FC<Props> = props => {
    const { id, placeholder, onChange, className, value} = props
    return (
        <div className={styles.searchContainer}>
            <SearchIcon />
            <input
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                value={value}
                type={'text'}
            />
        </div>
    )
}

export default ProductSearchFilter

