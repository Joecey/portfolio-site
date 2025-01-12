export default function GlobalNavbar() {
    interface navigationLinkProps {
        title: string
        href: string
    }

    const navigationLinks: navigationLinkProps[] = [
        {
            title: 'Home',
            href: '/#home',
        },
        {
            title: 'About',
            href: '/#about',
        },
        {
            title: 'Projects',
            href: '/',
        },
        // {
        //     title: 'Contact',
        //     href: '/',
        // },
        // {
        //     title: 'Art',
        //     href: '/',
        // },
        {
            title: 'Source',
            href: 'https://github.com/Joecey/portfolio-site',
        },
    ]

    return (
        <header>
            <div className="fixed z-10 flex w-full justify-center ">
                <nav
                    id="global-navbar"
                    className="mt-8 flex w-fit max-w-5xl justify-center gap-8 rounded-full bg-myTheme-background/50 p-8 py-2 text-sm shadow-lg outline outline-1 outline-myTheme-primary ring-1 ring-black/5 backdrop-blur sm:text-base"
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
