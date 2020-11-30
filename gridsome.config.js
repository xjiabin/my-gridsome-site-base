// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://xjiabin.github.io/my-gridsome-site-base/',
  titleTemplate: '%s - Gridsome',
  plugins: [],
  templates: {
    Post: '/posts/:id'
    // Post: [
    //   {
    //     path: '/posts/:id',
    //     component: './src/templates/Post.vue'
    //   }
    // ]
  }
}
