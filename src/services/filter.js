angular.module('ifiske.services')
  .filter('onebr', function() {
    return function(input) {
      return input && input.replace(/(<br>\s*)+/g, '<br>');
    };
  })
  .filter('nobrs', function() {
    return function(input) {
      return input && input.replace(/(<br(\s*\/)*>)+/gi, ' ');
    };
  })
  .filter('cleantables', function() {
    return function(input) {
      input = input.replace(/(<\/?table>)+/g, '');
      input = input.replace(/(<\/?tr>)+/g, '');
      input = input.replace(/(<\/?th>)+/g, '');
      input = input.replace(/(<(\/?)td.*?>)+?/g, '<$2p>');
      input = input.replace(/<p>\s*<\/p>/g, '');
      return input;
    };
  });
