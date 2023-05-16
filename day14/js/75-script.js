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
        <td><button class="btn btn-outline-danger btn-del">🗑️</button></td> 
         </tr>
        `;

  });
  const tbodyEl=document.querySelector("#tblStudents tbody")
  tbodyEl.innerHTML=html;
};


document.getElementById("tblStudents").addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-del")){
      const name=e.target.closest("tr").children[1].innerText;
      const result=confirm(`${name} isimli kaydi silmek istiyor musunuz?`)

    }

})

loadData();


/* document.querySelectorAll(".btn-del").forEach((btn)=>{
    btn.addEventListener("click",()=>{

        
    })
})
 */







