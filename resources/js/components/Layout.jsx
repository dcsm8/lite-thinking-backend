import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Flex direction="column" minH="100vh" mb={10}>
                {children}
            </Flex>
        </>
    );
};

export default Layout;
