import styled from 'styled-components';
import ParagraphLink from './ParagraphLink';

const NavLink = ParagraphLink.extend.attrs({
  className: 'f4 lh-copy mr4 f3-l',
})`
    font-family: ${props => props.theme.displayFont};
    &:before {
        height: 2px;
    }
`;

const Nav = styled.div.attrs({
  className: '',
})`
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;

module.exports = { Nav, NavLink };
