/**
 * Created by lenovo on 2019/9/19.
 *
 * react-scripts webpack 扩展配置
 *
 */

const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // config = rewireLess(config, env);
  return config;
};
