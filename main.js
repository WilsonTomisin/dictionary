/*$(document).ready(function () {
    $(".search-btn").click(function (e) { 
        e.preventDefault();
        var $con = $("#Container")
        var $value = $(".inputField", $con).val()
        var $resultDiv = $("#result", $con)
        var $url =`https://api.dictionaryapi.dev/api/v2/entries/en/${$value}`
        fetch($url).then(
            function(response) {
                if (response.ok) {
                    return response.json()
                }else{
                    throw new Error("There was an error: "+ response.statusText)
                }
            }
        ).then(function(res) {
            const meaning = res[0].meanings[0].definitions[0].definition
            const meaning2 = res[0].meanings[0].definitions[1].definition
            const meaning3 = res[0].meanings[0].definitions[2].definition
            const phonetic = res[0].phonetic

            $resultDiv.innerHTML = meaning2

        }).catch(function(error) {
            console.error(error)
        })
        return false
    });
});*/

        let Fade = document.querySelector(".fade")
        // let Word =  document.querySelector(".word")
        let Btn = document.querySelector(".search-btn")
        let CloseBtn = document.querySelector(".close-btn")
        // let Transcription = document.querySelector(".transcript-E")
        // let Definition = document.querySelector(".definition-E")
        // let Definition2 =  document.querySelector(".definition2-E")
        // let Examples = document.querySelector(".examples-E")
        let Input = document.querySelector(".inputField")
        // let POS = document.querySelector(".partOfSpeech")
        // let Synonyms = document.querySelector(".synonyms")
        // let Antonyms = document.querySelector(".antonyms")

function getData() {
    let inputval = Input.value
    let url = `https://wordsapiv1.p.rapidapi.com/words/${inputval}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '175522c218msh23f453fa53cebaep104b68jsn5acb452ab8ba',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    fetch(url, options).then(
        function(response) {
            if (response.ok) {
                return response.json()
            }else{
                throw new Error("There was an error: "+ response.statusText)
            }
        }
    ).then(function(res) {
        let word = res.word
        let meaning = res.results[0].definition
        // let meaning2 = res.results[3].definition
        let phonetics = res.pronunciation['all']
        let example = res.results[0].examples
        let POS = res.results[0].partOfSpeech
        let synonyms = res.results[0].synonyms
        // let antonyms = res.results[7].antonyms[0]

        document.querySelector(".definition-E").innerHTML = meaning
        // document.querySelector(".definition2-E").innerHTML = meaning2
        document.querySelector(".transcript-E").innerHTML = phonetics
        document.querySelector(".examples-E").innerHTML = example
        document.querySelector(".partOfSpeech").innerHTML = POS
        document.querySelector(".synonyms").innerHTML = synonyms
        document.querySelector(".word").innerHTML = word


        
        /*Definition.innerHTML = meaning
        Definition2.innerHTML = meaning2
        POS.innerHTML = POS
        Examples.innerHTML = example
        Synonyms.innerHTML = synonyms
        Antonyms.innerHTML = antonyms
        Transcription.innerHTML = phonetics*/


        
        console.log(phonetics)

        

    }).catch(function(error) {
        console.error(error)
    })


}

Btn.addEventListener('click', function() {
    Fade.style.display = 'block'
    setTimeout(getData(), 2000)
    
})
CloseBtn.addEventListener('click', function () {
    Fade.style.display = 'none'
    Input.value = ''
    Input.focus()
})

/*class Modal{
    constructor(Fade,Word,Btn,CloseBtn,Transcription,Definition,Definition2,Examples,Input,POS,Synonyms,Antonyms){

        Fade = document.querySelector(".fade")
        Word =  document.querySelector(".word")
        Btn = document.querySelector(".search-btn")
        CloseBtn = document.querySelector(".close-btn")
        Transcription = document.querySelector(".transcript-E")
        Definition = document.querySelector(".definition-E")
        Definition2 =  document.querySelector(".definition2-E")
        Examples = document.querySelector(".examples-E")
        Input = document.querySelector(".inputField").value
        POS = document.querySelector(".partOfSpeech")
        Synonyms = document.querySelector(".synonyms")
        Antonyms = document.querySelector(".antonyms")


        this.container = Fade
        this.word = Word
        this.Btn = Btn
        this.closeBtn = CloseBtn
        this.transcription = Transcription
        this.definition = Definition
        this.definition2 = Definition2
        this.examples = Examples
        this.input = Input
        this.pos = POS
        this.synonyms = Synonyms
        this.antonyms = Antonyms

        let url = `https://wordsapiv1.p.rapidapi.com/words/${this.input}`

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '175522c218msh23f453fa53cebaep104b68jsn5acb452ab8ba',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        fetch(url, options).then(
            function(response) {
                if (response.ok) {
                    return response.json()
                }else{
                    throw new Error("There was an error: "+ response.statusText)
                }
            }
        ).then(function(res) {
            let meaning = res.results[0].definition
            let meaning2 = res.results[3].definition
            let phonetics = res.pronunciation['all']
            let example = res.results[0].examples
            let POS = res.results[0].partOfSpeech
            let synonyms = res.results[0].synonyms
            let antonyms = res.results[7].antonyms[0]

            let def
            let def2
            let ps
            let ex
            let sy
            let ay
            let trn

            def = this.definition
            def2 = this.definition2
            ps = this.pos
            ex = this.examples
            sy = this.synonyms
            ay = this.antonyms
            trn = this.transcription

            meaning =   Definition.innerHTML
        
            this.definition.innerHTML = meaning
            this.definition2.innerHTML = meaning2
            this.pos.innerHTML = POS
            this.examples.innerHTML = example
            this.synonyms.innerHTML = synonyms
            this.antonyms.innerHTML = antonyms
            this.transcription.innerHTML = phonetics
            


            console.log(phonetics)

            
        }).catch(function(error) {
            console.error(error)
        })
    }
    GetData(){

        // let inputval = this.input.value()
        




    }
    OpenModal(){
        setTimeout(this.GetData, 2000)
        this.container.style.display = "Block"
        
    }
    CloseModal(){
        this.container.style.display = 'none'
    
    }
}*/
/*const dictionary = new Modal();
let Btn = document.querySelector(".search-btn")
let CloseBtn = document.querySelector(".close-btn")

Btn.addEventListener('click', function() {
    dictionary.OpenModal()

})

CloseBtn.addEventListener('click', function() {
    dictionary.CloseModal()

})*/