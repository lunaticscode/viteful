import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import useChangeSeoHead from "../hooks/useChangeSeoHead";

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  useChangeSeoHead();

  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>home</button>
        <button onClick={() => navigate("/profile")}>profile</button>
      </nav>
      {children}
    </>
  );
};
export default Layout;
