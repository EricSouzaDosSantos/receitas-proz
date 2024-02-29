import React from 'react';
import styles from './pascoa.module.css';
import Ovo from '../../../assets/Pascoa.jpg';

function Pascoa() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ovo de Pascoa</h1>

            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={Ovo} alt="Hambúrguer Artesanal" />
                </div>

                <div className={styles.ingredients}>
                    <h2 className={styles.subtitle}>Ingredientes (1 porção)</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableHeader}>Ingrediente</th>
                                <th className={styles.tableHeader}>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chocolate ao leite</td>
                                <td>500g</td>
                            </tr>
                            <tr>
                                <td>Chocolate meio amargo</td>
                                <td>200g</td>
                            </tr>
                            <tr>
                                <td>Leite Condensado</td>
                                <td>1 lata</td>
                            </tr>
                            <tr>
                                <td>manteiga</td>
                                <td>1 colher de sopa</td>
                            </tr>
                            <tr>
                                <td>Morangos Frescos</td>
                                <td>100g</td>
                            </tr>
                            <tr>
                                <td>Creme de leite</td>
                                <td>1/2 xícara</td>
                            </tr>
                            <tr>
                                <td>cacau em pó</td>
                                <td>1 colher</td>
                            </tr>
                            <tr>
                                <td>Granulado</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Forma de ovo de pascoa</td>
                                <td>1 ou mais</td>
                            </tr>
                            <tr>
                                <td>Papel alumínio</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h2 className={styles.subtitle}>Modo de preparo:</h2>

            <div className={styles.preparation}>
                <ol className={styles.instructions}>
                    <li>Quebre o chocolate ao leite em pedaços pequenos e derreta em banho-maria ou no microondas, mexendo a cada 30 segundos para não queimar.</li>
                    <li>Pincele a forma de ovo de páscoa com o chocolate derretido, cobrindo toda a superficie. Leve á geladeira por cerca de 5 minutos para firmar. Repita o processo mais duas vezes formando uma camada grossa de chocolate. Reserve um pouco de chocolate derretido para fechar o ovo depois.</li>
                    <li>Temperar as carnes com sal e pimenta do reino a gosto.</li>
                    <li>Fazer bolinhas com a carne e pesar, cerca de 200g cada.</li>
                    <li>Embalar as bolinhas de carne e colocar na geladeira.</li>
                    <li>Tirar o bacon do forno, remover o excesso de óleo e voltar ao forno.</li>
                    <li>Passar a maionese nos pães.</li>
                    <li>Picar o picles e colocar no pão junto com a maionese.</li>
                    <li>Tirar o bacon do forno e deixar descansar em uma travessa com papel toalha.</li>
                    <li>Fritar os hambúrgueres em fogo alto em uma frigideira bem quente, sem usar óleo.</li>
                    <li>Virar os hambúrgueres para dourar ambos os lados.</li>
                    <li>Colocar os queijos sobre as carnes e levar ao forno a 200ºC até derreter.</li>
                    <li>Tirar os hambúrgueres do forno, adicionar o bacon e levar ao forno novamente.</li>
                    <li>Montar o lanche e está pronto para servir!</li>
                </ol>
            </div>
        </div>
    );
}

export default Pascoa;
