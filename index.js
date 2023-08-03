// code your solution here
function saturdayFun(target= "roller-skate"){
    return `This Saturday, I want to ${target}!`
}
saturdayFun();

saturdayFun("bathe my dog");

function mondayWork(target = 'go to the office'){
return `This Monday, I will ${target}.`
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(result = '*'){
    return function(adjective = "a hard worker"){
        return `You are ${result}${adjective}${result}!`
    }

}
wrapAdjective(("||")("a dedicated programmer"));
