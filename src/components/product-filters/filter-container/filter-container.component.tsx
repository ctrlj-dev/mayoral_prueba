import { FC } from 'react';
import styles from './filter-container.module.scss';

interface Props {
    className?: string
    children?: JSX.Element[] | JSX.Element,
}

const FilterContainer: FC<Props> = (props) => {
    const { className, children } = props
    return (
        <div className={`${styles.filterRow} ${className} row`}>
                {children}
        </div>
    )
}
export default FilterContainer