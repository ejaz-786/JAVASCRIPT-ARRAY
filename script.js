let data = [
    {company:"Samsung",model:"Galaxy",memory:64,price:15000},
    {company:"Nokia",model:"S730",memory:128,price:22000},
    {company:"Xiaomi",model:"Note",memory:32,price:12000},
    {company:"Motorola",model:"G10",memory:32,price:15000},
    {company:"Apple",model:"S12",memory:64,price:25000},
 
]

let table = document.getElementById('mytable');

for(let i = 0; i < (data.length) ; i++){
      let tr = document.createElement('tr');
     for(let j = 0;j<(Object.keys(data[i]).length); j++){
        let td = document.createElement('td');
        let x = Object.keys(data[i])[j];
        td.innerHTML = data[i][x];
        tr.appendChild(td);
     }
     table.appendChild(tr);
    }

  

    // second Question:~. 

  
    let btn = document.getElementById('prod-btn');
    let table2 = document.getElementById('mytable2');

    btn.addEventListener('click',()=>{
        let company = document.getElementById('company').value;
        let model = document.getElementById('model').value;
        let memory = document.getElementById('memory').value;
        let price = document.getElementById('price').value;
        
        let tr =  document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        
        td1.innerHTML = company;
        td2.innerHTML = model;
        td3.innerHTML = memory;
        td4.innerHTML = price;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table2.appendChild(tr);
    })

    // third Question:~
     let rows = document.getElementById('show');
    let cartTemp=[]; 
    selectFunc=()=>{
        let select = document.getElementById('select-prod').value;
      return select;
    }
    addToCart=(sel_val)=>{
    let x = selectFunc();
    let arr =  data.filter((val)=>val.company == x);
    let price1=arr[0].price;
    let quantity=document.querySelector("#qty").value;
    let price2=price1 * quantity;
    let a={
        name:x,
        quantity:quantity,
        price:price2,
    }
    cartTemp.push(a);
    console.log(cartTemp)
    }

    generateBill = () =>{
       let tr = "";
       cartTemp.forEach((val)=>{
        console.log(val);
         tr += `
            <tr>
             <td>${val.name}</td>
             <td>${val.quantity}</td>
             <td>${val.price}</td>
          </tr>
        `
   
       })

       rows.innerHTML = tr;
    }

    // Question 4:~
   let rows2= document.getElementById('show2');
    let tr2 = "";
    let temp = data;
 
    
    temp.forEach((val,index)=>{
       tr2+= `
         <tr>
          <td>${val.company}</td>
          <td>${val.model}</td>
          <td>${val.memory}</td>
          <td>${val.price}</td>
          <td>
          <input type="checkbox" onclick="checkboxFun(event)" id="check"/>
          </td>
         <tr/>
       `
    })
    rows2.innerHTML = tr2;
    // let ar = [];
    //  checkboxFun = (index) =>{
    //      ar.push(index);
    //     }

    // DeleteFun=()=>{
    //   ar.forEach((val)=>{
    //     console.log(val);
    //     temp.splice(val,1)
    //     console.log(temp);
    //   })
    // }

    checkboxFun = (event) =>{
        event.target.parentNode.parentNode.remove();
    }

    // Question 5:~

    let rows3= document.getElementById('show3');
    let tr3 = "";
    let temp2 = data;

    
    temp2.forEach((val,index)=>{
      val.quantity1 = 12;
       tr3+= `
         <tr>
          <td>${val.company}</td>
          <td>${val.model}</td>
          <td>${val.memory}</td>
          <td>${val.price}</td>
          <td>
            ${val.quantity1}
          </td>
         <tr/>
       `
    })
    rows3.innerHTML = tr3;


