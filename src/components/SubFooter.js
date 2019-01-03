import React from 'react';
import { StaticQuery } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              
              <li>
                <strong>Twitter: </strong>
{' '}
                <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                Website by <a href="https://wolfonmoon.com">Wolf on Moon</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
