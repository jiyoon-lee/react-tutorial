import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState();
  const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Saled</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
