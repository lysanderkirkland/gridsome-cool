// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'pages/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        },
        refs: {
          // Create a Tag content type and its nodes automatically.
          Tag: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        // add plugin without options
      ]
    }
  }
}
