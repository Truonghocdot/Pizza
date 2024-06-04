import { useNavigate } from "react-router-dom";
import Logo from "../assets/pizza.png";
import { Pizza } from "../model/Pizza.model";
type Props = Pizza;
function CardPizza({ id, productName, description }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="card-items"
      onClick={() => {
        navigate(`/pizza/${id}`);
      }}
    >
      <img className="card-image-pizza" src={Logo} alt="" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>
            {productName}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#fff",
              marginTop: ".5rem",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
