import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import Header from "./components/header";
import React from "react";
import GamePage from "./pages/GamePage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/app/:title' element={<GamePage/>}/>
                <Route path='/order' element={<OrderPage/>}/>
            </Routes>
        </div>
    </Provider>
  );
}

export default App;
