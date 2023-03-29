import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SubmissionDetail from "./pages/SubmissionDetail";
import AddSubmissionPage from "./pages/AddSubmissionPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/submission-detail/:id" element={<SubmissionDetail />} />
          <Route path="/upload-submission" element={<AddSubmissionPage />} />
          <Route path="/edit-submission/:id" element={<AddSubmissionPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
