import Home from '../pages/Home';
import Editor from '../pages/Editor';
import Upload from '../pages/Upload';
import Grids from '../pages/Grids';
import { HiChartPie, HiViewBoards, HiFolderOpen, HiCog, HiViewGrid } from 'react-icons/hi';

// Configuração centralizada de rotas
const routes = [
    {
        path: '/',
        component: Home,
        title: 'Home',
        icon: HiChartPie,
        isPublic: true,
        showInMenu: true
    },
    {
        path: '/editor',
        component: Editor,
        title: 'Editor',
        icon: HiViewBoards,
        isPublic: false,
        showInMenu: true
    },
    {
        path: '/upload',
        component: Upload,
        title: 'Uploader',
        icon: HiFolderOpen,
        isPublic: false,
        showInMenu: true
    },
    {
        path: '/grids',
        component: Grids,
        title: 'Grids',
        icon: HiViewGrid,
        isPublic: false,
        showInMenu: true
    },
    {
        path: '/settings',
        component: () => <div>
            <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Editor de Modelos 3D
            </h1>
            <div
                className="border border-slate-300 dark:border-slate-600 rounded-lg p-8 bg-white dark:bg-slate-800"
            >
                <p className="text-slate-500 dark:text-slate-400">Área de Configurações</p>
            </div>

        </div>,
        title: 'Configurações',
        icon: HiCog,
        isPublic: false,
        showInMenu: true
    }
];

export default routes;