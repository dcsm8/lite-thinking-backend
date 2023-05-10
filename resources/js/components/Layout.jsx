import React from "react";
import { Flex } from "@chakra-ui/react";
import AdminNavbar from "./AdminNavbar";
import CustomerNavbar from "./CustomerNavbar";

const Layout = ({ children, auth }) => {
    return (
        <>
            {auth.user.role === "admin" ? <AdminNavbar /> : <CustomerNavbar />}
            <Flex direction="column" minH="100vh" mb={10}>
                {children}
            </Flex>
        </>
    );
};

export default Layout;
