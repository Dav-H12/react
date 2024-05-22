import "./Products.css";
import Product from "../../components/Product/Product";



///chi ashxatum slider@/////
const Products = ({ products,addtoCard}) => {
  return (
    <div>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} product={product} addtoCard={addtoCard}  />;
        })}
      </div>




    </div>
  );
};

export default Products;
