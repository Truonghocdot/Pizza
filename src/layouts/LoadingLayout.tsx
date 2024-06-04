import { ReactElement } from "react";
import SpinnerLoad from "../components/SpinnerLoad";
type Props = {
  loading?: boolean;
  children?: ReactElement;
};
function LoadingLayout({ loading, children }: Props) {
  return (
    <div
      style={{
        height: "calc(100vh - 309px)",
        padding: "4rem 4rem",
        overflowY: "auto",
      }}
    >
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <SpinnerLoad />
        </div>
      )}
      {!loading && children}
    </div>
  );
}

export default LoadingLayout;
