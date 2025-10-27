import Footer from "@/components/landing/footer-section";
import Navigation from "@/components/landing/navigation";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer/>
    </div>
  );
};

export default AuthLayout;
