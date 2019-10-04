function renderTable(target, data) {

    let accountHTML = '';
    for ( let i=0; i<data.length ; i++) {
        accountHTML += `<div class="table-row">
                        <div class="cell">${i+1}</div>
                        <div class="cell">${data[i].month}</div>
                        <div class="cell">${data[i].income}Eur</div>
                        <div class="cell">${data[i].expense}Eur</div>
                        <div class="cell">150.00 Eur</div>
                        </div>`;
                        
                                     
    
    } 
    return document.querySelector(target).innerHTML = accountHTML;
}