const saveBttn = document.querySelector("#saveEntry");

const container = document.querySelector("#addressList");

const onClick = () => {
    const name = document.querySelector("#fullName");
    const address = document.querySelector("#address");
    container.innerHTML = `${name.value} ${address.value}`;
}

saveBttn.addEventListener("click", onClick);