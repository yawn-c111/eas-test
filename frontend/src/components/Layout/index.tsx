import { ReactNode } from "react";
import MyHead from "./heads/Head";
import Navbar from "./Navbar";
import Footer from "./footers/Footer";
import { LayoutGrid } from "./LayoutGrid";
import MyContainer from "./containers/MyContainer";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MyHead />
            <LayoutGrid>
                <Navbar />
                <MyContainer>
                    {children}
                </MyContainer>
                <Footer />
            </LayoutGrid>
        </>
    )
};

export default Layout;
