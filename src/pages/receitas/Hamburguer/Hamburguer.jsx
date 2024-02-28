import React from 'react';
import styles from './hamburgue.module.css';
import HamburguerImage from '../../../assets/Hamburguer.jpg';

function Hamburguer() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hambúrguer Artesanal</h1>

            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={HamburguerImage} alt="Hambúrguer Artesanal" />
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
                                <td>Carne</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Sal</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Pimenta do Reino</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Pão</td>
                                <td>2 fatias</td>
                            </tr>
                            <tr>
                                <td>Bacon Fatiado</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Queijo</td>
                                <td>3 fatias</td>
                            </tr>
                            <tr>
                                <td>Maionese</td>
                                <td>1 colher</td>
                            </tr>
                            <tr>
                                <td>Picles</td>
                                <td>a gosto</td>
                            </tr>
                            <tr>
                                <td>Alface</td>
                                <td>2 folhas</td>
                            </tr>
                            <tr>
                                <td>Tomate</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h2 className={styles.subtitle}>Modo de preparo:</h2>

            <div className={styles.preparation}>
                <ol className={styles.instructions}>
                    <li>Moer as carnes todas juntas.</li>
                    <li>Preparar o bacon no forno a 200ºC por cerca de 20 minutos até ficar crocante.</li>
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

export default Hamburguer;
