import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        pessoas: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get();
        this.setState({ pessoas: response.data.pessoas });
    }

    render() {
        const { pessoas } = this.state;
        return (
            <div className="lista-pessoas">
                {pessoas.map(pessoa => (
                    <article key={pessoa._id}>
                        <strong>{pessoa.nomeCompleto.nome}</strong>
                        <p>{pessoa.email}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}