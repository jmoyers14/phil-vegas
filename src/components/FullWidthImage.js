import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import logo from '../img/logo.png';

export default function FullWidthImage(props) {
    const { height = 500, img, imgPosition = 'center' } = props;

    return (
        <React.Fragment>
            <div
                className="margin-top-0"
                style={{
                    display: 'grid',
                    alignItems: 'center',
                }}>
                {img?.url ? (
                    <img
                        src={img}
                        objectFit={'cover'}
                        objectPosition={imgPosition}
                        style={{
                            gridArea: '1/1',
                            // You can set a maximum height for the image, if you wish.
                            height: height,
                            width: '100%',
                        }}
                        // You can optionally force an aspect ratio for the generated image
                        aspectratio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        formats={['auto', 'webp', 'avif']}
                    />
                ) : (
                    <GatsbyImage
                        image={img}
                        objectFit={'cover'}
                        objectPosition={imgPosition}
                        style={{
                            gridArea: '1/1',
                            // You can set a maximum height for the image, if you wish.
                            maxHeight: height,
                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectratio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        formats={['auto', 'webp', 'avif']}
                    />
                )}
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: '1/1',
                        position: 'relative',
                        // This centers the other elements inside the hero component
                        placeItems: 'center',
                        display: 'grid',
                    }}>
                    <img
                        src={logo}
                        alt="Phil"
                        style={{ width: '15rem', opacity: 0.95 }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

FullWidthImage.propTypes = {
    img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    height: PropTypes.number,
};
