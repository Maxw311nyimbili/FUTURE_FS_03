
import { BrowserRouter, Route, Routes } from 'react-router-dom';



// Pages
import Home from '../Pages/Home/Home';
import Error from '../Pages/Error/Error';

// Auth check
import AuthCheck from '../AuthCheck/AuthCheck';

const MainLayout = () => {


    return (
        <BrowserRouter>

            <Routes>
               <Route
                path="/"
                element={
                    <AuthCheck>
                    <Home/>
                    </AuthCheck>
                }
                />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainLayout;
