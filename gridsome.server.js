// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // 添加集合，集合名称为 Post
    const collection = addCollection('Post')
    // 发起请求，获取数据：想要渲染到页面中的数据，在这里进行预请求
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    // 遍历数据，
    for (const item of data) {
      // 添加节点，并往节点中添加数据
      // 将来就可以通过节点和数据创建对应的模板，然后生成节点页面了
      collection.addNode({
        id: item.id,
        title: item.title,
        content: item.body
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
