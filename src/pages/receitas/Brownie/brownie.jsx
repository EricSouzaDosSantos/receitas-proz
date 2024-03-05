import React from 'react';
import style from './brownie.module.css'
import '../../../assets/'

 function Brow() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ovo de Pascoa</h1>

            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={Ovo} alt="Hambúrguer Artesanal" />
                </div>

                <div className={styles.ingredients}>
                    <h2 className={styles.subtitle}>Ingredientes (1 porção)</h2>
                    <table className={styles.table} >
                        <thead>
                            <tr>
                                <th className={styles.tableHeader}>Ingrediente</th>
                                <th className={styles.tableHeader}>Quantidade</th>
                            </tr>
                        </thead>
                       <tbody>
                        
                        </tbody> 

                        </table>
                        </div>
                        </div>
                        </div>

        
    );
}

export default Brow;