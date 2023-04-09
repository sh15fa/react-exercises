import React from 'react';
import './Style.css';

export default function Product(props) {
    return (
        <article className="product">
            <h3>{props.t}</h3>
            <p className="price">${props.p}</p>
            <p>{props.d}</p>
        </article>
    );
}