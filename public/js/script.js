function confirmarDelecao(event, form) {
    event.preventDefault();
    let decision = confirm("Você quer deletar esta categoria?");
    if (decision) {
        form.submit();
    }
}