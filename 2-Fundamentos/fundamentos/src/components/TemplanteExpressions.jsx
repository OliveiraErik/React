const TemplateExpressions = () => {

    const name = "Erik"
    const data = {
        age: 20,
        job: "Estudante"
    }

    return (
        <div>
            <h1>Olá {name}, Tudo bem?</h1>
            <p>Atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;