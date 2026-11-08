document.getElementById("sendmoney-btn")
    .addEventListener('click',function(){
        const sendmoneynumber = getValueFromInput("sendmoney-number");
        console.log(sendmoneynumber)
        if(sendmoneynumber.length!=11){
            alert("Invalid Number");
            return;
        }
        const sendamount = getValueFromInput("sendmoney-amount")

        const current = getBalance();
        const newbalance =current - Number(sendamount);
        console.log(newbalance);
        if(newbalance <0){
            alert("invalid ammount");
            return;
        }
        const inputpin = getValueFromInput("sendmoney-pin");
        if(inputpin==="1234"){
            alert ("Send money success");
            setbalance(newbalance);
            const history =document.getElementById("history-container")

            const  newhistory =document.createElement("div");

            newhistory.innerHTML=`
            <div class="transation-card  p-5 bg-base-100">   send success  
                 ${sendamount} 
                 taka,successto ${sendmoneynumber},
                 at ${new Date()}
            </div>`;
            history.append(newhistory);
        }
        else{
            alert("Invalid pin");
            return;
        }


    });