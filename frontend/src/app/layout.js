import { Provider } from "react-redux";
import { store } from "../store";
import AuthProvider from "../components/AuthProvider";
import "./globals.css";
import Providers from "../components/Providers";
import Navbar from "../components/Navbar";


export const metadata = {
  title: "GloBuy",
  description: "E-commerce Admin and Customer Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}