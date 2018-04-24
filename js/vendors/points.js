let getInfo  = (data) => {
    
    // let points= data['pointBalance'];
    let points= data['pointBalance'];
    
    // points.forEach(function(element) {
    //     let avaiblePoints= points['availablePointBalance'];
    console.log(points);
        // let accountPoints= element.availablePointBalance;
        //     account.forEach(function(element){
        //         console.log(element);
        //         let savingsAccountSummary = array.savingsAccountSummary;
        //         let status = savingsAccountSummary.accountStatus;
        //         let balance = savingsAccountSummary.availableBalance;
        //         let accountNumber = savingsAccountSummary.displayAccountNumber;

        //         // console.log(status);
        //         // console.log(balance);
        //         // console.log(accountNumber);
        //         paintAccout(status,balance,accountNumber);  
    //         // })
    // });
   
  }
  
function paintAccout (status,balance,accountNumber){

    const movieContainer = document.getElementById('afore_Container');

    let templete = `<div class="col s12 m4">
            <div>
              <div>
                <p> Numero de cuenta ${accountNumber}<p>
                <p> El estatus de tu cuenta: ${status}<p>
                <p> Saldo afore: $${balance} MXN<p>
              </div>
              <div>
                <a href="./puntos.html" class="btn btn-dark">Añadir mis puntos Premia</a>
              </div>
            </div>
          </div>`
        movieContainer.innerHTML += templete;
  }

  getInfo(data);
  