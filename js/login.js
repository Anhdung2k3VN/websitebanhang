const userList = JSON.parse(localStorage.getItem('userList'));

console.log(userList);
function addUser() {
    const signupElement1 = document.querySelector('.js-user-signup');
    const signupElement2 = document.querySelector('.js-pass-signup');
    const name = signupElement1.value;
    const pass = signupElement2.value;
    let kt = true;
    if(name == ''||pass ==''){
        alert('Vui lòng nhập đầy đủ thông tin');
        kt = false;
    }
    for(let i=0; i<userList.length; i++){
        if(name == userList[i].username && pass == userList[i].password){
            kt = false;
            alert('Tài khoản đã được sử dụng');
        }
    }
    if(kt){
        userList.push({username: name, password: pass});
        localStorage.setItem('userList', JSON.stringify(userList));
        signupElement1.value = '';
        signupElement2.value = '';
        alert('Đăng ký thành công');
        location.assign("./login.html")
    }
    console.log(userList);
}
function checkUser() {
    const loginElement1 = document.querySelector('.js-user-login');
    const loginElement2 = document.querySelector('.js-pass-login');
    const name1 = loginElement1.value;
    const pass1 = loginElement2.value; 
    let kt = false;
    for(let i=0; i<userList.length; i++){
        if(name1 === userList[i].username && pass1 === userList[i].password){
            kt = true;
            alert('Đăng nhập thành công');
            location.assign("./index.html");
        }
    }
    if(!kt){
        alert('Sai tên đăng nhập hoặc mật khẩu')
    }
}
