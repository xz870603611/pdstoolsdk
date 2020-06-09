/*
Created by small peng on 2020/05/09
*/

/*字符串工具类*/

class StringTool {
    /*
    校验是否为手机号码
    @param mobile 手机号码
    @return 结果 Booleans
    */
    static isMobile(mobile) {
        return (/^1[1234567890]\d{9}$/.test(mobile));
    }

}

export default StringTool;