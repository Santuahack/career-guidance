document.getElementById("careerTest").addEventListener("submit", function (e) {
    e.preventDefault();

    let scores = {
        structured: 0,
        creative: 0,
        dynamic: 0
    };

    document.querySelectorAll(".question").forEach(q => {
        if (q.dataset.special) {
            if (q.value !== "neutral") {
                scores[q.value] += 2;
            }
        } else {
            scores[q.dataset.group] += Number(q.value);
        }
    });

    const max = Math.max(scores.structured, scores.creative, scores.dynamic);
    let resultText = "";

    if (max === scores.structured) {
        resultText = "Вам подходят профессии, требующие логики, структуры и анализа (IT, инженерия, экономика, аналитика).";
    } else if (max === scores.creative) {
        resultText = "Вам подходят творческие и гуманитарные профессии (дизайн, журналистика, искусство).";
    } else {
        resultText = "Вам подходят динамичные профессии, связанные с активностью и риском (бизнес, предпринимательство, экстренные службы).";
    }

    const result = document.getElementById("result");
    result.classList.remove("d-none");
    result.innerHTML = `
        <strong>Результаты теста:</strong><br>
        Структурный тип: ${scores.structured}<br>
        Творческий тип: ${scores.creative}<br>
        Динамичный тип: ${scores.dynamic}<br><br>
        <strong>${resultText}</strong>
    `;
});



