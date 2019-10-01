module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let lr = {};
  let rl = {};


  bracketsConfig.forEach(function(element) {
    for (let i = 0; i < element.length - 1; i++) {
      lr[element[i]] = element[i+1];
      rl[element[i+1]] = element[i]
    }
  });

if ((str.length) % 2 != 0){
  return (false);
}
  for (let i = 0; i < str.length; i++){
    let temp = str[i];
    if (lr[temp] && rl[temp]){
      if (stack[stack.length-1] == temp && stack.length != 0){
        stack.pop(stack.length - 1);
        continue;
      }
      else {
        stack.push(lr[temp])
        continue;
      }
    }
    if (lr[temp]){
      stack.push(lr[temp])
    }
    else{ 
      if(stack[stack.length-1] == temp){
        stack.pop(stack.length - 1);
      }
        else{
          continue
      }
    }
  }

  if (stack.length > 0){
    return (false)
  }
  else {
    return (true)
  }

}