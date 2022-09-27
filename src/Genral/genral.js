export default function updateInputValue(event , setInputValue){
    const change = event.target.value;
    setInputValue(change)
}