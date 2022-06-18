import ProductCard from "components/product-card/product-card.component";
import FilterContainer from "components/product-filters/filter-container/filter-container.compontent";
import ProductSearchFilter from "components/product-filters/search-filter/product-search-filter.component";
import SelectSortFilter from "components/product-filters/select-sort-filter/select-sort-filter-component";
import ProductViewChanger from "components/product-view-changer/product-view-changer-component";
import { ESortProductsByPrice } from "models/IProductsFilters";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from 'react';
import { getAllProducts } from "services/productsServices";
import Head from '../../node_modules/next/head';
import IProduct from '../models/IProduct';
import { dataSortSearchResults } from "../tools/tools";
import styles from "../styles/home.module.scss"
interface Props {
    data: IProduct[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getAllProducts();
    const data = res
    return { props: { data } };
}

const HomePage: NextPage<Props> = ({ data }) => {

    //#region useState
    const [productsList] = useState<IProduct[]>(data);
    const [searchResults, setSearchResults] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [changeProductsView, setChangeProductsView] = useState<boolean>(true);
    const [selectedOption, setSelectedOption] = useState<string>();
    //#endregion useState


    //#region Data
    const options =
        [
            { id: 1, option: "Ordenar por:" },
            { id: 2, option: "Precio ascendente" },
            { id: 3, option: "Precio descendete" }
        ]
    //#endregion Data    

    //#region Functions
    const results = dataSortSearchResults(searchTerm, searchResults, productsList, selectedOption);
    //#endregion  Functions    

    //#region handlers        
    const handleSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleViewMoreProducts = () => {
        setChangeProductsView(true)
    }

    const handleViewLessProducts = () => {
        setChangeProductsView(false)
    }
    //#endregion handlers

    //#region useEffect
    useEffect(() => {
        setSearchResults(results)
    }, [searchTerm, selectedOption]);
    //#endregion useEffect

    return <>
        <Head>
            <title>Mayoral - Prueba técnica Jesús Cortés</title>
            <meta property="og:title" content="Mayoral - Prueba técnica Jesús Cortés" key="title" />
            <meta property="og:description" content="Una prueba técnica para entrar a trabajar a Mayoral :)"></meta>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className="container">

            <FilterContainer>
                <div className={styles.filterColumn}>
                    <ProductViewChanger viewLessProductEvent={handleViewLessProducts} viewMoreProductEvent={handleViewMoreProducts} />
                </div>
                <div className={styles.filterColumn}>
                    <ProductSearchFilter className={"searchFilter"} id={"searchProductInput"} placeholder="Buscar" value={searchTerm} onChange={handleSearch} />
                </div>
                <div className={styles.filterColumn}>
                    <SelectSortFilter defaultOption={ESortProductsByPrice.NOORDER} id={"selectSortFilter"} options={options} onChange={handleChange} />
                </div>                
            </FilterContainer>

            <div className="row">
                {searchResults.map((product) => (
                    <ProductCard
                        key={product.id + product.name}
                        id={product.id}
                        name={product.name}
                        discount={product.discount}
                        colors={product.colors}
                        price={product.price}
                        changeProductsView={changeProductsView}
                        featuredImg={product.featuredImg}
                    />
                )
                )}
            </div>

        </section>
    </>

};

export default HomePage;




