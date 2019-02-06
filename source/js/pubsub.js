var events = (function () {
  var topics = {};
  return {
    subscribe: function (topic, listener) {
      if (!topics[topic]) topics[topic] = {
        queue: []
      };
      var index = topics[topic].queue.push(listener) - 1;
      return {
        remove: function () {
          delete topics[topic].queue[index];
        }
      };
    },
    publish: function (topic, info) {
      if (!topics[topic] || !topics[topic].queue.length) return;
      var items = topics[topic].queue;
      items.forEach(function (item) {
        item(info || {});
      });
    }
  };
})();
