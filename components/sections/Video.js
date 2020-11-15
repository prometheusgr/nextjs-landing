
import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Video = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    ...props
}) => {

    const outerClasses = classNames(
        'video section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'video section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'Video',
        paragraph: 'Watch what we can do together.'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>


                        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                            <a
                                data-video="https://player.vimeo.com/video/174002812"
                                href="#0"
                                aria-controls="video-modal"
                                onClick={openModal}
                            >
                                <Image
                                    className="has-shadow"
                                    src={require('./../../assets/images/video-placeholder.jpg')}
                                    alt="Hero"
                                    width={896}
                                    height={504} />
                            </a>
                        </div>
                        <Modal
                            id="video-modal"
                            show={videoModalActive}
                            handleClose={closeModal}
                            video="https://player.vimeo.com/video/174002812"
                            videoTag="iframe" />
                        <Cta />

                    </div>
                </div>
            </div>
        </section>
    );
}

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
