document$.subscribe(() => {
    let url = "";
    switch(true){
        case window.location.href.indexOf("http://localhost:8000/voicegateway") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/voicegateway") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/voicegateway") !== -1:
            url = "https://endpoint-app.cognigy.ai/81fed99ad0e3380b2264dadb44f991a8810ea1d3f2f2dcb5fab26259d7acbb34";
            break;
        case window.location.href.indexOf("http://localhost:8000/insights") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/insights") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/insights") !== -1:
            // url = "https://endpoint-app.cognigy.ai/c7e4bce0e6747a7dfd3e1162abd2f6c04ab718177709d110e3d183e12232bf02";
            break;
        case window.location.href.indexOf("http://localhost:8000/live-agent") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/live-agent") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/live-agent") !== -1:
            // url = "https://endpoint-app.cognigy.ai/fff136b77479f8ace2335db3e1949108621e61e23539dbe829f60e897c310bb9";
            break;
        case window.location.href.indexOf("http://localhost:8000/ai-copilot") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/ai-copilot") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/ai-copilot") !== -1:
            // url = "https://endpoint-app.cognigy.ai/fccd3f57c6495ee152b0e0b045f3e03df123f712a6afdc110f4920e8fd3d16a2";
            break;
        default:
            // url = "https://endpoint-app.cognigy.ai/99fee2f43f8436f9ebf4112b31cfc330d85f5c0d86ee26381974aa7bfbb50b16";
    }
    if(url !== ""){
        initWebchat(url, {
        }).then(function (webchat) {
            window.cognigyWebchat = webchat;
            // webchat.open();
        })
    }
})