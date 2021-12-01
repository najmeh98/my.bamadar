import React, { useMemo, useState, useEffect, useCallback } from "react";

export const CartContext = React.createContext({
  products: [],
  AddProduct: () => {},
  removeProduct: () => {},
  DeleteProduct: () => {},
  AddtoCart: () => {},
});

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [hasLoded, setHasLoded] = useState(false);

  // save list to localStorage
  useEffect(() => {
    if (hasLoded) {
      localStorage.setItem("list", JSON.stringify(products));
    }
  }, [hasLoded, products]);

  //Get list from localStorage

  useEffect(() => {
    if (!hasLoded) {
      let savedproducts = localStorage.getItem("list");
      if (savedproducts) {
        setProducts(JSON.parse(savedproducts));
      }
      setHasLoded(true);
    }
  }, [hasLoded]);

  const DeleteProduct = useCallback(
    (id) => {
      let index = products.findIndex((p) => p.id == id);
      setProducts([...products.slice(0, index), ...products.slice(index + 1)]);
    },
    [products]
  );

  const AddProduct = useCallback(
    (id) => {
      let index = products.findIndex((p) => p.id == id);
      setProducts([
        ...products.slice(0, index),
        { ...products[index], balance: products[index].balance + 1 },
        ...products.slice(index + 1),
      ]);
    },
    [products]
  );

  const removeProduct = useCallback(
    (id) => {
      let index = products.findIndex((p) => p.id == id);
      let balance = products[index].balance - 1;
      setProducts([
        ...products.slice(0, index),
        { ...products[index], balance: balance < 1 ? 1 : balance },
        ...products.slice(index + 1),
      ]);
    },
    [products]
  );

  const AddtoCart = useCallback(
    (product) => {
      let index = products.findIndex((p) => p.id === product.id);
      // if (index > -1) {
      //   setProducts(
      //     products.map((product) => {
      //       if (product.id === id) {
      //         return { ...product, balance: product.balance + 1 };
      //       } else {
      //         return product;
      //       }
      //     })
      //   );
      // } else {
      //   setProducts([...products, { ...product, balance: 1 }]);
      // }
      setProducts([...products, { ...product, balance: 1 }]);
    },
    [products]
  );

  const value = useMemo(
    () => ({
      removeProduct,
      AddProduct,
      DeleteProduct,
      products,
      AddtoCart,
    }),
    [AddProduct, DeleteProduct, products, removeProduct, AddtoCart]
  );

  return <CartContext.Provider value={value} {...props} />;
};
