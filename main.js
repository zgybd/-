"ui";


ui.layout(
    <vertical>
    <text text="年龄计算器" gravity="center" marginTop="10" textColor="#000000" textSize="30dp" />
    <text text="↓你的出生年份↓" textColor="#000000" marginTop="10" textSize="15dp" gravity="center" />
    <input id="Year" w="*" marginTop="10" />
    <button id="start" text="开始计算" w="*" marginTop="5" />
    <text text="By Zgybd_" gravity="center" marginTop="500" />
    </vertical>
)

ui.start.click(function(){
    var YearNow = 获取今年年份();
    var Year = ui.Year.getText()
    if(Year > YearNow){
        alert("你耍我呢！")
    }else{
        if(Year <= 1900){
            alert("你耍我呢！")
        }else{
        var age = YearNow - Year 
        alert("你的年龄是"+age+"岁")
        }
    }
})

function 获取今年年份(){
    return new java.text.SimpleDateFormat("yyyy").format(new Date());
}