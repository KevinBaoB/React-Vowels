function VowelsFinder(props){

    const theVowels = () => {
        if(props.word === ""){
            return null
        } 

        let elements = []

        for(let i = 0; i < props.word.length; i++){
            const isVowel = (/[aeiou]/i).test(props.word[i]);
            if(isVowel){
                elements.push(<span className="highlight">{props.word[i]}</span>)
            } 
            else {
                elements.push(<span>{props.word[i]}</span>)
            }
        }
        return elements
    }

    return (
        <div>
            <p>You entered the word: {theVowels()}</p>
        </div>
    )
}

export default VowelsFinder