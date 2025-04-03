document.getElementById("start").addEventListener("click", personaldetails);

function personaldetails(){
    document.getElementById("start").style.display = "none";

    const name = prompt("Enter your name:");
    if(name === null)return;

    const age = prompt("Enter your age:");
    if(age === null)return;

    const phoneNo = prompt("Enter your contact number:");
    if (phoneNo === null)return;

    const email = prompt("Enter your email address:");
    if(email === null)return;

    let gender = prompt("Enter your gender:\n 1.Male\n 2.female\n 3.prefer not to say");
    if(gender === null) return;

    if(gender === "1"){
        gender = "Male";
    }else if(gender === "2"){
        gender = "Female";
    }else{
        gender = "prefer not to say";
    }

    displaypersonaldetails(name,age,phoneNo,email,gender);

    updateprogressbar(1,4);

    document.getElementById("reset").addEventListener("click",resetpersonaldetails);
    document.getElementById("next-personal").addEventListener("click",medicalhistory);

}
function displaypersonaldetails(name,age,phoneNo,email,gender){
    document.getElementById("name").textContent = name;
    document.getElementById("age").textContent = age;
    document.getElementById("phoneNo").textContent = phoneNo;
    document.getElementById("email").textContent = email;
    document.getElementById("gender").textContent = gender;
    document.getElementById("personal-details").classList.remove("hidden");
}

function resetpersonaldetails(){
    document.getElementById("name").textContent = "";
    document.getElementById("age").textContent = "";
    document.getElementById("phoneNo").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("gender").textContent = "";
    document.getElementById("personal-details").classList.add("hidden");
    updateprogressbar(0,4);
    personaldetails();
}

function medicalhistory(){
    const illnesses = prompt("Do you have any chronic illnesses? ");
    if(illnesses=== null)return;

    const sugeries = prompt("Have you had any surgeries or major medical procedures?:");
    if(sugeries === null)return;

    const medication =  prompt("Currently taking any medication?:");
    if(medication === null)return;

    displaymedicalhistory(illnesses,sugeries,medication);

    updateprogressbar(2,4);

    document.getElementById("next-medical").addEventListener("click",lifestyle);

}

function displaymedicalhistory(illnesses,sugeries,medication){
    document.getElementById("Chronic-illnesses").textContent=illnesses;
    document.getElementById("surgeries").textContent=sugeries;
    document.getElementById("medications").textContent= medication;
    document.getElementById("medical-history").classList.remove("hidden");
    
}
function lifestyle(){
    const exercise = prompt("How often do you exercise?:");
    if(exercise === null)return;

    const smoke = prompt("Do you smoke?:\nYes/No");
    if(smoke === null)return;

    const alcohol = prompt("Do you consume alcohol?\nYes/No:");
    if(alcohol===null)return;

    const diet = prompt("How would you rate your diet? \n1.Healthy \n2.Average \n3.Unhealthy");
    if(diet===null)return;
    

    displaylifestyle(exercise,smoke,alcohol,diet);

    updateprogressbar(3,4);

    document.getElementById("next-lifestyle").addEventListener("click",mentalhealth);


}

function displaylifestyle(exercise,smoke,alcohol,diet){
    document.getElementById("exercise").textContent = exercise;
    document.getElementById("smoke").textContent = smoke;
    document.getElementById("alcohol").textContent = alcohol;
    document.getElementById("diet").textContent = diet;
    document.getElementById("lifestyle").classList.remove("hidden");
}

function mentalhealth(){
    const stress = prompt("How would you describe your current stress level?\n1.Low\n2.Medium\n3.High ");
    if(stress===null)return;

    const activities = prompt("Do you practice any mental health activities?\n1.Meditation\n2.Therapy ");
    if(activities === null)return;

    displaymentalhealth(stress,activities);

    updateprogressbar(4,4);

    document.getElementById("finish").addEventListener("click",() =>{
        alert("Profile completed!");
        document.querySelectorAll(".step").forEach(step => step.classList.add("hidden"));
    });
    document.getElementById("finish").addEventListener("click",function(){
        document.getElementById("thankyou").style.display = "block";
    })

    
}

function displaymentalhealth(stress,activities){
    document.getElementById("stress").textContent = stress;
    document.getElementById("activities").textContent=activities;
    document.getElementById("thankyou").style.display = "block";
    document.getElementById("mental-health").classList.remove("hidden");
}

function updateprogressbar(currentstep,totalsteps){
    const progresspercentage = (currentstep/totalsteps)*100;
    const progressbar = document.querySelector('.progress-bar');
    progressbar.style.width = progresspercentage + '%';
    progressbar.textContent = Math.round(progresspercentage)+'%'
}
