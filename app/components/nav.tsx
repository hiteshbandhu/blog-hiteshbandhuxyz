import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
    title: 'go to home page',
    ariaLabel: 'navigate to home page'
  },
  '/blog': {
    name: 'writings', 
    title: 'read my blog posts',
    ariaLabel: 'navigate to blog posts'
  },
  'https://hiteshbandhu.xyz': {
    name: 'website',
    title: 'visit my personal website',
    ariaLabel: 'visit hitesh bandhu\'s website',
    rel: 'noopener noreferrer'
  },
  'https://x.com/_hiteshbandhu': {
    name: 'twitter',
    title: 'follow me on twitter',
    ariaLabel: 'follow hitesh bandhu on twitter',
    rel: 'noopener noreferrer'
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="main navigation"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, item]) => {
              const isExternal = path.startsWith('http');
              return (
                <Link
                  key={path}
                  href={path}
                  title={item.title}
                  aria-label={item.ariaLabel}
                  rel={item.rel}
                  target={isExternal ? '_blank' : undefined}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
