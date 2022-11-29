import React from "react";
import { arrayOf, shape, string } from "prop-types";
import { StyledFooter } from "./footer.styles";
import { Navigation } from "../../molecules/navigation/navigation";

export const Footer = ({ menus }) => (
    <StyledFooter>
        <div className="footer__contents">
            <div className="footer__wrapper">
                {menus.map(({ items, title }) => (
                    <div
                        className="footer_navigation"
                        key={`footer-nav-${title}`}
                    >
                        {title && <h3 className="footer__title">{title}</h3>}
                        <Navigation direction={"vertical"} items={items} />
                    </div>
                ))}
            </div>
            <div className="footer__newsletter">
                <h4 className="footer__heading">Join our newsletter</h4>
                <p>We will send you updates on new products and discounts.</p>
            </div>
            <nav className="footer__copyright">
                <p>Copyright &copy; Jawad {new Date().getFullYear()}</p>
                <a
                    href="https://jawadrafique.vercel.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Website by Me
                </a>
            </nav>
        </div>
    </StyledFooter>
);

// Expected prop values
Footer.propTypes = {
    menus: arrayOf(
        shape({
            title: string,
            items: arrayOf(
                shape({
                    title: string.isRequired,
                    url: string.isRequired,
                })
            ),
        })
    ),
};

// Default prop values
Footer.defaultProps = {
    menus: [],
};
