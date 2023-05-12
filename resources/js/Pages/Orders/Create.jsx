import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    NumberInput,
    NumberInputField,
    Container,
    Box,
    Heading,
    Flex,
    Stack,
    Select,
} from "@chakra-ui/react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";

const Create = ({ auth, products }) => {
    const { register, handleSubmit, formState } = useForm();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const onSubmit = (data) => {
        Inertia.post("/orders", { ...data, products: selectedProducts });
    };

    const handleAddProduct = () => {
        setSelectedProducts([
            ...selectedProducts,
            { productId: "", quantity: 1 },
        ]);
    };

    const handleProductChange = (event, index) => {
        const { value } = event.target;
        setSelectedProducts((prevProducts) => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index] = {
                ...updatedProducts[index],
                productId: value,
            };
            return updatedProducts;
        });
    };

    const handleQuantityChange = (value, index) => {
        setSelectedProducts((prevProducts) => {
            const updatedProducts = [...prevProducts];
            updatedProducts[index] = {
                ...updatedProducts[index],
                quantity: value,
            };
            return updatedProducts;
        });
    };

    const productOptions = products.map((product) => (
        <option key={product.id} value={product.id}>
            {product.name}
        </option>
    ));

    return (
        <Layout auth={auth}>
            <Container maxW="container.lg">
                <Box maxW="xl" mx="auto" mt={5}>
                    <Heading as="h1" size="xl" mb={5}>
                        Create Order
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl id="name" mb={5}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Enter order name"
                            />
                        </FormControl>
                        <FormControl id="description" mb={5}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                {...register("description", { required: true })}
                                placeholder="Enter order description"
                            />
                        </FormControl>
                        {selectedProducts.map((product, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={4}
                                align="center"
                            >
                                <Select
                                    placeholder="Select product"
                                    value={product.productId}
                                    onChange={(event) =>
                                        handleProductChange(event, index)
                                    }
                                >
                                    {productOptions}
                                </Select>
                                <NumberInput
                                    min={1}
                                    value={product.quantity}
                                    onChange={(value) =>
                                        handleQuantityChange(value, index)
                                    }
                                >
                                    <NumberInputField />
                                </NumberInput>
                            </Stack>
                        ))}
                        <Button onClick={handleAddProduct} mt={3}>
                            Add Product
                        </Button>
                        <Flex justifyContent="flex-end" mt={5}>
                            <InertiaLink href="/orders">
                                <Button colorScheme="red" mr={3}>
                                    Cancel
                                </Button>
                            </InertiaLink>
                            <Button
                                colorScheme="teal"
                                isLoading={formState.isSubmitting}
                                type="submit"
                            >
                                Create
                            </Button>
                        </Flex>
                    </form>
                </Box>
            </Container>
        </Layout>
    );
};

export default Create;
