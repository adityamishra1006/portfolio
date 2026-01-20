import { useLocation } from "react-router-dom";

/**
 * Hook to trigger page animations on route change
 */
export default function usePageTransition() {
    const location = useLocation();

    return {
        key: location.pathname,
        pathname: location.pathname,
    };
}
