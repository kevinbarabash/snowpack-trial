import * as React from "react";
import Loadable from "react-loadable";

const LoadableHello = Loadable({
    loader: () => import("./hello.jsx").then(m => m.FnHello),
    loading: () => <h1>Loading...</h1>,
});

export default LoadableHello;
