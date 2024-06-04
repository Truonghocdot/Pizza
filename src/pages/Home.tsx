import { useEffect, useMemo, useRef, useState } from "react";
import CardPizza from "../sections/CardPizza";
import { Pizza } from "../model/Pizza.model";
import ButtonField from "../components/ButtonField";
import TextFiedld from "../components/TextFIeld";
import LoadingLayout from "../layouts/LoadingLayout";
const Home = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const searchRef = useRef<any>();

  const handleSearchText = (value: string) => {
    clearTimeout(searchRef.current);
    searchRef.current = setTimeout(() => {
      setSearchText(value);
    }, 700);
  };

  const handleShowMore = () => {
    setIsLoading(true);
    setPage(page + 1);
  };
  const searchValue = useMemo(() => {
    return pizzas.filter((item) =>
      item.productName?.toLocaleLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);
  useEffect(() => {
    fetch(`http://localhost:8080/data/?category_id=${page}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => {
        setTimeout(() => {
          setPizzas([...pizzas, ...data]);
          setIsLoading(false);
        }, 1000);
      });
  }, [page]);
  return (
    <LoadingLayout loading={!pizzas.length}>
      <div>
        <TextFiedld
          placeholder="Enter Search!"
          onChange={handleSearchText}
          width="250px"
          height="24px"
        />
        <div className="wrapper-card-items">
          {(searchText ? searchValue : pizzas || []).map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              productName={pizza.productName}
              description={pizza.description}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <ButtonField
              color="main"
              loading={isLoading}
              onClick={() => handleShowMore()}
            >
              Show more
            </ButtonField>
          </div>
        </div>
      </div>
    </LoadingLayout>
  );
};
export default Home;
