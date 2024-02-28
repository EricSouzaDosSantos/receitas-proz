import React from 'react';
import styles from './receitas.module.css';
import CupcakeImage from '../../assets/Cup.jpg';
import BurgerImage from '../../assets/Hamburguer.jpg';
import EasterEggImage from '../../assets/Pascoa.jpg';
import { Link } from 'react-router-dom';

function Receita({ to, imageSrc, alt, title }) {
    return (
        <div className={styles.recipe}>
            <Link to={to}>
                <img src={imageSrc} alt={alt} />
                <p className={styles.recipeTitle}>{title}</p>
            </Link>
        </div>
    );
}

export function Nave() {
    return (
        <>
            <body className={styles.body}>
                <header>
                    <h1 className={styles.title}>Escolha sua receita</h1>
                </header>
                <div className={styles.div}>
                    <div className={styles.container}>
                        <Receita to={'../receitas/Cupcake'} imageSrc={CupcakeImage} alt="Cupcake" title="CupCake" />
                        <Receita to={'../receitas/Hamburguer'} imageSrc={BurgerImage} alt="Hambúrguer" title="Hambúrguer" />
                        <Receita to={'receitas/'} imageSrc={EasterEggImage} alt="Ovo de Páscoa" title="Ovo de Páscoa" />
                    </div>
                </div>
            </body>
        </>
    );
}

export default Nave;
