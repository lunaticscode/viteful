import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import useChangeSeoHead from "../hooks/useChangeSeoHead";
import useCustomNavigate from "../hooks/useValidNavigate";

interface LayoutProps extends PropsWithChildren {}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const navigate = useCustomNavigate();
  useChangeSeoHead();

  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>main</button>
        <button onClick={() => navigate("/home")}>home</button>
        <button onClick={() => navigate("/profile")}>profile</button>
      </nav>
      {children}
    </>
  );
};
export default Layout;
