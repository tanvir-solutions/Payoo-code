
//machin id --> input value

function getValueFromInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;

}
//machin -> balance
function getBalance(){
    const balanceElement =document.getElementById("balance");
    const balance= balanceElement.innerText;
    console.log("current Balance",balance);
    return Number(balance);
}
// machin value-> set Balance 
function setbalance(value){
    const balanceElement =document.getElementById("balance");
    balanceElement.innerText = value;

}
//machin id >hide all > show id
function showonly(id){
    const addmoney= document.getElementById("add-money");
    const cashout= document.getElementById("cashout");
    const history =document.getElementById("history");
    const sendmoney =document.getElementById("sendmoney");
    

    // console.log(`add money ${addmoney} , cashout ${cashout}`)
    //sobika haid koro
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    sendmoney.classList.add("hidden")
    history.classList.add("hidden")
    


    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}
