import { useNavigate } from "react-router-dom";
import ButtonField from "../components/ButtonField";
import TextFiedld from "../components/TextFIeld";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div style={{ fontSize: "40px", fontWeight: 600 }}>TruongdzPizza</div>
      <TextFiedld placeholder="Enter Search!" width="250px" height="24px" />
      <ButtonField
        onClick={() => {
          navigate("/create-pizza");
        }}
      >
        Create New Pizza
      </ButtonField>
    </div>
  );
};
export default Header;
