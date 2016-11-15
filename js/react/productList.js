/**
 * ProductList Component
 */
var ProductList = React.createClass({

    getInitialState: function() {
        return {
            products: undefined
        }
    },

    componentWillMount: function() {
        // Get information from server (A fake one in this case)
        $.getJSON(
            'api/products.json',
            function(data) {
                // Store the ajax data into the state of component
                this.setState({
                    products: data,
                });
            }.bind(this)
        );
    },

    /**
     * @returns {XML}
     */
    render: function() {
        if (this.state.products == undefined) {
            return (
                <span>Loading ...</span>
            );
        }

        if (!this.state.products.length) {
            return (
                <span>No items in the list</span>
            );
        }

        var products = this.state.products;
        var productList = products.map(function (item) {
            return (
                <div className="row" key={item.id}>
                    <ProductListItem product={item} products={products} onChange={this.actionHandler} />
                </div>
            );
        }.bind(this));

        return (
            <div>
                {productList}
            </div>
        );
    },

    actionHandler: function(action, subject) {

        switch (action) {
            case 'add':
                // TODO
            break;
            case 'edit':
                // TODO
            break;
            case 'delete':
                this.delete(subject)
            break;
        }
    },

    /**
     * Delete an element from the component.
     *
     * @param productId
     */
    delete: function(productId) {
        var products = this.state.products;

        for(var i=0; i< products.length; i++) {
            if (products[i].id == productId) {
                products.splice(i, 1);
            }
        }

        this.setState({
            products: products
        })
    }
});

ReactDOM.render(<ProductList />, document.getElementById('product-list'));