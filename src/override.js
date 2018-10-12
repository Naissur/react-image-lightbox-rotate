import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactImageLightbox from 'react-image-lightbox';

let angle;

export const changeAngle = (newAngle) => {
    angle = newAngle;
};

const parentTransform = ReactImageLightbox.getTransform;
ReactImageLightbox.getTransform = (args) => {
    const parent = parentTransform(args);

    let transform = `rotate(${angle}deg)`;

    if (angle === 90 || angle === 270) {
        transform += ` scale(${args.height / args.width})`;
    }

    if (angle && angle !== 0) {
        parent[Object.keys(parent)[0]] += transform;
    }

    return parent;
};


Object.assign(ReactImageLightbox.propTypes, {
    angle: PropTypes.number,
});

export default ReactImageLightbox;

