//listing element
document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if ( profilePictureInput && nameElement &&  emailElement && phoneElement && educationElement && experienceElement && skillsElement ){

        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const address = addressElement.value ;
        const education = educationElement.value ;
        const experience = educationElement.value ;
        const skills = skillsElement.value ;

// picture element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';

           //create resume output
    const resumeoutput =`
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile picture" class="profilePicture">` : ''} 
    <p><strong>Name :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Phone :</strong> ${phone}</p>
  <p><strong>Address :</strong> ${address}</p>
    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${skills}</p>

    `;
    const resumeoutputElement = document.getElementById('resumeoutput')
    if(resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput
    }else{
        console.error('the resume output elements are missing')
    }
}else{
    console.error('one or more are missing')
}
})