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
            href: '/#about',
        },
        {
            title: 'Projects',
            href: '/',
        },
        {
            title: 'Contact',
            href: '/',
        },
    ]

    return (
        <header>
            <div className="z-10 flex w-full justify-center">
                <nav
                    id="global-navbar"
                    className="flex w-full max-w-7xl justify-center gap-8 p-8 md:py-8"
                >
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
            </div>
        </header>
    )
}
