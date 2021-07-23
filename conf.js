jsproxy_config({
    // The current configuration version (recorded in the log for troubleshooting ) 
    // Each time the configuration is modified, this value needs to be increased, otherwise it will not take effect.
    // By default, the configuration is automatically downloaded every 5 minutes. If you want to verify immediately, you can access it in privacy mode.
    ver: "110",

    // Accelerate static resources of commonly used websites through CDN (in experiment)
    static_boost: {
        enable: true,
        ver: 62,
    },

    // Node configuration not configured ccorrectly
    node_map: {
        'demo-hk': {
            label: "HONGKONG-PROXY",
            lines: {
                "b.hehe.workers.dev:8443": 1, // Host: weight
                "b.lulu.workers.dev:8443": 2,
                "b.jsproxy.workers.dev:8443": 3,
            },
        },
        'demo-sg': {
            label: "SINGAPORE-PROXY",
            lines: {
                "b.007.workers.dev:8443": 1,
            },
        },
        'mysite': {
            label: "AUTO-PROXY",
            lines: {
                [location.host]: 1,
            },
        },
        'cfworker': {
            label: "",
            hidden: false,
            lines: {
                // Paid version (high weight）
                //'node-cfworker-2.etherdream.com': 4,
                // Free version (low weight, share some costs)
                'b.007.workers.dev': 1,
                //'b.hehe.workers.dev': 1,
                //'b.lulu.workers.dev': 1,
                //'b.jsproxy.workers.dev': 1,
            },
        },
    },

    _node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',
    get node_default() {
        return this._node_default;
    },
    set node_default(value) {
        this._node_default = value;
    },

    /**
     * Acceleration node
     */
    node_acc: "cfworker",

    /**
     * Static resource CDN address
     * Used to accelerate access to resources in the `assets` directory
     */
    // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

    // Open during local testing, otherwise access is online
    assets_cdn: "assets/",

    // Home Path
    index_path: "index_v3.html",

    // List of sites that support CORS (in experiment ...)
    direct_host_list: "cors_v1.txt",

    /**
     * Customize the HTML injected into the page
     */
    inject_html: "<!-- custom html -->",

    /**
     * URL custom processing (under design)
     */
    url_handler: {
        "http://haha.com/": {
            content: "Hello World",
        },
    },
});
