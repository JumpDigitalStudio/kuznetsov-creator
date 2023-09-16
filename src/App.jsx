import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
import ScrollToTop from "./utils/ScrollToTop.js";

const App = () => {
    return (
        <BrowserRouter basename='/kuznetsov-creator'>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='playground' element={<PlaygroundPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
