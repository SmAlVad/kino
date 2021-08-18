const extraFilmsFilter = [
    {
    name:`Топ рейтинга`
    },
    {
    name:`Больше всего комментариев`
    },
];

export const createExtraFilms = ((name)=> {
return (`
<section class="films-list--extra">
<h2 class="films-list__title">${name}</h2>
<div class="films-list__container">

</div>
</section>
`)
});

export const renderExtraFilmsBlock = (()=> {
    return extraFilmsFilter.map((it) => {
    createExtraFilms(it.name);
    }).join("");
});

