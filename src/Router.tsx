import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/routes/NotFound";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
