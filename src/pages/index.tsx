import Button, { ButtonSize, ButtonType } from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { NextPage } from "next";

export const HomePage: NextPage = () => {
  return (<>
      <Header />
      <>
        <div className="py-56 flex flex-col items-center">
          <h1 className='text-4xl text-white mb-20'>北美留学生求职一站式服务</h1>
          <Button text="了解更多" 
            size={ButtonSize.LARGE}
            type={ButtonType.BORDERED}/>
        </div>

        <div className='bg-white py-16'>
          <SectionTitle 
            title='保Offer求职项目'
            subtitle='锁定心仪offer，拿不到Offer退款'/>

        </div>

        <div className='bg-white py-16'>
          <SectionTitle 
            title='实习项目'
            subtitle='超多机会，领航职业起点'/>

        </div>

        <div className='bg-white py-16 text-center'>
          <SectionTitle 
            title='面试集训营'
            subtitle='超强指导，助力每个机会'/>

          <Button text='查看课程' type={ButtonType.GRADIENT} size={ButtonSize.MIDDLE} />
        </div>

      </>
      <Footer />
    </>);
};

export default HomePage;
