import { students } from "../data/students.js";



document.getElementById("btnShow").addEventListener("click",()=>{
setColorForScores()
});

const setColorForScores=()=>{
const trEls=document.querySelectorAll("#tblStudents tbody tr");

trEls.forEach((tr)=>{
    const score= tr.querySelector("td:last-child").innerHTML;

    if(score<50){
        tr.classList.add("table-danger")

    }else{
        tr.classList.add("table-success")
    }


    
})
    
}


const loadData = () => {
    let html="";
  students.forEach((student,index) => {
  html += `
        <tr>
        <td>${index+1}</td>
        <td>${student.name}</td>
        <td>${student.point}</td> 
         </tr>
        `;

  });
  const tbodyEl=document.querySelector("#tblStudents tbody")
  tbodyEl.innerHTML=html;
};





loadData();

