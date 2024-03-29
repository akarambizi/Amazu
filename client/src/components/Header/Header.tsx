import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as OpenSvg } from '../../assets/images/icon-bars.svg';
import { ReactComponent as CloseSvg } from '../../assets/images/icon-cross.svg';
import { Wrapper } from '../../styles/elements';
import * as Styles from './Header.styles';

export const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <Styles.HeaderMain isNavVisible={isNavVisible}>
            <Wrapper>
                <Styles.HeaderLogo>
                    <Link to="/" aria-label="home">
                        Amazu
                    </Link>
                </Styles.HeaderLogo>

                {/* close and open header links on mobile */}
                <Styles.HeaderButtonsMobile>
                    <button type="button" aria-label={`${isNavVisible ? 'close' : 'open'} header`} onClick={() => setIsNavVisible(!isNavVisible)}>
                        {isNavVisible ? <CloseSvg /> : <OpenSvg />}
                    </button>
                </Styles.HeaderButtonsMobile>

                <Styles.HeaderNav isNavVisible={isNavVisible}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setIsNavVisible(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rent" onClick={() => setIsNavVisible(false)}>
                                Rent
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/buy" onClick={() => setIsNavVisible(false)}>
                                Buy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin" className="sign-in" aria-label="Sign In" onClick={() => setIsNavVisible(false)}>
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                </Styles.HeaderNav>
            </Wrapper>
        </Styles.HeaderMain>
    );
};
