class JToolString {
    static isMobile(mobile) {
        return (/^1[1234567890]\d{9}$/.test(mobile));
    }
}

export default JToolString;