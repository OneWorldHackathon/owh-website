module.exports = {
  siteMetadata: {
    title: 'One World Marathon',
    description: 'The One World Strong Foundation embodies the core principles of connection and cooperation supporting the belief that people around the world should work together toward common goals. To reinforce that message, we propose a marathon where teams of participants from around the world will combine their efforts to achieve a total of 26.2 miles (or 42.195km) over a four-day weekend.',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'someone@oneworldfoundation.org',
    },
    menuLinks: [
      {
        name: 'Information',
        link: '/information',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
};
