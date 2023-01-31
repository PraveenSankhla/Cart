let cartvalue = Number(document.getElementById('cartvalue').textContent)+1
let increaess = document.getElementById('cartvalue')


function AddtoCart(){
    increaess.textContent = cartvalue++

    let pk=  document.getElementById('toast');
    const custum_style = {
        display: "block",
    }

    Object.assign(pk.style,custum_style)
}

function Close(){
    document.getElementById('toast').style.display = "none"
}