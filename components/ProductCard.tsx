import { productItemType } from "@/Types/product";
import { Flex, Box, Image, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

type Props = {
	product: productItemType;
};

const ProductCard = ({ product }: Props) => {
	const router = useRouter()
	return (
		<Flex direction={"column"} justify="space-between">
			<Box
				className="card"
				onClick={()=>router.push(`/product/${product.id}`)}
				pos={"relative"}
				style={{
					border: "1px solid grey",
					borderRadius: "1rem",
					overflow: "hidden",
				}}>
				<div className="info">
					<FaShoppingBag size={40} />
				</div>
				<Image
					src={product.featuredImage.url}
					alt={product.featuredImage.altText}
					width={200}
					height={350}
					m="auto"
				/>
			</Box>
			<Flex justify={"space-between"}>
				<Title className="title" order={4}>{product.title}</Title>
				<Title order={4}>
					{"$"}
					{product.priceRange.minVariantPrice.amount}
				</Title>
			</Flex>
		</Flex>
	);
};

export default ProductCard;
