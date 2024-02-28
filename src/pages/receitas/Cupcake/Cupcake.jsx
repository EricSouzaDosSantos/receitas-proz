import React from 'react';
import './cup.css'; // Importando o arquivo CSS ajustado
import CupcakeImage from '../../../assets/Cup.jpg';

function Cup() {
    return (
        <>
        <html className="html">
                <hr className="hr" />
                <div className="cabecalho">
                    <h1 className="h1">CupCake Red Velvet</h1>
                </div>
                <hr className="hr" />
                <div className="container">
                    <div className="imagem">
                        <img src={CupcakeImage} id="imagem" alt="Cupcake Red Velvet" />
                    </div>
                    <div className="ingredientes">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="th">Ingredientes (10 porções)</th>
                                    <th className="th">Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="td">Farinha de trigo</td>
                                    <td className="td">350 g</td>
                                </tr>
                                <tr>
                                    <td className="td">Açúcar</td>
                                    <td className="td">300 g</td>
                                </tr>
                                <tr>
                                    <td className="td">Sal</td>
                                    <td className="td">1 pitada</td>
                                </tr>
                                <tr>
                                    <td className="td">Corante em gel vermelho</td>
                                    <td className="td">1 colher de chá</td>
                                </tr>
                                <tr>
                                    <td className="td">Leite</td>
                                    <td className="td">250 ml</td>
                                </tr>
                                <tr>
                                    <td className="td">Ovo</td>
                                    <td className="td">2</td>
                                </tr>
                                <tr>
                                    <td className="td">Margarina</td>
                                    <td className="td">300 g</td>
                                </tr>
                                <tr>
                                    <td className="td">Chocolate em pó</td>
                                    <td className="td">25 g</td>
                                </tr>
                                <tr>
                                    <td className="td">Bicarbonato de sódio</td>
                                    <td className="td">1 pitada</td>
                                </tr>
                                <tr>
                                    <td className="td">Vinagre</td>
                                    <td className="td">20 ml</td>
                                </tr>
                                <tr>
                                    <td className="td">Fermento químico para bolos</td>
                                    <td className="td">1 colher de sopa</td>
                                </tr>
                                <tr>
                                    <td className="td">Essência de baunilha</td>
                                    <td className="td">2 colheres de sopa</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br /><br />
                <div className="preparo">
                    <h2 className="h2">Modo de preparo</h2>
                    <h3 className="h3">Massa</h3>
                    <ol className="ol">
                        <li className="li">Bater a margarina com o açúcar e ovos até formar um creme claro, reserve. <br /><br />
                            Misturar à parte em uma vasilha os ingredientes secos. Adicionar o corante, a essência de baunilha,
                            o buttermilk (misturar do leite e o vinagre) e o creme reservado, alternando com os ingredientes secos.<br /><br />
                            Preparar a forma para os cupcakes, forrando com os pelotines número 0
                            (forminhas para cupcake).
                        </li><br />
                        <li className="li">Preaquecer o forno em 180°C.</li><br />
                        <li className="li">Coloque a massa em sacos de confeitar descartáveis e distribua nas forminhas. <br /><br />
                            Asse por aproximadamente 20 minutos.</li><br />
                        <li className="li">Para a cobertura, misture na batedeira a manteiga, a essência de baunilha, metade do açúcar
                            e o leite. <br /><br /> Bater até ficar cremoso. Diminuir a velocidade da batedeira e juntar aos poucos
                            o restante do açúcar, até o ponto de confeitar. <br /><br />Se necessário, acrescentar mais açúcar
                            até atingir o ponto desejado.
                        </li>
                    </ol>
                </div>
            </html>
        </>
    );
}

export default Cup;
