const path = require('path')
module.exports = {
  apps: [
    {
      name: 'chatgpt-wechat',
      script: path.resolve(__dirname, './index.js'),
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      error_file: path.resolve(__dirname, './logs/error.log'), // 错误输出日志
      out_file: path.resolve(__dirname, './logs/out.log'), // 日志
      log_date_format: 'YYYY-MM-DD HH:mm Z', // 日期格式
    },
  ],
}
