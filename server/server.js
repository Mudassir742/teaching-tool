const express = require('express');
const fs = require('fs');
const { execSync } = require('child_process');
const app = new express();
const PORT = 5000;

const fetchWebsite = (url) => {
  execSync(`wget -q -O - ${url} > site.html`,
    (error, stdout, stderr) => {
      if (error !== null) {
        return false;
      }
  });
}

app.get('/', async (req, res) => {
  fs.writeFileSync('site.html', '', () => console.log('Created site.html'));
  fs.createReadStream('site.html').pipe(res);
  fetchWebsite('https://clideo.com/editor/');
});

app.listen(PORT, () => {console.log("Listening at port: ", PORT)} )
