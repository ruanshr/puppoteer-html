const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/',{waitUntil:'networkidle2'});
    // 得到百度右上角的标题和相应的URL网址
    const result = await page.evaluate(() => {
        let data = []; // 初始化空数组来存储数据
        let elements = document.querySelectorAll('#u1 > a'); // 获取所有元素
        for (var element of elements){
            let title = element.innerText; // 获取标题
            let url = element.href;//获取网址
            data.push({title,url}); // 存入数组
        }
        return data;
    });
    (await page.$('[name="wd"]')).type('323')
    console.log(result);//打印出信息
    // await page.waitForTimeout(3000);
    // await page.close();
    // await browser.close();
})();