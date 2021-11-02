export function validateURL(url){
    const rgx = /^(http(s)?:\/\/)/g;
    const validate = rgx.test(url);
    if(url === ''){
        alert('Field cannot be empty. Please enter an URl!');
        return false;
    } else if(validate === false){
        alert('Invalid URl. Please enter a vaild URl!');
        return false;
    }
}