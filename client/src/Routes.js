import { Routes, Route } from "react-router-dom";

import List from "./views/List";
import AddItem from "./views/AddItem";
import PageNotFound from "./views/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddItem />} />
      <Route path="/records" element={<List />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
