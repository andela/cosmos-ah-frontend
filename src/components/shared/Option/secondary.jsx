import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLink, { RouteLink } from '../Links/DefaultLink';

const Option = ({ displayStyle, handleOnClick, links }) => {
  const optionLinks = links.map(link => {
    const optionLink = [];
    if (link.type) {
      if (link.type === 'router') {
        optionLink.push(<Link classList={link.class} to={link.to}>{link.text}</Link>);
      }
      optionLink.push(<DefaultLink href={link.to} children={link.text} />);
    }
    return optionLink;
  });
  return (
    <Option.Fragment>
      <BrowserRouter>
        {optionLinks}
      </BrowserRouter>
    </Option.Fragment>
  );
};

export default Option;
