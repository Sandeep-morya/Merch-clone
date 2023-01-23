import React from 'react'
import { Box, Button, Flex } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";


type Props = {}

const Footer = (props: Props) => {
  return (
		<Flex gap={"xl"} w="70%" m="auto" mt={'2rem'}>
			<Link href="https://fresh.deno.dev">
				<Image
					src="https://fresh.deno.dev/fresh-badge.svg"
					alt="Fresh Badge"
					height="37"
					width="197"
				/>
			</Link>
			<Link href="https://github.com/denoland/merch">
				<Button
					color={"dark"}
					variant={"white"}
					leftIcon={<FaGithub size={"20"} />}>
					Source
				</Button>
			</Link>
		</Flex>
	);
}

export default Footer