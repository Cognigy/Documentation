document$.subscribe(() => {
    let url = "";
    switch(true){
        case window.location.href.indexOf("http://localhost:8000/voice-gateway") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/voice-gateway") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/voice-gateway") !== -1:
            // url = "https://endpoint-app.cognigy.ai/760f7cb6584e5bc5fee87952e483e60f81c5e59ea4026ec1841beba8e07b4a13"; // V3
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
            case window.location.href.indexOf("http://localhost:8000/ai") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/ai") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/ai") !== -1:
            // url = "https://endpoint-app.cognigy.ai/99fee2f43f8436f9ebf4112b31cfc330d85f5c0d86ee26381974aa7bfbb50b16";
            break;
        default:
            // url = "https://endpoint-app.cognigy.ai/0f2688271e9ee676cf1fd60ce656ab847780f8e596b534c991ec2ed1b6d52c70";
    }
    if(url !== ""){
        initWebchat(url, {
        }).then(function (webchat) {
            window.cognigyWebchat = webchat;
            // webchat.open();
        })
    }
})