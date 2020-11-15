import React from 'react';
import classNames from 'classnames';
import { Link } from 'next/link';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo_small_black.png')}
            alt="Open"
            width={75}
            height={75} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;