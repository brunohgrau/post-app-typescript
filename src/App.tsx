import React, { FunctionComponent, useMemo } from "react";
import { Product } from "./data/entities";
import { ProductList } from "./components/ProductList";
import { useAppDispatch, useAppSelector, reducers, queries } from "./dataStore";
import { Routes, Route, Navigate } from "react-router-dom";

export const App: FunctionComponent = () => {
  const selections = useAppSelector((state) => state.selections);
  const dispatch = useAppDispatch();

  const { data } = queries.useGetProductsQuery();

  const addToOrder = (p: Product, q: number) =>
    dispatch(reducers.addToOrder([p, q]));

  const categories = useMemo<string[]>(() => {
    return [...new Set(data?.map((p) => p.category))];
  }, [data]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/products"
          element={
            <ProductList
              products={data ?? []}
              categories={categories}
              selections={selections}
              addToOrder={addToOrder}
            />
          }
        />
        <Route path="/" element={<Navigate replace to="/products" />} />
      </Routes>
    </div>
  );
};
