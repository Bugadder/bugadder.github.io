jsproxy_config({
  // The current configuration version (recorded in the log for troubleshooting)
  // Each time the configuration is modified, this value needs to be increased, otherwise it will not take effect.
  // By default, the configuration is automatically downloaded every 5 minutes. If you want to verify immediately, you can access it in privacy mode.
  ver: '110',

  // Accelerate static resources of commonly used websites through CDN (in experiment)
  static_boost: {
    enable: true,
    ver: 62
  },

  // Node configuration
  node_map: {
/*    'demo-hk': {
      label: 'Demo Service-Hong Kong Node',
      lines: {
        // Host: weight
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: 'Demo Service-Singapore Node',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
    },
*/
    'mysite': {
      label: 'Current site',
      lines: {
        [location.host]: 1,
      }
    },
    // This node is used to load large-volume static resources
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // Paid version (high weight）
        //'node-cfworker-2.etherdream.com': 4,

        // Free version (low weight, share some costs)
        // 100,000 free requests per day per account, but there is a frequency limit
        //'b.007.workers.dev': 1,
        //'b.hehe.workers.dev': 1,
        //'b.lulu.workers.dev': 1,
        //'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * Default node
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * Acceleration node
   */
  node_acc: 'cfworker',

  /**
   * Static resource CDN address
   * Used to accelerate access to resources in the `assets` directory
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // Open during local testing, otherwise access is online
  assets_cdn: 'assets/',

  // Home Path
  index_path: 'index_v3.html',

  // List of sites that support CORS (in experiment ...)
  direct_host_list: 'cors_v1.txt',

  /**
   * Customize the HTML injected into the page
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL custom processing (under design)
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
