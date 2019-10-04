function renderTable(target, data) {
    let accountHTML = '';
    let balance = "";
    for ( let i=0; i<data.length ; i++){
        if  (typeof(data[i].income) == undefined) {
            data[i].income = 0;
            (typeof(data[i].expense) == undefined) 
                data[i].expense = 0;
        }
        
        accountHTML += `<div class="table-row">
                        <div class="cell">${i+1}</div>
                        <div class="cell">${data[i].month}</div>
                        <div class="cell">${data[i].income}Eur</div>
                        <div class="cell">${data[i].expense}Eur</div>
                        <div class="cell">${data[i].income - data[i].expense}Eur</div>
                        </div>`;
                        
                                     

    } 
    return document.querySelector(target).innerHTML = accountHTML;
}



// jeigu income !== skaicius, tada duok man 0;

   // }
        // if (!data[i].income && data[i].expense) {
        //     balance = data[i].expense;
        // }
        // if (data[i].income && !data[i].expense) {
        //     balance = data[i].income;
        // }
       

