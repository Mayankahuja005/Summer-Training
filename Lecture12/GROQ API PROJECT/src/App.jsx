import { useEffect, useState } from "react";
import Groq from "groq-sdk";
if(import.meta.env.VITE_GROQ_API_KEY){
    console.log("API KEY MIL GAYI MITTAR");
}
function App(){
    const groq=new Groq({apiKey:import.meta.env.VITE_GROQ_API_KEY,dangerouslyAllowBrowser:true});

    const[typedText, setTypedText]=useState('');
    const [timeLeft, setTimeLeft ] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [sampleText, setSampleText] = useState('A quick brown fox jumps over the lazy dog while React helps you build interactive user interface');
    useEffect(() => {
        if(!isRunning || timeLeft<=0) return;
        const timerId=setInterval(() => {
            setTimeLeft(prev => prev -1 )
        }, 1000);
        return ()=>clearInterval(timerId);
    },[isRunning, timeLeft])

    const handleChange = (e) =>{

        const value = e.target.value

        if(!isRunning && value.length > 0){
            setIsRunning(true)
        }
        if(timeLeft > 0){
            setTypedText(value)
        }
    }

    const wordsTyped = typedText.trim()===""?0:typedText.trim().split(/\s+/).length;
    const elapsedTime = 60 - timeLeft;
    const wpm = elapsedTime > 0? Math.round((wordsTyped/elapsedTime)*60):0

    const calculateAccuracy = () =>{
        let correct = 0
        for(let i = 0; i<typedText.length && i<sampleText.length; i++ ){
            if(typedText[i] === sampleText[i] ) correct++
        }

        return typedText.length === 0 ? 100 :Math.round((correct/typedText.length) * 100)
    }
    const accuracy = calculateAccuracy();

    const generateParagraph = async() =>{
        console.log("AI AI HOGYA")
        return groq.chat.completions.create({
            messages: [
              {
                role: "user",
                content: "Give me a random paragraph ONLY for each call 45-50 words, NO BULLET POINTS",
              },
            ],
            model: "llama-3.3-70b-versatile",
          });
    }
    const resetTest = async() =>{
        setIsRunning(false)
        setTypedText('')
        setTimeLeft(60)
        const paragraph = await generateParagraph()
        setSampleText(paragraph.choices[0]?.message?.content)
    }

    return(

        <div>

            <h1 style={{color: 'red', textDecoration: 'underline'}}>Keyboard Warriors</h1>
            <h2>Time Left: {timeLeft}</h2>
            <h2>{sampleText}</h2>
            <textarea placeholder= "Type karo..."
            rows={28}
            cols={50}
            value = {typedText}
            onChange={handleChange}
            disabled={timeLeft===0}
            
            />
            <h3>WPM: {wpm}wpm</h3>
            <h4>Accuracy: {accuracy}%</h4>
            {timeLeft=== 0 && (
                <div>
                    <h1>Result is: </h1>
                    <h2>Final WPM: {wpm}</h2>
                    <h2>Final Accuracy: {accuracy}%</h2>
                    <button onClick={resetTest}>Try Again</button>
                </div>    
            )}
        </div>
    )


}
export default App;