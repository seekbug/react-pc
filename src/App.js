import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";

import { AuthComponent } from "@/components/AuthComponents";
import "antd/dist/antd.min.css";
import "./App.css";
import { lazy, Suspense } from "react";
import { history } from "./utils";

// 按需导入组件
const Login = lazy(() => import("./pages/Login"));
const Layou = lazy(() => import("./pages/Layou"));
const Home = lazy(() => import("./pages/Home"));
const Article = lazy(() => import("./pages/Article"));
const Publish = lazy(() => import("./pages/Publish"));

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                marginTop: 200,
              }}
            >
              loading...
            </div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <AuthComponent>
                  <Layou />
                </AuthComponent>
              }
            >
              <Route index element={<Home />}></Route>
              <Route path="article" element={<Article />}></Route>
              <Route path="publish" element={<Publish />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Suspense>
      </div>
    </HistoryRouter>
  );
}

export default App;
