import pluginTester from 'babel-plugin-tester';
import HoistCommonString from '../src/index';

pluginTester({
  // 插件
  plugin: HoistCommonString,
  // 插件名，可选
  pluginName: 'hoist-common-string',
  // 插件参数，可选
  pluginOptions: {
    minCount: 2,
  },
  tests: {
    'using jest snapshots': {
      // 输入
      code: `const s1 = "foo";
      const s2 = "foo";

      const s3 = "bar";

      function f1() {
        const s4 = "baz";
        if (true) {
          const s5 = "baz";
        }
      }`,
      // 使用快照测试
      snapshot: true,
    },
  },
});