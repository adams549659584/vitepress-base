/**
 * @type { import ('vitepress').UserConfig }
 */
const config = {
  // 站点的标题。 这是所有页面标题的前缀，并显示在导航栏中。
  title: '社会主义核心价值观',
  // 站点的描述。 这将作为<meta>标记渲染在页面HTML中。
  description: '富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善',
  // 站点将部署在这个base URL。如果你计划将站点部署到子路径（例如GitHub页面），则需要设置这个选项。
  // 比如，你计划将站点部署到https://foo.github.io/bar/,那么你需要设置base为'/bar/'。注意，base需要以/开始并以/结尾。
  base: '/vitepress-base/',
  lang: 'zh-CN',
  themeConfig: {
    search: true,
    // 右上角导航
    nav: [
      { text: '右上角导航1', link: '/' },
      { text: '右上角导航2', link: '/' },
      { text: '右上角导航3', link: '/' },
    ],
    // 侧边栏导航
    sidebar: {
      '/': [
        {
          text: '指引',
          link: '/guide/test',
        },
        {
          text: '联系',
          children: [
            { text: '联系', link: '/contact/test' },
            { text: '联系-2', link: '/contact/test2' },
          ],
        },
        {
          text: '关于',
          children: [
            { text: '关于', link: '/about/test' },
            { text: '关于-2', link: '/about/test2' },
          ],
        },
      ],
    },
  },
};
export default config;
