fetch(browser.runtime.getURL('hostnames.json'))
.then((response) => response.json()) 
.then((json) => {
  let currentUrl = new URL(location.href);
  const proxySuffix = '.proxy.bnl.lu';
  if (!json.hostnames.includes(currentUrl.hostname)) {
    return;
  }
  currentUrl.hostname = currentUrl.hostname.replaceAll('.', '-') + proxySuffix;
  console.log('Redirecting to ' + currentUrl.hostname);
  location.href = currentUrl.href;
});
