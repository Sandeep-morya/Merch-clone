import React from "react";
import { cartItemType } from "@/Types/cart";
import { Flex, Text, Button, SimpleGrid, Paper } from "@mantine/core";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCartItems, patchCartItems } from "@/redux/cart/action";

const PerItem = ({ item }: { item: cartItemType }) => {
	const dispatch = useDispatch();

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1.5fr 3.5fr 2fr 2fr 1fr",
				alignItems: "center",
			}}>
			<Image src={item.imageUrl} alt={item.title} width={50} height={65} />
			<Text>{item.title}</Text>

			<Text ml="md" c="dimmed">
				$ {item.price * item.quantity}
			</Text>

			<Flex align={"center"} gap="md">
				<Button
					size="xs"
					variant="light"
					disabled={item.quantity === 1}
					onClick={() =>
						dispatch(
							patchCartItems<number | undefined, { quantity: number }>(
								item.id,
								{ quantity: item.quantity - 1 },
							),
						)
					}>
					-
				</Button>
				<Text>{item.quantity}</Text>

				<Button
					size="xs"
					variant="light"
					onClick={() =>
						dispatch(
							patchCartItems<number | undefined, { quantity: number }>(
								item.id,
								{ quantity: item.quantity + 1 },
							),
						)
					}>
					+
				</Button>
			</Flex>

			<Flex justify="flex-end">
				<FaTrash onClick={() => dispatch(deleteCartItems(item.id))} />
			</Flex>
		</div>
	);
};

export default PerItem;
