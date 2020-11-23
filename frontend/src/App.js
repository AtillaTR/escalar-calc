import React, { useState, useEffect } from 'react';


import './App.css';


function App() {

    var products = {};
    var inicialInvestment = [];
    var maoDeObra = 0;



    function calculateTvs() {
        var qtd32 = document.getElementById('qtd32').value;
        var qtd40 = document.getElementById('qtd40').value;
        var qtd43 = document.getElementById('qtd43').value;
        var qtd49 = document.getElementById('qtd49').value;
        var qtd50 = document.getElementById('qtd50').value;
        var qtd55 = document.getElementById('qtd55').value;
        var qtd58 = document.getElementById('qtd58').value;
        var qtd65 = document.getElementById('qtd65').value;
        var qtd75 = document.getElementById('qtd75').value;
        var qtdLfd = document.getElementById('qtdLfd').value;
        var qtdVideoWall = document.getElementById('qtdVideoWall').value;

        products.tv32 = document.getElementById('value32').value;
        products.tv40 = document.getElementById('value40').value;
        products.tv43 = document.getElementById('value43').value;
        products.tv49 = document.getElementById('value49').value;
        products.tv50 = document.getElementById('value50').value;
        products.tv55 = document.getElementById('value55').value;
        products.tv58 = document.getElementById('value58').value;
        products.tv65 = document.getElementById('value65').value;
        products.tv75 = document.getElementById('value75').value;
        products.tvLfd = document.getElementById('valueLfd').value;
        products.tvVideoWall = document.getElementById('valueVideoWall').value;

        console.log(products);
        var result32 = qtd32 * products.tv32;
        var result40 = qtd40 * products.tv40;
        var result43 = qtd43 * products.tv43;
        var result49 = qtd49 * products.tv49;
        var result50 = qtd50 * products.tv50;
        var result55 = qtd55 * products.tv55;
        var result58 = qtd58 * products.tv58;
        var result65 = qtd65 * products.tv65;
        var result75 = qtd75 * products.tv75;
        var resultLfd = qtdLfd * products.tvLfd;
        var resultVideoWall = qtdVideoWall * products.tvVideoWall;

        document.getElementById('result32').setAttribute("value", result32);
        document.getElementById('result40').setAttribute("value", result40);
        document.getElementById('result43').setAttribute("value", result43);
        document.getElementById('result49').setAttribute("value", result49);
        document.getElementById('result50').setAttribute("value", result50);
        document.getElementById('result55').setAttribute("value", result55);
        document.getElementById('result58').setAttribute("value", result58);
        document.getElementById('result65').setAttribute("value", result65);
        document.getElementById('result75').setAttribute("value", result75);
        document.getElementById('resultLfd').setAttribute("value", resultLfd);
        document.getElementById('resultVideoWall').setAttribute("value", resultVideoWall);


        var resultTotalTv = result32 + result40 + result43 + result49 + result50 + result55 + result58 + result65 + result75
            + resultLfd + resultVideoWall;

        document.getElementById('resultTotalTv').setAttribute("value", resultTotalTv);

        inicialInvestment.push(resultTotalTv);

    }

    function calculatePlayers() {
        var qtdAlpha = document.getElementById('qtdAlpha').value;
        var qtdSec = document.getElementById('qtdSec').value;
        var qtdBox = document.getElementById('qtdBox').value;

        products.Alpha = document.getElementById('valueAlpha').value;
        products.Sec = document.getElementById('valueSec').value;
        products.Box = document.getElementById('valueBox').value;

        var resultAlpha = qtdAlpha * products.Alpha;
        var resultSec = qtdSec * products.Sec;
        var resultBox = qtdBox * products.Box;

        document.getElementById('resultAlpha').setAttribute("value", resultAlpha);
        document.getElementById('resultSec').setAttribute("value", resultSec);
        document.getElementById('resultBox').setAttribute("value", resultBox);

        var resultTotalPlayers = resultAlpha + resultBox + resultSec;

        document.getElementById('resultTotalPlayers').setAttribute("value", resultTotalPlayers);

        inicialInvestment.push(resultTotalPlayers);


    }

    function calculatePlans() {
        var qtdPlan = document.getElementById('qtdPlan').value;

        maoDeObra = document.getElementById('maoDeObra').value;

        var paymentForm = document.getElementById('paymentForm').value;
        console.log(paymentForm);
        var plan = document.getElementById('plan').value;
        console.log(plan);
        var x = parseFloat(maoDeObra);
        inicialInvestment.push(x);






        if (paymentForm === "Anual") {
            var bronze = 15.90;
            var silver = 19.90;
            var gold = 23.01;
            var diamond = 26.91;
            console.log("entrou");


            if (plan === "bronze") {
                var result = bronze * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", bronze);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);

            }
            else if (plan === "silver") {
                var result = silver * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", silver);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }
            else if (plan === "gold") {
                var result = gold * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", gold);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }
            else if (plan == "diamond") {
                var result = diamond * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", diamond);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }

        }
        else {
            var bronze = 39.00;
            var silver = 49.00;
            var gold = 59.00;
            var diamond = 69.00;
            if (plan === "bronze") {
                var result = bronze * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", bronze);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);

            }
            else if (plan === "silver") {
                var result = silver * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", silver);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }
            else if (plan === "gold") {
                var result = gold * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", gold);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }
            else if (plan == "diamond") {
                var result = diamond * qtdPlan;
                document.getElementById('unityValue').setAttribute("value", diamond);
                document.getElementById('totalValue').setAttribute("value", result);
                inicialInvestment.push(result);
                document.getElementById('mensal').setAttribute("value", result);
            }
        }
        console.log(inicialInvestment);

        var adc = 0;
        for (var i = 0; i < inicialInvestment.length; i++) {
            adc = adc + inicialInvestment[i];

        }

        document.getElementById('inicialInvestment').setAttribute("value", adc);
        inicialInvestment = [];


    }
    function start() {


        calculateTvs();
        calculatePlayers();
        calculatePlans();
    }





    return (
        <>
            
            <form>
                <div id="general">
                    <div>
                        <h1>Tvs</h1>
                        <input type="text" name="qtd32" id="qtd32" placeholder="Quantidade" />
                        <input type="text" name="value32" id="value32" onChange={start} placeholder="Valor" />
                        <input type="text" name="result32" id="result32" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd40" id="qtd40" placeholder="Quantidade"/>
                        <input type="text" name="value40" id="value40" onChange={start} placeholder="Valor" />
                        <input type="text" name="result40" id="result40" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd43" id="qtd43" placeholder="Quantidade"/>
                        <input type="text" name="value43" id="value43" onChange={start} placeholder="Valor" />
                        <input type="text" name="result43" id="result43" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd49" id="qtd49"placeholder="Quantidade" />
                        <input type="text" name="value49" id="value49" onChange={start} placeholder="Valor"/>
                        <input type="text" name="result49" id="result49" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd50" id="qtd50"placeholder="Quantidade" />
                        <input type="text" name="value50" id="value50" onChange={start}  placeholder="Valor"/>
                        <input type="text" name="result50" id="result50" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd55" id="qtd55" placeholder="Quantidade"/>
                        <input type="text" name="value55" id="value55" onChange={start} placeholder="Valor"/>
                        <input type="text" name="result55" id="result55" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd58" id="qtd58" placeholder="Quantidade"/>
                        <input type="text" name="value58" id="value58" onChange={start} placeholder="Valor"/>
                        <input type="text" name="result58" id="result58" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd65" id="qtd65" placeholder="Quantidade"/>
                        <input type="text" name="value65" id="value65" onChange={start} placeholder="Valor"/>
                        <input type="text" name="result65" id="result65" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtd75" id="qtd75" placeholder="Quantidade"/>
                        <input type="text" name="value75" id="value75" onChange={start} placeholder="Valor"/>
                        <input type="text" name="result75" id="result75" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtdLfd" id="qtdLfd" placeholder="Quantidade"/>
                        <input type="text" name="valueLfd" id="valueLfd" onChange={start} placeholder="Valor"/>
                        <input type="text" name="resultLfd" id="resultLfd" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtdVideoWall" id="qtdVideoWall" placeholder="Quantidade"/>
                        <input type="text" name="valueVideoWall" id="valueVideoWall" onChange={start} placeholder="Valor"/>
                        <input type="text" name="resultVideoWall" id="resultVideoWall" value="" disabled />
                    </div>


                    {/* <button type="button" onClick={calculateTvs}>Calcular</button> */}
                    <p>Total: <input type="text" name="resultTotalTv" id="resultTotalTv" value="" disabled /></p>

                </div>
                <br />
                <div id="secundary">

                    <div>
                        <h1>Players</h1>
                        <input type="text" name="qtdAlpha" id="qtdAlpha" placeholder="Quantidade"/>
                        <input type="text" name="valueAlpha" id="valueAlpha" onChange={start} placeholder="Valor"/>
                        <input type="text" name="resultAlpha" id="resultAlpha" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtdSec" id="qtdSec"placeholder="Quantidade" />
                        <input type="text" name="valueSec" id="valueSec" onChange={start} placeholder="Valor" />
                        <input type="text" name="resultSec" id="resultSec" value="" disabled />
                    </div>
                    <div>
                        <input type="text" name="qtdBox" id="qtdBox" placeholder="Quantidade"/>
                        <input type="text" name="valueBox" id="valueBox" onChange={start} placeholder="Valor"/>
                        <input type="text" name="resultBox" id="resultBox" value="" disabled />
                    </div>
                    {/* <button type="button" onClick={calculatePlayers}>Calcular</button> */}
                    <p>Total: <input type="text" name="resultTotaPlayers" id="resultTotalPlayers" value="" disabled /> </p>
                </div>

                <br />
                <div id="terciary">
                    <h1>Planos</h1>
                    <p>Mao de obra: <input type="text" name="maoDeObra" id="maoDeObra" onChange={start} /> </p>

                </div>

                <div id="fourty">
                    <label >Escolha a forma de pagamento:</label>
                    <select name="paymentForm" id="paymentForm" onChange={start}>
                        <option value="Anual">Anual</option>
                        <option value="Mensal">Mensal</option>
                    </select>

                    <br />
                    <div>
                        <p>Quantidade de planos: <input type="text" name="qtdPlan" id="qtdPlan" onChange={start} />

                            <select name="plan" id="plan" onChange={start}>
                                <option value="bronze">Plano Bronze</option>
                                <option value="silver">Plano Prata</option>
                                <option value="gold">Plano Ouro</option>
                                <option value="diamond">Plano Diamante</option>
                            </select>
                        </p>
                        <p>Valor unitario: <input type="text" name="unityValue" id="unityValue" value="" disabled /> </p>
                        <p>Valor total: <input type="text" name="totalValue" id="totalValue" value="" disabled /> </p>


                        {/* <button type="button" onClick={calculatePlans}>Calcular</button> */}
                    </div>

                    <div>
                        <p>Investimento inicial: <input name="inicialInvestment" id="inicialInvestment" value="" disabled /></p>
                        <p>Mensalidade: <input name="mensal" id="mensal" value="" disabled /></p>


                    </div>


                </div>

                <br />



            </form>






        </>
    );


}

export default App;