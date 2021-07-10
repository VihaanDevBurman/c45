class Symptoms{
    constructor(disease){
        this.heading=createElement("h1");
       this.disease=disease 
    }
    display(){
        pd.hide();
this.heading.html("Symptoms For "+patient.disease);
        this.heading.position(displayWidth/2-120,80);
        var ailment="Ailment/"+ this.disease;
        database.ref(ailment).once("value",(data)=>{
            symptoms=data.val();
            console.log(symptoms)
        })
        console.log("symptoms");
    }
}