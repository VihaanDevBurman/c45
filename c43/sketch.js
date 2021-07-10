var pd,database,patient,patientCount=0,symptoms=null;
function setup() {
  createCanvas(windowWidth-30,windowHeight-30);
  database=firebase.database();
  database.ref("patientCount").once("value",(data)=>{
    patientCount=data.val();
  })
  pd=new PersonalDetails();
}

function draw() {
  background(255,255,255);  
 
  pd.display();
}