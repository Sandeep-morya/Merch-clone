import { Button, Drawer, Flex } from "@mantine/core";
import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import { logo, logoName, headerBackground, raindropsAnimation } from "public";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartStateType } from "@/redux/cart/redcuer";
import { storeType } from "@/redux/store";
import DrawerData from "./DrawerData";
import { getCartItems } from "@/redux/cart/action";
import { useRouter } from "next/router";

const Header = () => {
	const [opened, setOpened] = useState(false);
	const data = useSelector<storeType, cartStateType>((store) => store.cart);

	const dispatch = useDispatch();
	const Router = useRouter();
	useEffect(() => {
		dispatch(getCartItems());
	}, [dispatch]);
	return (
		<Flex
			pt={"2rem"}
			justify={"space-around"}
			align="start"
			pos={"relative"}
			h="10rem">
			<Image
				style={{
					position: "absolute",
					width: "300%",
					height: "100%",
					top: 0,
					left: 0,
					zIndex: "0",
				}}
				src={raindropsAnimation}
				alt=""
				// priority={true}
			/>
			<Image
				style={{
					position: "absolute",
					width: "100%",
					height: "auto",
					top: 0,
					left: 0,
					zIndex: "-1",
				}}
				src={headerBackground}
				alt=""
				// priority={true}
			/>

			<Image onClick={() => Router.replace("/")} src={logo} alt="logo" />
			<Image onClick={() => Router.replace("/")} src={logoName} alt="logo" />
			<Button
				onClick={() => setOpened(true)}
				styles={() => ({
					root: {
						backgroundColor: "transparent",
						border: "2px solid black",
						height: 42,
						paddingLeft: 20,
						paddingRight: 20,
						fontSize: "1.1rem",

						"&:hover": {
							backgroundColor: "black",
							color: "white",
						},
					},

					leftIcon: {
						marginRight: 15,
					},
				})}
				variant="outline"
				radius="xl"
				title="cart"
				color="dark"
				leftIcon={<FaShoppingBag />}>
				{data.length}
			</Button>
			<Drawer
				opened={opened}
				position="right"
				size={"xl"}
				withCloseButton={false}
				style={{ borderRadius: "1rem" }}
				onClose={() => setOpened(false)}>
				<DrawerData data={data} setOpened={setOpened} />
			</Drawer>
		</Flex>
	);
};

export default Header;
