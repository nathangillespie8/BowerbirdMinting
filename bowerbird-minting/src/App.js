import './styles.scss';
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Value from "./components/value";
import Roadmap from "./components/roadmap";
import Specs from "./components/specs";
import Team from "./components/team";
import FAQs from "./components/faqs";
import Story from "./components/story";
import ToFish from "./components/toFish";
import Join from "./components/join";
import Footer from "./components/footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Intro />
      <About />
      <Value />
      <Roadmap />
      <Specs />
      <Team />
      <FAQs />
      <Story />
      <ToFish />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
