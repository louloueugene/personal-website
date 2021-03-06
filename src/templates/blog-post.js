import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const BlogPostTemplate = (props) => {
  const post = get(props, "data.contentfulBlogPost");
  const siteTitle = get(props, "data.site.siteMetadata.title");

  return (
    <Layout location={props.location}>
      <div style={{ maxWidth: 780 }}>
        <Helmet title={`${post.title} | ${siteTitle}`}>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          ></link>
        </Helmet>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>

          <p
            style={{
              display: "block",
            }}
          >
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size="1x"
              style={{ marginRight: 7 }}
            />
            {post.publishDate}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
