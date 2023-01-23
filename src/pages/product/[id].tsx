import { updateCartItems } from "@/redux/cart/action";
import { cartStateType } from "@/redux/cart/redcuer";
import { storeType } from "@/redux/store";
import { productItemType } from "@/Types/product";
import { Button, Flex, Stack, Title, Text, Image, Space } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = ({ data }: { data: productItemType }) => {
	const Route = useRouter();
	const dispatch = useDispatch();
	const cart = useSelector<storeType, cartStateType>((store) => store.cart);
	const addToCart = async (data: productItemType) => {
		dispatch(
			updateCartItems({
				imageUrl: data.featuredImage.url,
				title: data.title,
				price: data.priceRange.minVariantPrice.amount,
				quantity: 1,
			}),
		);
	};
	const handleDisabled = () => {
		for (let e of cart) {
			if (e.title === data.title) {
				return true;
			}
		}
		return false;
	};

	return (
		<div>
			<Button
				onClick={() => Route.replace("/")}
				leftIcon={<FaArrowLeft />}
				variant="white"
				color="gray">
				Back To Shop
			</Button>
			{!data ? (
				"loading..."
			) : (
				<Flex justify={"space-between"} gap="xl">
					<Stack w={"40%"}>
						<Flex justify="space-between">
							<Stack>
								<Title order={3}>{data.title}</Title>
								<Text c={"gray"}>{data.handle}</Text>
							</Stack>
							<Button
								variant={
									"light"
								}>{`$ ${data.priceRange?.minVariantPrice.amount}.00`}</Button>
						</Flex>
						<Title order={4}>Description</Title>
						<Text>{data.description}</Text>
						<Space />
						<Space />
						<Button
							disabled={handleDisabled()}
							onClick={() => addToCart(data)}
							color={"dark"}>
							Add to Cart
						</Button>
					</Stack>
					<Image
						src={data.featuredImage.url}
						alt={data.featuredImage.altText}
						width={200}
						height={350}
						m="auto"
					/>
				</Flex>
			)}
		</div>
	);
};
export const getStaticPaths = async () => {
	const { data }: AxiosResponse<productItemType[]> = await axios.get(
		"http://localhost:8080/products",
	);
	return {
		paths: data.map((product) => ({ params: { id: String(product.id) } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { data } = await axios.get(
		`http://localhost:8080/products/${context.params?.id}`,
	);
	return {
		props: { data },
	};
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const { data } = await axios.get(
// 		`http://localhost:8080/products/${context.query.id}`,
// 	);
// 	return {
// 		props: { data },
// 	};
// };
export default SingleProduct;
