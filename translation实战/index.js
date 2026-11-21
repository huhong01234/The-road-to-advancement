//js这门语言还专门提供了一块能力，用于和html中的元素进行交互
//1. 监听翻译按钮的点击事件。


let translateBtn = document.getElementById("translate");
translateBtn.addEventListener("click", function () {
    //1. 获取用户输入的文本和目标语言

    let inputText = document.getElementById("input").value;
    let targetLang = document.getElementById("target").value;
    document.getElementById("result").textContent = "翻译中...";
    
    //console.log(inputText,targetLang);
    
    //2. 将用户输入的文本传输给大模型deepseek-r1（远程的或本地的LLM）//如何用代码链接deepseek-r1模型
    //在js中发送http请求给 http://localhost:11434/api/chat
    fetch('/api/chat',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model:"deepseek-r1:1.5b",
            messages:[
                {
                    role:"system",
                    content:`你是一个专业的翻译官,擅长将一种语言翻译成${targetLang}，只返回最简单的翻译结果，不要带解释与换行符`,
                }
                ,
                {
                    role:"user",
                    content:inputText,
                }
            ],
            stream:false,
        })
        

        })
    .then(res=>res.json())
    .then((data) =>{
        console.log(data.message.content);
        //3. 将翻译结果展示在页面上
        document.getElementById("result").textContent = data.message.content.replace(/\n/g, "");


    })
    .catch((err) => {
        console.error(err);
        document.getElementById("result").textContent = "翻译失败，请稍后重试";
    })




})




