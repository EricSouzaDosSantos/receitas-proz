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
                    <br></br>

                    <li>Pincele a forma de ovo de páscoa com o chocolate derretido, cobrindo toda a superficie. Leve á geladeira por cerca de 5 minutos para firmar. Repita o processo mais duas vezes formando uma camada grossa de chocolate. Reserve um pouco de chocolate derretido para fechar o ovo depois.</li>
                    <br></br>

                    <li>Enquanto isso, prepare o recheio de brigadeiro: em uma panela, coloque o leite condensado, a manteiga e o cacau em pó. Leve ao fogo baixo, mexendo sempre, até começar a desgrudar do fundo da panela e formar um brigadeiro cremoso. Desligue o fogo, adicione o creme de leite e misture bem. Deixe esfriar.</li>
                    <br></br>

                    <li>Lave e seque os morangos. Corte-os em fatias finas.</li>
                    <br></br>

                    <li>Retire a forma da geladeira e espalhe o recheio de brigadeiro no interior do ovo, deixando um espaço na borda. Disponha as fatias de morango sobre o brigadeiro.</li>
                    <br></br>

                    <li>Derreta o chocolate meio amargo da mesma forma que fez com o chocolate ao leite. Pincele as bordas do ovo com o chocolate meio amargo derretido e cubra o recheio com uma camada fina de chocolate. Volte à geladeira por mais alguns minutos para firmar.</li>
                    <br></br>

                    <li>Retire da geladeira e desenforme cuidadosamente. Se desejar, decore com granulado de chocolate.</li>
                    <br></br>

                    <li>Embrulhe o ovo em papel alumínio e armazene na geladeira até a hora de servir.</li>
                    
                </ol>
            </div>
        </div>
    );
}

export default Pascoa;
