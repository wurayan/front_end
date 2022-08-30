import React from "react";

const TabelaFoot = props => (
    <tfoot>
            <tr>
            <td colSpan={4}>
                Quantidade: {props.qtd_livros} livros
            </td>
            </tr>
        
    </tfoot>
)

export default TabelaFoot