const container = document.querySelector("#addressList");

const onClick = () => {
    const name = document.querySelector("#fullName");
    const address = document.querySelector("#address");
    container.innerHTML += `
        <section>
            <h1>${name.value}</h1>
            <div>${address.value}</div>
        </section>
    `
}

document.querySelector("#saveEntry").addEventListener("click", onClick);

// ${name.value}: ${address.value}