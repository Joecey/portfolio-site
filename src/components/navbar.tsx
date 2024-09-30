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
            title: 'Bio',
            href: '/#about',
        },
        {
            title: 'Projects',
            href: '/',
        },
        {
            title: 'Hobbies',
            href: '/',
        },
    ]

    return (
        <header>
            <div className="fixed z-10 flex w-full justify-center ">
                <nav
                    id="global-navbar"
                    className="mt-8 flex w-fit max-w-7xl justify-center gap-8 rounded-full bg-myTheme-background/50 p-8 py-2 outline outline-1 outline-myTheme-primary backdrop-blur"
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
