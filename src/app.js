import React, { Component } from 'react';
import { Restaurant } from './restaurant';
import './app.scss';

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
                    restaurants: sort(res)
                });
            });

        function sort(restaurants) {
            return restaurants.sort((a, b) => {
                let aTitle = a.title.rendered.toLowerCase(),
                    bTitle = b.title.rendered.toLowerCase();
                if (aTitle < bTitle) return -1;
                if (aTitle > bTitle) return 1;
                return 0;
            });
        }
    }

    render() {
        const restaurants = this.state.restaurants
            .map((restaurant, index) => (
                <li key={index}>
                    <Restaurant restaurant={restaurant} />
                </li>
            ));
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
