class ConsoleTool {
    static error(value) {
        console.log(`%c${value}`,
            `font-weight:bold;color:#e42f46;font-size: 16px;
                text-shadow: 0 1px #808d93,-1px 0 #cdd2d5,-1px 2px #808d93,
                -2px 1px #cdd2d5,-2px 3px #808d93,-3px 2px #cdd2d5;`);
    }
}
export default ConsoleTool;