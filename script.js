function gradeCheck(event){
    event.preventDefault();

    let percentInput= document.querySelector("#percentInput").value;
    percentInput= Number(percentInput);

    console.log(percentInput);

    let message="";

    if(percentInput >=80){
        message ="Grade A+ [Excelent]";
    }
    else if(percentInput >=70){
        message ="Grade A [Very Good]";
    }
    else if(percentInput >=60){
        message= "Grade B [Good]";
    }
    else if(percentInput >=50){
        message= "Grade C [Fair]";
    }
    else{
        message= "Grade F [Fail]";
    }

    document.querySelector("#resultWindow").innerHTML= message;

}