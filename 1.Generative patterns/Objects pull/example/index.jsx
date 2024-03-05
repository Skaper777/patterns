async function catsPoolServices(catList) {
  const pool = [];
  if (!sessionStorage.getItem("cats")) {
    await Promise.all(
      catList.map(async (cat) => {
        const catObject = await import(`../../../fake-api/${cat}.json`);
        pool.push(catObject.default);
      })
    ).then(() => {
      sessionStorage.setItem("cats", JSON.stringify(pool));
    });
    return pool;
  } else {
    return JSON.parse(sessionStorage.getItem("cats"));
  }
}

/** Паттерн особенно полезен, если ваше приложение содержит отработку множества одинаковых методов для получения одного и того же результата в разные промежутки работы.
 *  Каждый новый запрос на однотипное действие — это затрата ресурсов приложения. При большой трате ресурсов приложение может аварийно завершиться, и пользователь потеряет текущие данные.*/