var ProductListItem = React.createClass({

    getInitialState: function() {
        return {
            showNotAbleToRemove: false
        }
    },


    render: function() {
        var notAbleToRemove = null;
        if (this.state.showNotAbleToRemove) {
            var notAbleToRemove = (
                <div className="row text-danger">
                    <span className="col-sm-12">
                        Not able to remove this element
                    </span>
                </div>
            );
        }

        return (
            <div>
                <div className="col-sm-5">
                    {this.props.product.name}
                    {notAbleToRemove}
                </div>
                <div className="col-sm-4">
                    {this.props.product.category.name}
                </div>
                <div className="col-sm-2">
                    {this.props.product.price}
                </div>
                <div className="col-sm-1">
                    <a href="#" onClick={this.delete} className="glyphicon glyphicon-remove-circle text-danger"></a>
                </div>
            </div>
        )
    },

    delete: function(event) {
        event.preventDefault();

        if (!this.props.product.isRemovable) {
            this.setState({
                showNotAbleToRemove: true
            });

            setTimeout(function() {
                this.setState({
                    showNotAbleToRemove: false
                });
            }.bind(this), 3000);

            return;
        }

        // Call the parent and tell to remove this component
        this.props.onChange('delete', this.props.product.id);
    }
});
