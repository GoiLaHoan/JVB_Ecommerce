import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }
  submitHandler = (e) => {
    const { keyword } = this.state;
    e.preventDefault();
    if (keyword.trim()) {
      this.props.history.push(`/products/search=${keyword}`);
    } else {
      this.props.history.push("/products");
    }
  };

  handleOnChangeEnter = (e) => {
    if (e.key === "Enter") {
      this.setState({keyword: ""});
    }
  };

  render() {
    return (
      <div>
        <form
          className="header__menu__form"
          action="/products"
          onSubmit={this.submitHandler}
        >
          <input
            className="header__menu__form__input"
            name="q"
            type="text"
            placeholder="Nhập tên thuốc..."
            value={this.state.keyword}
            onChange={(e) => this.setState({ keyword: e.target.value.toLowerCase() })}
            onKeyUp={this.handleOnChangeEnter}
          />
          <i className="header__menu__right__item_icon_search bx bx-search"></i>

          {/* <Link to="/products"></Link> */}
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBox);
