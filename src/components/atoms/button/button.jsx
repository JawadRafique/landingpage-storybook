import React from "react";
import { StyledButton, StyledLinkButton } from "./button.styles";
import { ReactComponent as IconPlus } from "../../../assets/images/icons/plus.svg";
import { ReactComponent as IconX } from "../../../assets/images/icons/x.svg";
import { ReactComponent as IconUser } from "../../../assets/images/icons/user.svg";
import { ReactComponent as IconBag } from "../../../assets/images/icons/shopping-bag.svg";
import { ReactComponent as IconCart } from "../../../assets/images/icons/shopping-cart.svg";
import { func, string } from "prop-types";
import { node } from "prop-types";

const Icons = {
    bag: IconBag,
    cart: IconCart,
    plus: IconPlus,
    user: IconUser,
    x: IconX,
};

export const Button = ({ children, href, onClick, variant, icon }) => {
    if (href)
        return (
            <StyledLinkButton href={href} variant={variant}>
                {icon && <ButtonIcon name={icon} />}
                {children}
            </StyledLinkButton>
        );
    return (
        <StyledButton onClick={onClick} variant={variant}>
            {icon && <ButtonIcon name={icon} />}
            {children}
        </StyledButton>
    );
};

const ButtonIcon = ({ name }) => {
    if (Icons[name] === undefined) return null;

    const Icon = Icons[name];
    return (
        <span className="button__icon">
            <Icon />
        </span>
    );
};

Button.propTypes = {
    /**
     * Text of a button
     */
    children: node.isRequired,
    variant: string,
    href: string,
    onClick: func,
    icon: string
};

Button.defaultProps = {
    variant: "primary",
};
