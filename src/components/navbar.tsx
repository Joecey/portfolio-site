export default function GlobalNavbar() {
    interface navigationLinkProps {
        title: string
        href: string
    }

    const navigationLinks: navigationLinkProps[] = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Projects',
            href: '/projects',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
    ]

    return (
        <header>
            <nav id="global-navbar" className="z-10 flex w-full flex-row justify-center gap-8 p-8">
                {navigationLinks.map((navItem: navigationLinkProps) => {
                    return (
                        <a
                            href={navItem.href}
                            className="font-heading transition-colors ease-in hover:text-myTheme-accent"
                        >
                            {navItem.title}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}
