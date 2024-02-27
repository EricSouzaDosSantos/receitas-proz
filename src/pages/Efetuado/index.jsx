import React from 'react';
import './receitas.css';
import CupcakeImage from '../../assets/Cup.jpg';
import BurgerImage from '../../assets/Hamburguer.jpg';
import EasterEggImage from '../../assets/Pascoa.jpg';
import { Link } from 'react-router-dom';


export function Nave() {

    return (
        <>
            <header>
                <h1>Escolha sua receita</h1>
            </header>
            <div>
                <div className="container">
                    <div className="recipe">
                        <Link to={'receitas/'}>
                        <img src={CupcakeImage} alt="Cupcake" />
                        <p>CupCake</p>
                        </Link>
                    </div>
                    <div className="recipe">
                        <img src={BurgerImage} alt="Hambúrguer" />
                        <p>Hambúrguer</p>
                    </div>
                    <div className="recipe">
                        <img src={EasterEggImage} alt="Ovo de Páscoa" />
                        <p>Ovo de Páscoa</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nave;
