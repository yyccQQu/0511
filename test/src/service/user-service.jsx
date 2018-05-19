import MUtil from 'util/mm.jsx'
const _mm = new MUtil();

class User{
    // 用户登录
    login(loginInfo) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
}

export default User;