import IOptions, { ESortProductsByPrice } from "models/IProductsFilters";
import { ChangeEventHandler, FC } from "react";
import styles from './select-sort-filter.module.scss';
interface Props {
    id: string,
    options: IOptions[],
    onChange: ChangeEventHandler,
    defaultOption: ESortProductsByPrice
}

const SelectSortFilter: FC<Props> = ({ options, ...props }) => {
    const { id, onChange, defaultOption } = props
    return (
        <div className={styles.selectSortFilterContainer}>
            <select defaultValue={defaultOption} id={id} onChange={onChange}>
                {options.map((e) => {
                    return <option key={e.option + e.id} value={e.id}>{e.option}</option>
                })}
            </select>
        </div>
    )
}

export default SelectSortFilter
