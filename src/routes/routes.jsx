import Home from '../pages/public/Home';
import Editor from '../pages/private/Editor';
import Upload from '../pages/private/Upload';
import Grids from '../pages/private/Grids';
import { HiChartPie, HiFolderOpen, HiCog, HiViewGrid } from 'react-icons/hi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

const routes = [
    {
        routeType: "public",
        routePrefix: null,
        routes: [
            {
                path: '/',
                component: Home,
                title: 'Home',
                breadcrumbTitle: 'Página Inicial',
                icon: HiChartPie,
                showInMenu: true
            }
        ]
    },
    {
        routeType: "private",
        routePrefix: '/studio',
        breadcrumbTitle: 'Stúdio',
        routes: [
            {
                path: 'editor',
                component: Editor,
                title: 'Editor',
                icon: HiWrenchScrewdriver,
                showInMenu: true
            },
            {
                path: 'upload',
                component: Upload,
                title: 'Upload',
                breadcrumbTitle: 'Upload (envio de modelos)',
                icon: HiFolderOpen,
                showInMenu: true
            },
            {
                path: 'grids',
                component: Grids,
                title: 'Grids',
                icon: HiViewGrid,
                showInMenu: true
            },
            {
                path: 'settings',
                component: () => <div>
                    <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                        Configurações
                    </h1>
                    <div
                        className="border border-slate-300 dark:border-slate-600 rounded-lg p-8 bg-white dark:bg-slate-800"
                    >
                        <p className="text-slate-500 dark:text-slate-400">Área de Configurações</p>
                    </div>
                </div>,
                title: 'Configurações',
                icon: HiCog,
                showInMenu: true
            }
        ]
    }
];

export default routes;