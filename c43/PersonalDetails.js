class PersonalDetails{
    constructor(){
        this.name=createInput('Name');
        this.age=createInput('Age');
        this.email=createInput('Email');
        this.disease=createSelect();
        this.disease.option("select Ailment");
        this.disease.option("covid");
        this.button=createButton('Submit');
    }
    display(){
       // this.title=createElement('h1');
        //this.title.html('Covid-19');
      //  this.title.position(displayWidth/2,20);
        this.name.position(displayWidth/3,displayHeight/4);
       // this.name.elt.focus();
        this.age.position(displayWidth/3,displayHeight/4+50);
        this.email.position(displayWidth/3,displayHeight/4+100);
        this.disease.position(displayWidth/3,displayHeight/4+150);
        this.button.position(displayWidth/3,displayHeight/4+200);
        this.button.mousePressed(()=>{
            var name=this.name.value(); 
            var age=this.age.value();
            var email=this.email.value();
            var disease=this.disease.value();
            patient=new Patient();
            patientCount++
            patient.index=patientCount;
            patient.name=name;
            patient.email=email;
            patient.age=age;
            patient.disease=disease;
            patient.update(patientCount);
            patient.updateInfo();
            symptoms=new Symptoms(patient.disease);
            symptoms.display();
        })
        
    }
    hide(){
        this.name.hide();
        this.disease.hide();
        this.email.hide();
        this.age.hide();
        this.button.hide();
    }
}