import React, { FunctionComponent, useState } from "react";
import {
  Product,
  ProductSelection,
  ProductSelectionMutations,
} from "./data/entities";
import { ProductList } from "./components/ProductList";

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
  const [selections, setSelections] = useState(Array<ProductSelection>());

  const addToOrder = (product: Product, quantity: number) => {
    setSelections((curr) => {
      ProductSelectionMutations.addProduct(curr, product, quantity);
      return [...curr];
    });
  };

  const categories = [...new Set(testData.map((p) => p.category))];

  return (
    <div className="App">
      <ProductList
        products={testData}
        categories={categories}
        selections={selections}
        addToOrder={addToOrder}
      />
    </div>
  );
};
