import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ShopItem() {
  const params = useLocation();
  const [data, setData] = useState(null);

  console.log(params.state);

  useEffect(() => {
    setData(params.state);
  }, [params.state]);

  return (
    <>
      <Link to="../shop">Back to shop</Link>
      {data && (
        <>
          <h4>{data.name}</h4>
          <span>{data.innerTitle}</span>
          <div>{data.tags.join(", ")}</div>
          <div>{data.description}</div>
          <div>Price: {data.price}$</div>
        </>
      )}
    </>
  );
}

export default ShopItem;
