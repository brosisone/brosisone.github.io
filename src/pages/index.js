import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="브로시스원">
      <p>
        보라 형제가 연합하여 동거함이 어찌 그리 선하고 아름다운고 - 시편 133:1
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../images/letter.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
