module.exports = {
  title: 'Innovet-RaspberryPi-SO',
  description: 'Raspberry pi cursus voor SO.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://vti.sint-rembert.be/' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/inleiding/', 'Inleiding'],
      ['/lamp/', 'LAMP'],
      ['/arduino-to-raspberry-pi/', 'Arduino To Raspberry pi'],
      ['/grafana/', 'Grafana'],
      ['/componentenlijst/', 'Componentenlijst']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet-RaspberryPi-SO.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
