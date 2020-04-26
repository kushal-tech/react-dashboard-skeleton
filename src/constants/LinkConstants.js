let BASE_URL;

if(process.env.NODE_ENV!="production"){
  BASE_URL = 'https://www.abc.com/';
} else {
  BASE_URL = 'https://www.abc.com/';
}

const LINK = {
  BASE_URL: BASE_URL,
  GETDATA: BASE_URL + 'app/getdata'
}

const LINK_PRIORITY = {
  [LINK.GETDATA] : 0
}

module.exports = LINK;
module.exports.LINK_PRIORITY = LINK_PRIORITY;
