import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeContext";
import HomePage from "./pages/HomePage";







function App() {
  return (
    <ThemeProvider>
        <div className="App flex flex-col items-center min-h-screen overflow-hidden">
            <Routes>
                {/* for homepage or main page */}
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    </ThemeProvider>
  )
}   


export default App;