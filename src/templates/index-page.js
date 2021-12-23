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
    email,
    mainpitch,
}) => {
    const heroImage = getImage(image) || image;
    const profile = getImage(profileImage) || profileImage;

    return (
        <div>
            <FullWidthImage img={heroImage} />
            <section
                className="section section--gradient"
                style={{ padding: '0rem' }}>
                <div className="container">
                    <div className="section" style={{ padding: '1.5rem' }}>
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
                                            <div className="subtitle">
                                                {mainpitch.description}
                                            </div>
                                        </div>
                                        <div className="tile">
                                            <div
                                                className="subtitle"
                                                style={{ marginTop: '20px' }}>
                                                {mainpitch.subDescription}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                textAlign: 'center',
                                                marginTop: '20px',
                                            }}>
                                            <a
                                                href={`mailto: ${email}`}
                                                style={{ color: '#B6995A' }}>
                                                {email}
                                            </a>
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
    email: PropTypes.string,
    mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                profileImage={frontmatter.profileImage}
                email={frontmatter.email}
                mainpitch={frontmatter.mainpitch}
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
                email
                mainpitch {
                    title
                    description
                    subDescription
                }
            }
        }
    }
`;
