import { useParams } from "react-router-dom";

const ProducDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProducDetail;
