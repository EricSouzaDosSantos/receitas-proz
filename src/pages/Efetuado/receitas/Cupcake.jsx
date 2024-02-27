import React from 'react';
import './cup.css';
import CupcakeImage from '../../../assets/Cup.jpg';

function Cup() {

    return (
        <>
            <hr/>
            <div className="cabecalho">
                <h1>CupCake Red Velvet</h1>
            </div>
            <hr/>
            <div className="container">
                <div className="imagem">
                    <img src={CupcakeImage} id="imagem" alt="Cupcake Red Velvet" />
                </div>
                <div className="ingredientes">
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredientes (10 porções)</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Farinha de trigo</td>
                                <td>350 g</td>
                            </tr>
                            <tr>
                                <td>Açúcar</td>
                                <td>300 g</td>
                            </tr>
                            <tr>
                                <td>Sal</td>
                                <td>1 pitada</td>
                            </tr>
                            <tr>
                                <td>Corante em gel vermelho</td>
                                <td>1 colher de chá</td>
                            </tr>
                            <tr>
                                <td>Leite</td>
                                <td>250 ml</td>
                            </tr>
                            <tr>
                                <td>Ovo</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Margarina</td>
                                <td>300 g</td>
                            </tr>
                            <tr>
                                <td>Chocolate em pó</td>
                                <td>25 g</td>
                            </tr>
                            <tr>
                                <td>Bicarbonato de sódio</td>
                                <td>1 pitada</td>
                            </tr>
                            <tr>
                                <td>Vinagre</td>
                                <td>20 ml</td>
                            </tr>
                            <tr>
                                <td>Fermento químico para bolos</td>
                                <td>1 colher de sopa</td>
                            </tr>
                            <tr>
                                <td>Essência de baunilha</td>
                                <td>2 colheres de sopa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br /><br />
            <div className="preparo">
                <h2>Modo de preparo</h2>
                <h3>Massa</h3>
                <ol>
                    <li>Bater a margarina com o açúcar e ovos até formar um creme claro, reserve. <br /><br />
                        Misturar à parte em uma vasilha os ingredientes secos. Adicionar o corante, a essência de baunilha,
                        o buttermilk (misturar do leite e o vinagre) e o creme reservado, alternando com os ingredientes secos.<br /><br />
                        Preparar a forma para os cupcakes, forrando com os pelotines número 0
                        (forminhas para cupcake).
                    </li><br />
                    <li>Preaquecer o forno em 180°C.</li><br />
                    <li>Coloque a massa em sacos de confeitar descartáveis e distribua nas forminhas. <br /><br />
                        Asse por aproximadamente 20 minutos.</li><br />
                    <li>Para a cobertura, misture na batedeira a manteiga, a essência de baunilha, metade do açúcar
                        e o leite. <br /><br /> Bater até ficar cremoso. Diminuir a velocidade da batedeira e juntar aos poucos
                        o restante do açúcar, até o ponto de confeitar. <br /><br />Se necessário, acrescentar mais açúcar
                        até atingir o ponto desejado.
                    </li>
                </ol>
            </div>
        </>
    );
}

export default Cup;
