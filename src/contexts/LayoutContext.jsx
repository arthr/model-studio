import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import routes from '../routes/routes';

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
        const savedState = localStorage.getItem('sidebarCollapsed');
        return savedState ? JSON.parse(savedState) : window.innerWidth < 768;
    });

    // Estado para detectar dispositivos móveis
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Estado para a busca na navbar
    const [searchQuery, setSearchQuery] = useState('');

    // Estado para breadcrumbs
    const [breadcrumbs, setBreadcrumbs] = useState([
        { title: 'Home', path: '/' }
    ]);

    // Itens do menu principal - agora usando a configuração centralizada
    const menuItems = routes.filter(route => route.showInMenu);

    // Detectar tamanho da tela para responsividade
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Em dispositivos móveis, colapsar a sidebar por padrão
            if (mobile && !sidebarCollapsed) {
                setSidebarCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarCollapsed]);

    // Persistir o estado da sidebar no localStorage
    useEffect(() => {
        localStorage.setItem('sidebarCollapsed', JSON.stringify(sidebarCollapsed));
    }, [sidebarCollapsed]);

    const toggleSidebar = () => {
        setSidebarCollapsed(prev => !prev);
    };

    // Uso do useCallback para memorizar a função e evitar recriação a cada renderização
    const updateBreadcrumbs = useCallback((path, title) => {
        if (!path) return;

        const routeItem = routes.find(item => item.path === path);

        let newBreadcrumbs;

        // Verifica se já estamos na home para evitar duplicação
        if (path === '/') {
            newBreadcrumbs = [{ title: 'Home', path: '/' }];
        }
        else if (routeItem) {
            newBreadcrumbs = [
                { title: 'Home', path: '/' },
                { title: routeItem.title, path: routeItem.path }
            ];
        }
        else if (title) {
            // Verifica se o path já existe no breadcrumb atual
            const existingIndex = breadcrumbs.findIndex(item => item.path === path);

            if (existingIndex >= 0) {
                // Se já existe, atualizamos apenas o título se necessário
                if (breadcrumbs[existingIndex].title !== title) {
                    newBreadcrumbs = [...breadcrumbs];
                    newBreadcrumbs[existingIndex] = { title, path };
                } else {
                    return;
                }
            } else {
                // Se não existe, adicionamos ao final do breadcrumb
                newBreadcrumbs = [...breadcrumbs, { title, path }];
            }
        } else {
            // Se não temos um título e não é um item de menu, não fazemos nada
            return;
        }

        // Só atualiza o estado se houver alteração nos breadcrumbs
        if (JSON.stringify(newBreadcrumbs) !== JSON.stringify(breadcrumbs)) {
            setBreadcrumbs(newBreadcrumbs);
        }
    }, [breadcrumbs]);

    return (
        <LayoutContext.Provider value={{
            sidebarCollapsed,
            setSidebarCollapsed,
            toggleSidebar,
            isMobile,
            searchQuery,
            setSearchQuery,
            menuItems,
            breadcrumbs,
            updateBreadcrumbs
        }}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    return useContext(LayoutContext);
}
