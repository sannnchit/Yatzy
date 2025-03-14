const combination = document.getElementById("combinations");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const sum1 = document.getElementById("sum1");
const sum2 = document.getElementById("sum2");
const sum3 = document.getElementById("sum3");
const sum4 = document.getElementById("sum4");
const sum5 = document.getElementById("sum5");
const sum6 = document.getElementById("sum6");
const threecomb = document.getElementById("threecomb");
const fourcomb = document.getElementById("fourcomb");
const threetwocomb = document.getElementById("threetwocomb");
const foursequence = document.getElementById("foursequence");
const fivecomb = document.getElementById("fivecomb");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const roll = document.getElementById("roll");

function sumof1(arr){
    const count= arr.filter(num => num===1).length;
    return count * 1;
}
function sumof2(arr){
    const count= arr.filter(num => num===2).length;
    return count * 2;
}
function sumof3(arr){
    const count= arr.filter(num => num===3).length;
    return count * 3;
}
function sumof4(arr){
    const count= arr.filter(num => num===4).length;
    return count * 4;
}
function sumof5(arr){
    const count= arr.filter(num => num===5).length;
    return count * 5;
}
function sumof6(arr){
    const count= arr.filter(num => num===6).length;
    return count * 6;
}
function sumofthreecomb(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===3){
            return (i+1)*3;
        }
    }
    return 0;
}
function sumoffourcomb(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===4){
            return (i+1)*4;
        }
    }
    return 0;
}
function sumofthreetwocomb(arr){
    arr.sort();
    if(arr[5]===3 && arr[4]===2){
        return 25;
    }
    return 0;
}
function sumoffourseq(arr){
    if((arr[0]===1 && arr[1]===1 && arr[2]===1 && arr[3]===1 &&arr[4]===1) || 
    (arr[1]===1 && arr[2]===1 && arr[3]===1 &&arr[4]===1 && arr[5]===1)){
        return 40;
    }
    return 0;
}
function sumoffivecomb(arr){
    arr.sort();
    if (arr[5]===5){
        return 50;
    }
    return 0;
}
let dicearr=[];
let fixarr=[false,false,false,false,false];

for (let i=0;i<3;i++){
    function rolldice(dicearr){
        for (let i=0; i<5; i++){
            if (!fixarr[i]){
                dicearr[i]=Math.floor(Math.random()*6)+1;
            }
        }
    }
    const count1=sumof1(dicearr);
    const count2=sumof2(dicearr);
    const count3=sumof3(dicearr);
    const count4=sumof4(dicearr);
    const count5=sumof5(dicearr);
    const count6=sumof6(dicearr);

    let countarr=[count1/1,count2/2,count3/3,count4/4,count5/5,count6/6];

    const sum3comb= sumofthreecomb(countarr);
    const sum4comb= sumoffourcomb(countarr);
    const sum32comb = sumofthreetwocomb(countarr);
    const sum4seq= sumoffourseq(dicearr);
    const sum5comb= sumoffivecomb(countarr);
}



