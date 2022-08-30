import React from 'react'

const TabelaBody = props => (
    <tbody>
        {props.livros.map( (livro, index) => (
            <tr>
            <td>{livro.id}</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>
                <button className='botao remover' onClick={ () => props.removerLinha(livro.id)}>remover</button>
            </td>
            </tr>
        ))}
       
    </tbody>
)

export default TabelaBody