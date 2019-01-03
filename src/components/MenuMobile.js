import React from 'react';
import { StaticQuery, Link } from 'gatsby';

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
        <li><a href="https://blog.oneworldhackathon.org">Blog</a></li>
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
