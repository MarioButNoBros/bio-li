function ApiWhatsApp() {
    const phoneNumber = "+573156850841";
    const message = "Hola, estoy interesado en comprar un producto Bio-Li.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        window.open(url, '_blank')
    )
}

export { ApiWhatsApp }