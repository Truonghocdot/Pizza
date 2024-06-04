import { useState } from "react";
import ButtonField from "../components/ButtonField";
import TextFiedld from "../components/TextFIeld";
import LoadingLayout from "../layouts/LoadingLayout";
import { FieldPizza, Pizza } from "../model/Pizza.model";
import { useNavigate } from "react-router-dom";

const CreatePizzPage = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = useState<Pizza>({});
  const handleChangeFieldPizza = (key: string, value: string) => {
    setPizza({ ...pizza, [key]: value });
  };
  const handleCreatePizza = () => {
    if (!pizza.productName || !pizza.description || !pizza.price) return;
    fetch("http://localhost:8080/data", {
      method: "POST",
      body: JSON.stringify(pizza),
      headers: {
        "Content-type": "application/json; character=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data?.id) {
          navigate("/");
        }
      });
  };
  return (
    <LoadingLayout loading={false}>
      <div className="wrapper-create">
        <div style={{ width: "50%" }}>
          <h1>Create new pizza</h1>
          <div className="form-control">
            <div style={{ marginBottom: "1rem" }}>Product name:</div>
            <TextFiedld
              width="100%"
              height="36px"
              placeholder="Enter product Name Here!"
              onChange={(e) =>
                handleChangeFieldPizza(FieldPizza.ProductName, e)
              }
            />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: "1rem" }}>Description:</div>
            <TextFiedld
              width="100%"
              height="36px"
              placeholder="Enter Description product Here!"
              onChange={(e) =>
                handleChangeFieldPizza(FieldPizza.Description, e)
              }
            />
          </div>
          <div className="form-control">
            <div style={{ marginBottom: "1rem" }}> Price:</div>
            <TextFiedld
              width="100%"
              height="36px"
              placeholder="Enter Price Here!"
              onChange={(e) => handleChangeFieldPizza(FieldPizza.Price, e)}
            />
          </div>
          <div className="form-control flex-basic-between">
            <ButtonField
              onClick={() => handleCreatePizza()}
              disable={!pizza.productName || !pizza.description || !pizza.price}
            >
              Create Pizza
            </ButtonField>
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
};
export default CreatePizzPage;
