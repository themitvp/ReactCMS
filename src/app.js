import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: []
        };
    }

    componentDidMount() {
        const dataURL = 'http://aplodesign.dk/wp-react-api/wp-json/wp/v2/restaurants?_embed';
        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    restaurants: res
                });
            });
    }

    render() {
        const restaurants = this.state.restaurants.map((restaurant, index) => {
            return (
                <li key={index}>
                    <h3 dangerouslySetInnerHTML={{ __html: restaurant.title.rendered }}></h3>
                    <strong>Description: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.description }}></span>
                    <br />
                    <strong>Address: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.address }}></span>
                    <br />
                    <strong>Favourite Dishes: </strong><span dangerouslySetInnerHTML={{ __html: restaurant.acf.favourite_dishes }}></span>
                    <br />
                    <strong>Link: </strong><a href={restaurant.acf.link}>{restaurant.acf.link}</a>
                </li>
            );
        });
        return (
            <div>
                <h1>Restaurants fetched from Wordpress:</h1>
                <ul>
                    {restaurants}
                </ul>
            </div>
        );
    }
}

export default App;
