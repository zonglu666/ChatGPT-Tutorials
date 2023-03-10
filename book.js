let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  'expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
];
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: 'ChatGPT教程',
  author: 'Code工场',
  lang: 'zh-cn',
  description: 'ChatGPT入门级小白教程',
  plugins,
  pluginsConfig: {
    'flexible-alerts': {
      style: 'flat',
      note: {
        label: 'Note',
        icon: 'fa fa-info-circle',
        className: 'info',
      },
      tip: {
        label: 'Tips',
        icon: 'fa fa-lightbulb-o',
        className: 'tip',
      },
      warning: {
        label: 'Warning',
        icon: 'fa fa-exclamation-triangle',
        className: 'warning',
      },
      danger: {
        label: 'Danger',
        icon: 'fa fa-ban',
        className: 'danger',
      },
      comment: {
        label: 'Comment',
        icon: 'fa fa-commenting',
      },
      question: {
        label: 'Question',
        icon: 'fa fa-question-circle',
      },
    },
    'theme-lou': {
      color: '#1890FF', // 主题色
      favicon: 'assets/favicon.ico',
      logo: 'assets/chatgpt-logo.png',
      copyrightLogo: 'assets/copyright-code.png',
      autoNumber: 3, // 自动编号到几级标题
      titleColor: {
        h1: '#1890FF',
        h2: '#18A0FF',
        h3: '#18AAFF',
      },
      forbidCopy: true,
      appleTouchIconPrecomposed152:
        'assets/apple-touch-icon-precomposed-152.png',
      'hide-elements': ['.summary .gitbook-link'],
      copyright: {
        author: 'Code工场',
      },
    },
  },
  variables: {
    themeLou: {
      footer: {
        donate1: {
          button: '赞赏',
          avatar:
            'http://qiniu.kujiajia.xyz/aaa-dobe/%E5%8D%A1%E9%80%9A%E8%90%8C%E5%A4%B4%E5%83%8F.png',
          nickname: '松露老师',
          message: '随意打赏，但不要超过一杯咖啡钱 ☕️',
          text: '『 赠人玫瑰 🌹 手有余香 』',
          wxpay:
            'http://qiniu.kujiajia.xyz/aaa-dobe/%E8%B5%9E%E8%B5%8F%E7%A0%81-%E5%BE%AE%E4%BF%A1-%E6%96%B9.png',
          alipay:
            'http://qiniu.kujiajia.xyz/aaa-dobe/%E8%B5%9E%E8%B5%8F%E7%A0%81-%E6%94%AF%E4%BB%98%E5%AE%9D-%E6%96%B9.png',
        },
        copyright: true, // 显示版权
      },
    },
  },
};
