$('#calculate').click(()=>{
	menor = 0;
      idade = $('#idade').val();
      peso = $('#peso').val();
      altura = $('#altura').val();
      imc = idade / (peso * (altura * altura));
      fc = 0;

        planoA_basico = 100 + (idade * 10 * (imc / 10))
        planoA_standard = 150 + (idade * 15) * (imc / 10)
        planoA_premium = 200 - (imc * 10) + (idade * 20) * (imc / 10)

        planoB_basico = 100 + (fc * 10 * (imc / 10))
        planoB_standard = 150 + (fc * 15) * (imc / 10)
        planoB_premium = 200 - (imc * 10) + (fc * 20) * (imc / 10)

        if (imc < 18.5){
            fc = 10;
        } else if (imc >= 18.5 && imc < 25){
            fc = 1;
        } else if (imc >= 25 && imc < 30){
            fc = 6;
        } else if (imc >= 30 && imc < 35){
            fc = 10;
        } else if (imc >= 35 && imc < 40){
            fc = 20;
        } else if (imc >= 40){
            fc = 30;
        }

        if (planoA_basico < menor){
        	menor = planoA_basico
        }
        if (planoA_standard < menor){
        	menor = planoA_standard
        }
        if (planoA_premium < menor){
        	menor = planoA_premium
        }
        if(planoB_basico < menor){
        	menor = planoB_basico
        }
        if (planoB_standard < menor){
        	menor = planoB_standard
        }
        if (planoB_premium < menor){
        	menor = planoB_premium
        }

      document.getElementById('planoA-basico').innerText = 'R$' + Math.round(planoA_basico);
      document.getElementById('planoA-standard').innerText = 'R$' + Math.round(planoA_standard);
      document.getElementById('planoA-premium').innerText = 'R$' + Math.round(planoA_premium);

      document.getElementById('planoB-basico').innerText = 'R$' + Math.round(planoB_basico);
      document.getElementById('planoB-standard').innerText = 'R$' + Math.round(planoB_standard);
      document.getElementById('planoB-premium').innerText = 'R$' + Math.round(planoB_premium);

      $('#bestPlanText').text('Seu melhor plano baseado nos preços é: ' + menor + '. Abaixo a tabela com as informações dos outros planos.')
      document.getElementById('bestPlanText').scrollIntoView()
})
document.getElementById('btn-contrate').addEventListener("click", function (){
	document.getElementById('IMC').scrollIntoView()
})
