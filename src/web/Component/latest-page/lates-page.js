import "../../css/style-latest.css";
import Header from "../main-page/Header";
import LastPage from "../main-page/LastPage";
import ImageBlog from "./img-blog";
import RootLatest from "./latest-root";
import ProjectsHeader from "./projects-header";

function LatestPage() {
  return (
    <>
      <Header />
      <RootLatest />
      <ProjectsHeader />
      <ImageBlog />
      <ImageBlog />
      <ImageBlog />
      <ImageBlog />
      <LastPage />
    </>
  );
}
export default LatestPage;
