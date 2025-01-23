import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { JSX } from "react";

type CustomElementType = () => JSX.Element;
type CustomModule = {
  default: CustomElementType;
  Pending: Element;
  Failure: Element;
};

const pageFiles = import.meta.glob("./pages/**/*.tsx", { eager: true });
type CustomRoutes = {
  path: string;
  Element: CustomElementType;
};

const tempRoutes: CustomRoutes[] = [];
for (const filePath of Object.keys(pageFiles)) {
  try {
    const fileName = filePath.match(/\.\/pages\/(.*)\.tsx$/)?.[1] || "";
    if (!fileName) continue;

    const normalizedPathName = fileName.includes("&")
      ? fileName.replace("&", ":")
      : fileName.replace(/\/index/, "");

    tempRoutes.push({
      path:
        fileName === "index"
          ? "/"
          : `/${normalizedPathName.toLocaleLowerCase()}`,
      Element: (pageFiles[filePath] as CustomModule).default,
    });
  } catch (err) {
    continue;
  }
}

//* 파일 이름에 매핑되는 path가 중복되는 경우 제거.
const routes = tempRoutes.filter(
  ({ path }, index, array) =>
    array.findIndex((elem) => elem.path === path) === index
);

export const useValidRoutesPaths = () => {
  return routes.map((route) => route.path);
};

const Router = () => {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route key={`route-path-${path}`} path={path} element={<Element />} />
        ))}
      </Routes>
    </Layout>
  );
};

export default Router;
