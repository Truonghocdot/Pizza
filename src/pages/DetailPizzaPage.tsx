import { useNavigate, useParams } from "react-router-dom";
import LogoPizza from "../assets/pizza.png";
import ButtonField from "../components/ButtonField";
import { Pizza } from "../model/Pizza.model";
import { useEffect, useState } from "react";
import LoadingLayout from "../layouts/LoadingLayout";
import ModalLayout from "../layouts/ModalLayout";
function DetailPizzaPage() {
  const { id } = useParams();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>();
  useEffect(() => {
    fetch(`http://localhost:8080/data/?id=${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setTimeout(() => {
          setPizza(data[0]);
        }, 1000);
      });
  }, [id]);
  const handleDeletePizza = () => {
    fetch(`http://localhost:8080/data/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data) {
          navigate("/");
        } else {
        }
      });
  };
  return (
    <LoadingLayout loading={!pizza?.id}>
      <div style={{ display: "flex", alignItems: "center", columnGap: "2rem" }}>
        <img width="450px" height="450px" src={LogoPizza} alt="" />
        <div>
          <div style={{ marginBottom: "1rem" }}>
            Product name: {"  "}
            <span style={{ fontSize: "24px" }}>{pizza?.productName}</span>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            Ingredients: {"  "}
            <span style={{ fontSize: "24px" }}>{pizza?.description}</span>
          </div>
          <div style={{ display: "flex" }}>
            <ButtonField
              color="main"
              onClick={() => setIsShowModal(true)}
              children="Remove Pizza"
            />
          </div>
        </div>
        <ModalLayout
          width="40%"
          title="Do you want to remove this pizza?"
          isShow={isShowModal}
          onClose={() => setIsShowModal(false)}
          onConfirm={handleDeletePizza}
        />
      </div>
    </LoadingLayout>
  );
}

export default DetailPizzaPage;
