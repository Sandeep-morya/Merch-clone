import { cartItemType } from "@/Types/cart";
import React from "react";
import { Flex, Stack, Title, CloseButton, Button, Text } from "@mantine/core";
import PerItem from "./PerItem";
import { useCallback } from "react";

type Props = { data: cartItemType[]; setOpened: (p: boolean) => void };

const DrawerData = ({ data, setOpened }: Props) => {
	const getPrice = useCallback(() => {
		let sum = 0;
		data.forEach((item) => {
			sum += item.price * item.quantity;
		});
		return sum;
	}, [data]);

	return (
		<Flex
			h={"100vh"}
			direction={"column"}
			justify={"space-between"}
			style={{ padding: "2rem" }}>
			<Stack>
				<Flex justify={"space-between"} align="center">
					<Title order={3}>Shopping Cart</Title>
					<Title>
						<CloseButton size="xl" onClick={() => setOpened(false)} />
					</Title>
				</Flex>
				{data.length === 0 ? (
					<Text>The Cart is Empty</Text>
				) : (
					<Stack>
						{data.map((e) => (
							<PerItem key={e.id} item={e} />
						))}
					</Stack>
				)}
			</Stack>
			<Stack>
				<Flex align={"center"} justify="space-between">
					<Title hidden={getPrice() === 0} order={6} c={"dark"}>
						TotalPrice:
					</Title>
					<Title hidden={getPrice() === 0} order={6} c={"dark"}>
						$ {getPrice()}
					</Title>
				</Flex>
				<Button disabled={data.length === 0} color="dark">
					Proceed To Checkout
				</Button>
			</Stack>
		</Flex>
	);
};

export default DrawerData;
