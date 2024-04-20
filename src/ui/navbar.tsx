'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMetaMask } from '@/context/useMetaMask';
import { formatAddress } from '@/utils';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { wallet, hasProvider, connectMetaMask } = useMetaMask()

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800 rounded-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                                <Link href="/main-home">
                                    <img className="h-8 w-8" src="/flame.svg" alt="mrb logo" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <NavItem href="/main-home" currentPath={pathname}>Home</NavItem>
                                    <NavItem href="/business" currentPath={pathname}>Business</NavItem>
                                    <NavItem href="/staking" currentPath={pathname}>Staking</NavItem>
                                    <NavItem href="/about-token" currentPath={pathname}>About Token</NavItem>
                                    <NavItem href="/governance" currentPath={pathname}>Governance</NavItem>
                                    <NavItem href="/pre-sale" currentPath={pathname}>Pre-Sale</NavItem>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <span className="sm:ml-3">
                                    <button
                                        id="walletButton"
                                        onClick={connectMetaMask}
                                    >
                                        {hasProvider && wallet.accounts.length > 0 ? (
                                            <span className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                                {formatAddress(wallet.accounts[0])}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                                Connect Wallet
                                            </span>
                                        )}


                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Your content */}
                </div>
            </main>
        </div>
    );
};

interface NavItemProps {
    href: string;
    currentPath: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, currentPath, children }) => {
    const isActive = href === currentPath;

    return (
        <Link href={href}>
            <div className={`px-3 py-2 text-sm font-medium ${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md`} aria-current={isActive ? 'page' : undefined}>
                {children}
            </div>
        </Link>
    );
};

export default Navbar;


