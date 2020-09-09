window.addEventListener('DOMContentLoaded', e => {
    const form = document.getElementById('frm');
    const debtorInput = document.getElementById('debtor');
    const billInput = document.getElementById('bill');
    const textResultElement = document.getElementById('text-result');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const message = generateMessage(billInput.value, debtorInput.value);
        textResultElement.value = message;
        showCopyButton();
    })
})

function generateMessage(bill, debtor) {
    return `Caro(a) ${debtor}, Vericamos que você tem uma pendência de R$${bill} conosco. Por favor, passe na loja para acertarmos.`;
}

function showCopyButton() {
    button = document.getElementById('copy');

    button.style.display = 'block';
}

function copyTextToClipboard() {
    const copyText = document.getElementById("text-result");
    const tooltip = document.getElementById("tooltiptext");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    tooltip.style.visibility = 'visible';
    setTimeout(()=>{
        tooltip.style.visibility = 'hidden';
    }, 2000)

}