import {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";

import DefaultLayout from "./shared-components/default-layout";
const Home = lazy(() => import("./screens/home"));

import {ROUTES} from "./routes";

function App() {
    return (
            <DefaultLayout>
                <Routes>
                    <Route path={ROUTES.default} element={<Suspense fallback={null}><Home/></Suspense>}/>
                </Routes>
            </DefaultLayout>
    );
}

export default App;
