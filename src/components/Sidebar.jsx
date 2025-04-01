import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Sidebar,
    SidebarItem,
    SidebarItems,
    SidebarItemGroup,
    SidebarCTA,
    Badge,
    Button
} from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { useLayout } from '../contexts/LayoutContext';
import routes from '../routes/routes';
import { useAuth } from '../contexts/AuthContext';

function SidebarComponent() {
    const { sidebarCollapsed } = useLayout();
    const { user } = useAuth();
    const location = useLocation();
    const isAuthenticated = !!user; // Verifica se o usuário está autenticado

    const pathname = location.pathname; // Obtém o caminho atual

    const menuItems = routes.find(group =>
        (isAuthenticated && group.routeType === "private" && pathname.startsWith(group.routePrefix)) ||
        (!isAuthenticated && group.routeType === "public")
    )?.routes || [];

    return (
        <div
            className={`transition-all duration-300 fixed top-0 left-0 z-40 h-screen pt-14 ${sidebarCollapsed ? '-translate-x-full' : ''
                } bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${sidebarCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            <Sidebar
                aria-label="Menu de Navegação"
                collapsed={sidebarCollapsed}
                className="transition-all duration-300 h-full border-r border-gray-200 dark:border-gray-700"
            >
                <SidebarItems>
                    <SidebarItemGroup>
                        {menuItems.map((item, index) => (
                            <SidebarItem
                                key={index}
                                as={Link}
                                to={item.path} // Caminho relativo gerenciado pelo React Router
                                icon={item.icon}
                                active={location.pathname === item.path}
                            >
                                {item.title}
                            </SidebarItem>
                        ))}
                    </SidebarItemGroup>
                </SidebarItems>

                <SidebarCTA>
                    <div className="mb-3 flex items-center">
                        <Badge color="warning">Beta</Badge>
                        <Button
                            aria-label="Close"
                            color="gray"
                            className="ml-auto"
                            size="xs"
                            pill
                        >
                            <HiX className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <Button
                        as="a"
                        href="#"
                        size="xs"
                        color="transparent"
                        className="text-sm text-cyan-900 dark:text-gray-400 p-0 hover:underline"
                    >
                        Clique para visualizar
                    </Button>
                </SidebarCTA>
            </Sidebar>
        </div>
    );
}

export default SidebarComponent;
