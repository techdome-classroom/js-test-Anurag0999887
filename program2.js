const decodeTheRing = function (str, pattern) {

  if (str.length !== pattern.length) {
    return false;
}

for (let i = 0; i < str.length; i++) {
    if (pattern[i] !== '*' && str[i] !== pattern[i]) {
        return false;
    }
}

return true;

  };
  
  module.exports = decodeTheRing;


  // Function to decode the ring based on the pattern
function decodeTheRing(str, pattern) {

}

module.exports = decodeTheRing;
