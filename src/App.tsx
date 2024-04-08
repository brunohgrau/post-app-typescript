import React, { FunctionComponent, useMemo } from "react";
import { Product } from "./data/entities";
import { ProductList } from "./components/ProductList";
import { useAppDispatch, useAppSelector, reducers, queries } from "./dataStore";

let testData: Product[] = [
  {
    id: 1,
    name: "a title",
    category: "cosmetic",
    description: "a description",
    price: 100,
  },
  {
    id: 2,
    name: "a title",
    category: "sports",
    description: "a description",
    price: 9100,
  },
];

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
      <ProductList
        products={data ?? []}
        categories={categories}
        selections={selections}
        addToOrder={addToOrder}
      />
    </div>
  );
};
