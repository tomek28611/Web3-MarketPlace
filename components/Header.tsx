import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from 'next/link';
import { BellIcon, ShoppingCartIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

type Props = {}

function Header({ }: Props) {
    const connectWithMetamask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();

    return (
        <div className='max-w-6xl mx-auto p-2'>
            <nav className='flex justify-between'>
                <div className="flex items-center space-x-2 text-sm">
                    {address ? (
                        <button onClick={disconnect} className='connectWalletBtn'>Hi, {address.slice(0, 4) + '...' + address.slice(-4)}</button>
                    ) : (
                        <button onClick={connectWithMetamask} className='connectWalletBtn'>
                            Connect your wallet
                        </button>
                    )}

                    <p className="headerLink">Daily Deals</p>
                    <p className="headerLink">Help & Contact</p>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <p className="headerLink">Ship to</p>
                    <p className="headerLink">Sell</p>
                    <p className="headerLink">Watchlist</p>

                    <Link href="/addItem" className='flex items-center hover:link'>
                        Add to inventory
                        <ChevronDownIcon className='h-4' />
                    </Link>

                    <BellIcon className='h-6 w-6' />
                    <ShoppingCartIcon className='h-6 w-6' />
                </div>
            </nav>
            <hr className='mt-2' />

            <section className='flex items-center space-x-2'>
                <div className="w-60 p-4 flex-shrink-0">
                    <Link href="/">
                        <img src="logo.png" alt="LOGO" height={250} width={250} className='cursor-pointer' />
                    </Link>
                </div>
                <button className="hidden md:flex items-center space-x-2 w-20">
                    <p className="text-gray-600 text-sm">Shop by category</p>
                    <ChevronDownIcon className="h-4 flex-shrink-0" />
                </button>
                <div className="flex items-center space-x-2 md:px-5 py-2 border-black border-2 flex-1">
                    <MagnifyingGlassIcon className="w-5 text-gray-400" />
                    <input className="flex-1 outline-none" type="text" placeholder="Search..." />
                </div>
                <button className="hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2
                border-2 border-blue-600">Search</button>

                <Link href="/create">
                <button className="border-blue-600 border-2 px-5 md:px-10 py-2 text-blue-600
                hover:text-white hover:bg-blue-600/50 cursor-pointer">Items</button>
                </Link>

            </section>
            <hr />
            <section className='flex justify-center space-x-6 text-xs md:text-sm px-6 py-3'>
                    <p className="link">Home</p>
                    <p className="link">Electronics</p>
                    <p className="link">Computers</p> 
                    <p className="link hidden sm:inline">Games</p>
                    <p className="link hidden sm:inline">Garden</p>
                    <p className="link hidden md:inline">Health</p>
                    <p className="link hidden md:inline">Art</p>
                    <p className="link hidden lg:inline">Books</p>
                    <p className="link hidden lg:inline">Music</p>
                    <p className="link hidden lg:inline">Deals</p>
                    <p className="link hidden xl:inline">Other</p>
                    <p className="link">More</p>
                </section>
        </div>
    )
}

export default Header