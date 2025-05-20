
export const pageTitles: { [key: string]: string } = {
    '/dashboard': "Dashboard",
    '/dashboard/products': "Products",
    '/dashboard/orders': "Orders",
    '/dashboard/stock': "Stock",
    '/dashboard/categories': "Categories",
    '/dashboard/suppliers': "Suppliers",
    '/dashboard/reports': "Reports",
    '/dashboard/settings': "Settings"
};

export function getPageTitle(pathname: string): string {
    return pageTitles[pathname] || "Page";
}

