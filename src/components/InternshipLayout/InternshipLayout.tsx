import Footer from "../Footer/Footer";
import Header, { Theme } from "../Header/Header";

const InternshipLayout = ({ children }: Props) => {
  return (
    <>
      <Header theme={Theme.LIGHT}/>
      {children}
      <Footer />
    </>
  );
};

export default InternshipLayout;

interface Props {
  children: JSX.Element;
}