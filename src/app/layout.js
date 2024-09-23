
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";

//Metadata
export const metadata = {
  title: "Elevation Accounting Group",
  description: "Elevation Accounting Group Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Header />
      {children}
      <Footer />
      </body>
     
    </html>
  );
}
