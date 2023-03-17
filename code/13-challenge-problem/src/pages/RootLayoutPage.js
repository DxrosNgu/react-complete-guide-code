import {Outlet} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayoutPage() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default RootLayoutPage;
