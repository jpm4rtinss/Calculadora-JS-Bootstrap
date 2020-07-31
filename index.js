    function calcular(tipo, valor) {
     if( tipo === 'ação'){
        if (valor === 'c') {
         
         document.getElementById('calc').value = ''//botão limpar
        }
        if (valor === '*' || valor === '/' || valor === '.' || valor === '+' || valor === '-') {
         document.getElementById('calc').value += valor
        }
        if (valor === '=') {
         document.getElementById('calc').value = eval(document.getElementById('calc').value )       
        }
     
     } else if(tipo === 'valor'){
       
       document.getElementById('calc').value += valor//concatenar a equação no visor
     }
    }