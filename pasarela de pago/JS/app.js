function Entero(monto){
  monto = parseInt(monto)
  if (isNaN(monto)){
    return "";
  }else{
    return monto;
  }
}

function calcula(){
    monto = document.calcular.monto.value
    monto = Entero(monto)
    document.calcular.monto.value=monto
    let calculo = monto * 1 / 100 + 0.07
    let total = calculo + monto
    if (monto) {
      document.getElementById('tarifa').innerHTML = calculo;
      document.getElementById('total').innerHTML = total;
    }else{
      return 0;
    }
}