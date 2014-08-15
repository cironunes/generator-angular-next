'use strict';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


module.exports = {
  capitalize: capitalize
};
