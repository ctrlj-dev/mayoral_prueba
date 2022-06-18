import IOptions from "models/IProductsFilters";
import { ChangeEventHandler, FC } from "react";
import styles from './select-sort-filter.module.scss';
interface Props {
    id: string,
    options: IOptions[],
    onChange: ChangeEventHandler
}

const SelectSortFilter: FC<Props> = ({ options, ...props }) => {

    const { id, onChange } = props
    return (
        <div defaultValue={options[0].id} className={styles.selectSortFilterContainer}>
            <select id={id} onChange={onChange}>     
                {options.map((e) => {
                    return <option key={e.option + e.id} value={e.id}>{e.option}</option>
                })}
            </select>
        </div>
    )
}

export default SelectSortFilter
