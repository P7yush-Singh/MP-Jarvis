let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function logout(){
    window.location.href = "index.php";
}

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

function welcome(){
    speak(`hello, how can i help you?`)
}
window.addEventListener('load',()=>{
    welcome()
})

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
    setTimeout(function(){
        voice.style.display = "none"
        btn.style.display = "block"
    }, 5000);
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello, how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant, created for echancing task and complete fast to save time");
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time") || (message.includes("what the time"))){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else if (message.includes("play") && message.includes("on youtube")) {
        let song = message.replace("play", "").replace("on youtube", "").trim();
        speak(`playing ${song} on youtube...`);
        window.open(`https://www.youtube.com/search?q=${song}`, "_blank");
      }

    else if(message.includes("chup chutiye") || (message.includes("teri maa ki chut") || (message.includes("jaa naa lodee")) || (message.includes("bhen ke lode")) || (message.includes("jana lodee")))){
        speak("Teri maa ki chooott lodeee");
      }
      else if(message.includes("bhen ke lode jyada boldega") || (message.includes("jyada bolega"))){
        speak("choop Randi ke");
      }

    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
    
}