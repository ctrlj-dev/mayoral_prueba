import axios from "axios";
import ProductCardComponent from "components/product-card/product-card.component";
import ProductSearchFilter from "components/product-filters/search-filter/product-search-filter.component";
import SelectSortFilter from "components/product-filters/select-sort-filter/select-sort-filter-component";
import ProductViewChanger from "components/product-view-changer/product-view-changer-component";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from 'react';
import Head from '../../node_modules/next/head';
import IProduct from '../models/IProduct';
import styles from '../styles/home.module.scss';
import { dataSortSearchResults } from "../tools/tools";

const endpoint = "https://json.ctrlj.es/mayoral/products.json";

interface Props {
    data: IProduct[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get(
        ` ${endpoint}`,
    );
    const data = res.data;
    return { props: { data } };
}

const HomePage: NextPage<Props> = ({ data }) => {

    //#region useState
    const [productsList] = useState<IProduct[]>(data);
    const [searchResults, setSearchResults] = useState<IProduct[]>(data);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [moreProductsView, setMoreProductsView] = useState<boolean>();
    const [lessProductsView, setLessProductsView] = useState<boolean>();
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
    const results = dataSortSearchResults(searchTerm, productsList, selectedOption);
    //#endregion  Functions    

     //#region handlers        
    const handleSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleViewMoreProducts = () => {
        setMoreProductsView(true)
        setLessProductsView(false)
    }

    const handleViewLessProducts = () => {
        setLessProductsView(true)
        setMoreProductsView(false)
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

            <div className={`${styles.filterRow} row`}>
                <div className={styles.filterColumn}>
                    <ProductViewChanger viewLessProductEvent={handleViewLessProducts} viewMoreProductEvent={handleViewMoreProducts} />
                </div>
                <div className={styles.filterColumn}><ProductSearchFilter className={styles.searchFilter} id={"searchProductInput"} placeholder="Buscar" value={searchTerm} onChange={handleSearch} />
                </div>
                <div className={styles.filterColumn}>
                    <SelectSortFilter id={"selectSortFilter"} options={options} onChange={handleChange} />
                </div>
            </div>


            <div className="row">
                {searchResults.map((product) => (
                    <ProductCardComponent
                        key={product.id + product.name}
                        id={product.id}
                        name={product.name}
                        discount={product.discount}
                        colors={product.colors}
                        price={product.price}
                        showLessProduct={lessProductsView}
                        showMoreProduct={moreProductsView}
                        featuredImg={product.featuredImg}
                    />
                )
                )}
            </div>
        </section>
    </>

};


export default HomePage;




