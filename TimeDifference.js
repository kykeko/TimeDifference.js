/**
 *      @postbird
 *      1、本插件采用js编写，可直接将函数复制到个人js文件，减少get请求数
 *      2、license : MIT
 * */
/**
 *  函数使用说明：
 *      1、直接调用函数  TimeDifference()
 *          返回说明： 返回距离当前的时间差
 * */
function timeDifference(tmpTime) {
    var mm=1000;//1000毫秒 代表1秒
    var minute = mm * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var ansTimeDifference=0;//记录时间差
    var tmpTimeStamp = tmpTime ? Date.parse(tmpTime.replace(/-/gi, "/")) : new Date().getTime();//将 yyyy-mm-dd H:m:s 进行正则匹配
    var nowTime = new Date().getTime();//获取当前时间戳
    var tmpTimeDifference = nowTime - tmpTimeStamp;//计算当前与需要计算的时间的时间戳的差值
    if (tmpTimeDifference < 0) {                //时间超出，不能计算
        alert("开始日期大于结束日期，计算失败！");
        return 0;
    }
    /**
     * 通过最开始强调的各个时间段用毫秒表示的数值，进行时间上的取整，为0的话，则没有到达
     * */
    var DifferebceMonth = tmpTimeDifference / month;    //进行月份取整
    var DifferebceWeek = tmpTimeDifference / (7 * day);//进行周取整
    var DifferebceDay = tmpTimeDifference / day;//进行天取整
    var DifferebceHour = tmpTimeDifference / hour;//进行小时取整
    var DifferebceMinute = tmpTimeDifference / minute;//进行分钟取整
    if (DifferebceMonth >= 1) {
        return tmpTime;                 //大于一个月 直接返回时间
    } else if (DifferebceWeek >= 1) {
        ansTimeDifference= parseInt(DifferebceWeek) + "个星期前";
    } else if (DifferebceDay >= 1) {
        ansTimeDifference = parseInt(DifferebceDay) + "天前";
    } else if (DifferebceHour >= 1) {
        ansTimeDifference = parseInt(DifferebceHour) + "个小时前";
    } else if (DifferebceMinute >= 1) {
        ansTimeDifference = parseInt(DifferebceMinute) + "分钟前";
    } else {
        ansTimeDifference = "刚刚";
    }
    return ansTimeDifference;
}
