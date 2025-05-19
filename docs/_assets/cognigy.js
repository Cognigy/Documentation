document$.subscribe(() => {
    let url = "";
    switch(true){
        case window.location.href.indexOf("http://localhost:8000/voice-gateway") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/voice-gateway") !== -1:
        case window.location.href.indexOf("https://42053.docs-staging.cognigy.dev") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com") !== -1:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217"; // V3
            break;
        case window.location.href.indexOf("http://localhost:8000/insights") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/insights") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/insights") !== -1:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217";
            break;
        case window.location.href.indexOf("http://localhost:8000/live-agent") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/live-agent") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/live-agent") !== -1:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217";
            break;
        case window.location.href.indexOf("http://localhost:8000/ai-copilot") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/ai-copilot") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/ai-copilot") !== -1:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217";
            break;
            case window.location.href.indexOf("http://localhost:8000/ai") !== -1:
        case window.location.href.indexOf("http://127.0.0.1:8000/ai") !== -1:
        case window.location.href.indexOf("https://docs.cognigy.com/ai") !== -1:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217";
            break;
        default:
            url = "https://endpoint-app.cognigy.ai/51f6de28ed44862582e8672e5014e06e331cc6bc07311e965e29b618f421f217";
    }
    if(url !== ""){
        initWebchat(url, {
        }).then(function (webchat) {
            window.cognigyWebchat = webchat;
            // webchat.open();
        })
    }
})