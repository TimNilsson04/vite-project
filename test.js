export function setup(element) {
    // maxgräns för visade meddelande 10 st /klar
    // en meddelande historik
    // lyssna på enter /klar
    // slashcommando /h för hjälp /typ klar
    // förbjud tomma meddelande /klar

    const send = element.querySelector('#send')



    msg.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("send").click();
        }
    });

    send.addEventListener('click', (e) => {
        e.preventDefault()
        const msg = element.querySelector('#msg').value
        const msglist = element.querySelector('#msglist')
        const li = document.createElement('li')
        li.textContent = msg
        msglist.appendChild(li)
        const history = ("History: All messages \n")

        var allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');

        if (msg == "") {
            alert()
            return
        }
        if (msg == "/h" || msg == "/help") {
            alert("1. You can't have a message without any message \n 2. After ten messages, all the other messages die \n 3.Type /history for the history of all messages \n 4. Have fun :)")
            return
        }
        if (msglist.childElementCount > 10) {
            msglist.removeChild(msglist.firstElementChild)
        }
        if (msg == "/history") {
            alert(history)
            history.querySelector(msglist.value = "")
            return
        }
    })
}