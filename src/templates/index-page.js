import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import FullWidthImage from '../components/FullWidthImage';
import { GatsbyImage } from 'gatsby-plugin-image';

// eslint-disable-next-line
export const IndexPageTemplate = ({
    image,
    profileImage,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
}) => {
    const heroImage = getImage(image) || image;
    const profile = getImage(profileImage) || profileImage;

    return (
        <div>
            <FullWidthImage img={heroImage} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">
                                    <div className="content">
                                        <div
                                            className="tile"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                columnGap: '20px',
                                            }}>
                                            <GatsbyImage
                                                style={{
                                                    width: '100px',
                                                    borderRadius: '50%',
                                                }}
                                                image={profile}
                                                objectPosition={'center'}
                                                formats={[
                                                    'auto',
                                                    'webp',
                                                    'avif',
                                                ]}
                                            />
                                            <h1 className="title">
                                                {mainpitch.title}
                                            </h1>
                                        </div>
                                        <div
                                            className="tile"
                                            style={{ marginTop: '20px' }}>
                                            <h4 className="subtitle">
                                                {mainpitch.description}
                                            </h4>
                                        </div>
                                        <div className="tile">
                                            <h4 className="subtitle">
                                                {
                                                    'Vegas Golden Knights season ticket holder and proud Vegas resident.'
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    profileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                profileImage={frontmatter.profileImage}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                profileImage {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                heading
                subheading
                mainpitch {
                    title
                    description
                }
            }
        }
    }
`;
