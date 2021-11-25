import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Carousel } from "antd";
import { Layout } from "antd";
import "./home.page.css";
import "antd/dist/antd.css";
const { Content } = Layout;


const Home: React.FC = () => {
    const navigate = useNavigate();

    const goToAnotherPage= () => {
            navigate(`/about`);
    }
    
  return (
    <>
      <Content style={{ padding: "20px 50px" }}>
        <>
        <div className="home__main">
            <div className="home__slider">
          <Carousel autoplay dotPosition={"left"}>
                <div>
                  <h2 className="home home-background1">Countries</h2>
                </div>
                <div>
                  <h2 className="home home-background2">Info</h2>
                </div>
                <div>
                  <h2 className="home home-background3">Sorting</h2>
                </div>
                <div>
                  <h2 className="home home-background4">Filtration</h2>
                </div>
          </Carousel>
          </div>
          <div className="home__button">
                <Button type="primary" shape="default" size="large" onClick={goToAnotherPage}>Get started</Button>
              </div>
          </div>
        </>
      </Content>
    </>
  );
};

export default Home;
