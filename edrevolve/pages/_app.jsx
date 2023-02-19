import { ConvexProvider, ConvexReactClient } from 'convex/react';
import App from 'next/app';
import '../styles/globals.css'

const address = import.meta.env.NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(address);


function MyApp({ Component, pageProps }) {
    return (
        <ConvexProvider client={convex}>
            <Component {...pageProps} />
        </ConvexProvider>
    );
}
  
export default MyApp;
