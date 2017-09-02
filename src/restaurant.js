import React, { Component } from 'react';

export class Restaurant extends Component {
    render() {
        const restaurant = this.props.restaurant;
        return (
            <div>
                <h3 dangerouslySetInnerHTML={{ __html: restaurant.title.rendered }}></h3>
                <strong>Description: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.description }}></span>
                <br />
                <strong>Address: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.address }}></span>
                <br />
                <strong>Favourite Dishes: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.favourite_dishes }}></span>
                <br />
                {restaurant.acf.price_class && <span>
                    <strong>Price class: </strong> {restaurant.acf.price_class}
                    <br />
                </span>}
                <strong>Link: </strong><a href={restaurant.acf.link}>{restaurant.acf.link}</a>
            </div>
        );
    }
}
