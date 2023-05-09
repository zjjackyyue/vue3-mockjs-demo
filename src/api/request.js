// 获取人物信息
export function ajaxRequest() {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users/person");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
}

// 获取人名信息
export function ajaxRequestName() {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users/name");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
}

// 获取省份信息
export function ajaxRequestArray() {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users/array");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
  });
}

// 获取随机生成的文本信息
export function ajaxRequestSomeText() {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/users/text");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
        console.log(JSON.parse(xhr.responseText));
      }
    };
  });
}
