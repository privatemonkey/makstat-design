let makstatHeader = {
    method: "GET",
    headers: {"Content-type": "text/html", "Access-Control-Allow-Origin":"*"},
    cache: "no-store"
  }

let isExternal = false

/*
* @function
* Get content from template files
*/
async function getFile(el, file) {
  let header = {
    cache: "no-store"
  }

  if (file.indexOf('https') >-1) {
    header = makstatHeader
    isExternal = true
    console.log('Trying to fetch external content from ' + file)
  } else {
    isExternal = false
  }

  await fetch(file, header)
  .then((response) => {
    if (response.status == 200) {
        return response.text()
    } else {
      throw new Error(response.status);
    }
  }
  )
  .then((data) => {
    if (data) {
      el.insertAdjacentHTML('beforebegin', data);
      el.textContent = data.split('>').join('>\n')
      el.removeAttribute('data-include')
      el.className = 'code is-hidden'
    } else {
      if (data==='') {
        el.innerHTML = "Is empty '" + file + "'";
        el.removeAttribute('data-include')
        el.className = "template-is-empty"
      } else {
        el.innerHTML = "Could not find '" + file + "'";
        el.removeAttribute('data-include')
        el.className = "template-load-error"
      }
    }
  }).catch((err) => {
    console.log('Error')
    console.log(err)
  })
}

async function includeHTML() {
    var includes, i, el, file;
    
    includes = document.querySelectorAll('[data-include]');
    
    for (i = 0; i < includes.length; i++) {
      el = includes[i];
      
      file = el.getAttribute("data-include");
      
      try {
        await getFile(el, file)
      } catch(err) {
        console.log(err)
      }
    }
}

function toggleCode() {
  let code = document.querySelectorAll('.code')
  
  code.forEach(el => {
      if (el.className.indexOf('is-hidden')>-1) {
        el.className = 'code'
      } else {
      el.className = 'code is-hidden'
      } 
  })
}
