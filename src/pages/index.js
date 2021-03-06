import React from "react";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">In construction</div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
