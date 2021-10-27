import React, { useState } from 'react'
import clsx from "clsx"
import { Link } from "react-router-dom"
import { Menu, Search, User, LogIn, LogOut, X, ShoppingCart } from "react-feather"

import Button from "@/components/Button"
import Input from "@/components/Input"
import DropDown, { Select, Option } from "@/components/DropDown"

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)
	const [showDropDown, setShowDropDown] = useState(false)

	return (
		<nav className={clsx(
			"w-full flex flex-wrap justify-between items-center",
			"sticky top-0 z-40 py-3 px-4",
			"bg-gray-200/90 border-b border-gray-300",
			"backdrop-filter backdrop-blur-lg shadow-sm",
			"md:(py-1)"
		)}>
			<div className="flex justify-between items-center md:mx-0">
				<Link to="/">
					<h3 className="text-medium text-2xl">BRAND</h3>
				</Link>
			</div>

			<div className="flex items-center ml-2 space-x-4 md:order-2">
				<Link to="/cart" className="flex items-center">
					<ShoppingCart width={24} height={24} />
				</Link>

				<button 
					onClick={() => setShowDropDown(prev => !prev)}
					className="bg-gray-800 h-8 w-8 rounded-full overflow-hidden focus:(ring-4 ring-gray-300 outline-none)">
	        <img className="object-cover" src="https://avatars.githubusercontent.com/u/30614282" alt="user avatar" />
	      </button>
	      {showDropDown && (
		      <DropDown>
		        <div className="px-4 py-3">
		          <span className="block">Nishant Mogha</span>
		          <span className="block font-medium text-gray-900 truncate">nimogha@gmail.com</span>
		        </div>
		        <Select>
			        <Option>
			          <Link to="#">Dashboard</Link>
			        </Option>
			        <Option>
			          <Link to="#">Orders</Link>
			        </Option>
			        <Option>
			          <Link to="#">Account</Link>
			        </Option>
			        <Option>
			          <Link to="#" className="flex items-center">
			          	<LogOut width={20} height={20} className="mr-2" />Logout
			          </Link>
			        </Option>
		        </Select>
		      </DropDown>
				)}
				<button className="md:hidden flex items-center focus:outline-none">
					{showMenu 
						? <X width={24} height={24} onClick={() => setShowMenu(false)} />
						:	<Menu width={24} height={24} onClick={() => setShowMenu(true)} />
					}
				</button>
			</div>

			<div className={clsx(
				"hidden w-full",
				showMenu && "!flex flex-col mt-8",
				"md:(flex flex-row mt-0 ml-auto order-1 w-auto)"
			)}>
				<ul className={clsx(
					"flex flex-col items-center order-2",
					"mt-8 mb-2 text-xl space-y-1 divide-y-2 divide-gray-200",
					"md:(flex-row text-base m-0 space-y-0 divide-y-0 divide-x)"
				)}>
					<NavLink to="/products?category=men">Men</NavLink>
					<NavLink to="/products?category=women">Women</NavLink>
					<NavLink to="/products">All Products</NavLink>
				</ul>
				<div className="flex items-center order-1 md:order-2">
					<Input 
						className="md:max-w-min bg-opacity-40" 
						icon={<Search />} 
						placeholder="Search..." 
					/>
				</div>
				<ul className={clsx(
					"flex flex-col items-center order-3",
					showMenu && "mt-4",
					"md:(flex-row text-base mt-0 space-x-2)"
				)}>
					<li>
						<Link to="/login">
							<Button secondary>
								<LogIn width={20} height={20} className="mr-2" />Login
							</Button>
						</Link>
					</li>
					<li>
						<Link to="/register">
							<Button>
								<User width={20} height={20} className="mr-2" />Register
							</Button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

function NavLink({ children, to }) {
	return (
		<li className="hover:text-gray-800 text-gray-700 block px-4 py-2 truncate">
			<Link to={to}>{children}</Link>
		</li>
	)
}