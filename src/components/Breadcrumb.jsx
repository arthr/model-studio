import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb as FlowbiteBreadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { useLayout } from "../contexts/LayoutContext";
import { Link } from "react-router-dom";

function Breadcrumb() {
    const { breadcrumbs, updateBreadcrumbs } = useLayout();
    const location = useLocation();

    // Atualiza os breadcrumbs quando a rota muda
    useEffect(() => {
        const pathname = location.pathname;
        updateBreadcrumbs(pathname);
    }, [location.pathname, updateBreadcrumbs]);

    // Se não houver breadcrumbs ou apenas tiver a Home, não renderiza
    if (!breadcrumbs || breadcrumbs.length <= 1) {
        return null;
    }

    return (
        <FlowbiteBreadcrumb
            aria-label="Breadcrumb"
            className="bg-gray-50 px-4 py-2 mb-4 rounded-lg dark:bg-gray-800"
        >
            {breadcrumbs.map((item, index) => (
                <BreadcrumbItem
                    key={index}
                    href={breadcrumbs.length - 1 === index ? undefined : item.path}
                    icon={index === 0 ? HiHome : undefined}
                    as={Link}
                    to={item.path}
                >
                    {item.title}
                </BreadcrumbItem>
            ))}
        </FlowbiteBreadcrumb>
    );
}

export default Breadcrumb;
