// src/seo/Seo.jsx
import { Helmet } from "react-helmet-async";
import { meta } from "./meta";

/**
 * SEO component
 * Usage:
 * <Seo page="projects" />
 */
const Seo = ({ page = "home", overrides = {} }) => {
    const data = { ...meta[page], ...overrides };

    return (
        <Helmet>
            <title>{data.title}</title>
            <meta name="description" content={data.description} />

            {/* Open Graph */}
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:type" content="website" />
            {data.image && <meta property="og:image" content={data.image} />}
            {data.url && <meta property="og:url" content={data.url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            {data.image && <meta name="twitter:image" content={data.image} />}
        </Helmet>
    );
};

export default Seo;
