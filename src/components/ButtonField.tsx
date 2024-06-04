import { ReactNode } from "react";
import { IcSpinner } from "../icons/IcSpinner";
type Props = {
  loading?: Boolean;
  children?: ReactNode;
  color?: "main" | "primary";
  onClick?: () => void;
  disable?: Boolean;
};
function ButtonField({ loading, children, color, onClick, disable }: Props) {
  const handleOnClick = () => {
    if (disable) return;
    onClick && onClick();
  };
  return (
    <div
      className={`btn btn-${color} ${disable} ? 'disable':''`}
      onClick={handleOnClick}
    >
      {!loading ? (
        children
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: ".5rem",
            color: "#fff",
          }}
        >
          <IcSpinner width="32px" height="32px" />
          {children}
        </div>
      )}
    </div>
  );
}

export default ButtonField;
