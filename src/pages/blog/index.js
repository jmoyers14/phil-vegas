import * as React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/home-jumbotron.jpg')`,
                    }}>
                    <h1
                        className="has-text-weight-bold is-size-1"
                        style={{
                            backgroundColor: '#B6995A',
                            color: 'white',
                            padding: '1rem',
                        }}>
                        Latest Stories
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <BlogRoll />
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
