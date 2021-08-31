export function ManipulandoEventos() {
    function handleClick() {
    alert("Você clicou no botão rs");
    }

        function handleMouseOver() {
    console.log("Você entrou no botão hehe");
    }

        function handleMouseLeave() {
    console.log("Você saiu no botão :p");
    }

    return (
    <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
    >
        Clique aqui!
    </button>
    );
}
