import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import ProtectedRoute from './ProtectedRoute';
import PublicLayout from '../layouts/PublicLayout';

function RoutesConfig() {
    // Filtrar rotas públicas e privadas
    const publicRoutes = routes.filter(route => route.isPublic);
    const protectedRoutes = routes.filter(route => !route.isPublic);

    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<PublicLayout />}>
                {publicRoutes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>

            {/* Rotas protegidas */}
            <Route element={<ProtectedRoute />}>
                {protectedRoutes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
        </Routes>
    );
}

export default RoutesConfig;