import React, { Component } from "react";
import productsJson from "./data.json";
import DataElectronics from "./DataElectronics";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ethericOils: [],
      search: ""
    };

    this._handleQuery = this._handleQuery.bind(this);
  }

  componentDidMount() {
    let filteredOils = productsJson.data.filter(
      el => el.category === "Eteriske Oljer"
    );
    this.setState({ ethericOils: filteredOils });
  }

  render() {
    const newMappedOils = this.state.ethericOils.filter(el =>
      el.name.toLowerCase().includes(this.state.search)
    );
    const mappedOilProducts = newMappedOils.map((el, index) => (
      <DataElectronics
        name={el.name}
        price={el.price}
        stocked={el.stocked}
        key={index}
      />
    ));

    return (
      <div>
        <div className="navigation-fix" />
        <div className="shop-flexbox-container">
          <div className="shop-background-overlay">
            <div className="shop-navigation" />
            <div className="search-and-shop-container">
              <div className="search">
                <form>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={event => this._handleQuery(event)}
                  />
                  <br />
                  <input type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">Only show products in stock</label>
                </form>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>Eteriske Oljer</th>
                    <th>Pris</th>
                    <th>Kjøp</th>
                  </tr>
                  {mappedOilProducts}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _handleQuery(event) {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  }
}

export default App;
