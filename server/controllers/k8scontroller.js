const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
// kc.makeApiClient();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
console.log(k8sApi.basePath);

const k8scontroller = {};

k8scontroller.getPods = (req, res, next) => {
  k8sApi
    .readNamespacedPodLog('ecs-test-6845b4b944-hbcjk', 'default')
    .then((result) => {
      console.log('LOG: ', result.body);
    });
  k8sApi
    .listNamespacedPod(
      'default'
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // undefined,
      // 1000,
      // true,
      // undefined
    )
    .then((result) => {
      console.log('RESULT: ', result);
      res.locals.result = result.body.items;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = k8scontroller;
