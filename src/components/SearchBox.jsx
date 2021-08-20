import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBox = (props) => {
  const [keyword, setKeyword] = useState("");
  // const [active, setActive] = useState(false);
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/search=${keyword}`);
    } else {
      history.push("/products");
    }
    setKeyword("");
  };

  const handleOnChangeEnter = (e) => {
    if (e.key === "Enter") {
      setKeyword("");
    }
  };

  // const toggleSearch = (e) => {
  //   setActive(!active);
  // }

  return (
    <div>
      <form
        className={`header__menu__form`}
        action="/products"
        onSubmit={submitHandler}
      >
        <input
          className="header__menu__form__input"
          name="q"
          type="text"
          placeholder="Nhập tên thuốc..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value.toLowerCase())}
          onKeyUp={handleOnChangeEnter}
        />

        <i
          className="header__menu__right__item_icon_search bx bx-search"
          onClick={submitHandler}
        ></i>
        
      </form>
    </div>
  );
};

export default SearchBox;
