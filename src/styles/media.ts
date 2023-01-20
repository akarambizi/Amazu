const size = {
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
};

const media = {
    mobile: `@media (min-width: ${size.mobile})`,
    mobileMax: `@media (max-width: ${size.mobile})`,
    tablet: `@media (min-width: ${size.tablet})`,
    tabletMax: `@media (max-width: ${size.tablet})`,
    laptop: `@media (min-width: ${size.laptop})`,
    laptopMax: `@media (max-width: ${size.laptop})`,
    desktop: `@media (min-width: ${size.desktop})`,
    desktopMax: `@media (max-width: ${size.desktop})`,
};

export default media;
