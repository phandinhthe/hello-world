import React from 'react';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filterText: 'ball', inStockOnly: false};
    this.handleSetFilterInput = this.handleSetFilterInput.bind(this);
    this.handleSetInStockOnly = this.handleSetInStockOnly.bind(this);

  }

  handleSetFilterInput(filterText) {
    this.setState({filterText: filterText});
  }

  handleSetInStockOnly(inStockOnly) {
    this.setState({inStockOnly: inStockOnly});
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
          onChangeFilterInput={this.handleSetFilterInput}/>

        <ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}
          onChangeStockOnly={this.handleSetInStockOnly} products={PRODUCTS}/>
      </div>
    )
  }
}

export default FilterableProductTable;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetFilterText = this.handleSetFilterText.bind(this);
    this.handleSetInStockOnly = this.handleSetInStockOnly.bind(this);
  }

  handleSetFilterText(event) {
    this.props.onChangeFilterInput(event.target.value);
  }

  handleSetInStockOnly(event) {
    this.props.onChangeStockOnly(event.target.value);
  }

  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleSetFilterText} />
        </div>
        <div>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleSetInStockOnly} />
          {' '} Only show products in stock
        </div>

      </form>
    )
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 ||
        (!product.stocked && this.props.inStockOnly)) {
          return;
      }

      if(product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">
          {this.props.category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ? this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    var price = this.props.product.price;

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );

  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
