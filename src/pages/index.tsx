import axios from "axios";
import ProductCardComponent from "components/product-card/product-card.component";
import ProductSearchFilter from "components/product-filters/search-filter/product-search-filter.component";
import SelectSortFilter from "components/product-filters/select-sort-filter/select-sort-filter-component";
import ProductViewChanger from "components/product-view-changer/product-view-changer-component";
import { NextPage } from "next";
import { useEffect, useState } from 'react';
import Head from '../../node_modules/next/head';
import IProduct from '../models/IProduct';
import styles from '../styles/home.module.scss';
import { orderProducts } from "../tools/tools";

const endpoint = "https://json.ctrlj.es/mayoral/products.json";

interface Props {
    datos: IProduct[]
}

export const getServerSideProps = async () => {
    const res = await axios.get(
        ` ${endpoint}`,
    );
    const datos = res.data;
    return { props: { datos } };
}

const HomePage: NextPage<Props> = ({ datos }) => {

    const [productsList] = useState<IProduct[]>(datos);
    const [searchResults, setSearchResults] = useState<IProduct[]>(datos);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [moreProductsView, setMoreProductsView] = useState<boolean>();
    const [lessProductsView, setLessProductsView] = useState<boolean>();
    const [selectedOption, setSelectedOption] = useState<string>();

    const options =
        [
            { id: 1, option: "Ordenar por precio" },
            { id: 2, option: "Ascendente" },
            { id: 3, option: "Descendete" }
        ]

    const results = !searchTerm ? productsList.concat().sort((a: IProduct, b: IProduct) =>
        orderProducts(a, b, selectedOption)
    ) :
        productsList.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ).concat().sort((a, b) => orderProducts(a, b, selectedOption))


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

    useEffect(() => {
        setSearchResults(results)
    }, [searchTerm, selectedOption]);


    return <>
        <Head>
            <title>Mayoral</title>
            <meta property="og:title" content="My page title" key="title" />
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




