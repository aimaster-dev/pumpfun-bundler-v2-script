const { openAsBlob } = require('fs');

(async () => {
  const blob = await openAsBlob('IO.png');
  console.log(blob)
})();