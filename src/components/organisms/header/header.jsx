import React from "react";
import { Navigation } from "../../molecules/navigation/navigation";
import { StyledHeader } from "./header.styles";

export const Header = ({ navigation }) => (
    <StyledHeader>
        <div className="header__navigation">
            {navigation.length > 0 &&
                navigation.map(({ items, title }) => (
                    <Navigation items={items} key={`header-menu-${title}`} />
                ))}
        </div>
    </StyledHeader>
);

// Expected prop values
Header.propTypes = {};

// Default prop values
Header.defaultProps = {};
