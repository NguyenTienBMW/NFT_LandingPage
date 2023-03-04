import logo from './logo.svg';
import './App.css';
import {
  Header, Banner, Partner, Carousel, FlowWork, PopularCollection,
  Categories, TopCreators, Subscribe, Footer
} from './components'
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Partner />
      <Carousel />
      <FlowWork />
      <PopularCollection />
      <Categories />
      <TopCreators />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
