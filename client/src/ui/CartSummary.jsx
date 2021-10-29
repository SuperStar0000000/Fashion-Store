import React from 'react'

import Input from "@/components/Input"
import Button from "@/components/Button"

export default function OrderSummary({ subtotal, charges, discounts }) {
	const chargesTotal = charges.reduce((sum, c) => sum + c.amount, 0)
	const discountTotal = discounts.reduce((sum, d) => sum + d.amount, 0)

	return (
		<div className="flex flex-col p-4 space-y-4">
			<h2 className="uppercase text-3xl">Cart Summary</h2>
			<div className="border-t border-b border-gray-200 space-y-4 py-4">
				<div className="flex justify-between text-lg">
					<span>Subtotal</span>
					<span>${subtotal}</span>
				</div>
				{charges.map(charge => (
					<div className="flex justify-between" key={charge.name}>
						<span>{charge.name}</span>
						<span>${charge.amount}</span>
					</div>
				))}
				{discounts.map(discount => (
					<div className="flex justify-between" key={discount.name}>
						<span>{discount.name}</span>
						<span>-${discount.amount}</span>
					</div>
				))}
				<div className="flex justify-between font-medium text-2xl">
					<span>Total</span>
					<span>${subtotal + chargesTotal - discountTotal}</span>
				</div>
			</div>
			<div className="flex justify-between">
				<Input placeholder="Coupon Code" className="!min-w-20" />
				<Button secondary disabled>Apply</Button>
			</div>
			<Button className="w-full self-center">Checkout Now</Button>
		</div>
	)
}