const linkBase = {
    classForlink: 'link',
    link_1: 'https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley',
    link_2: 'https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha',
    link_3: 'https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii',
    link_4_1: 'https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu',
    link_4_2: 'https://twitter.com/foolsbridge/status/986935782287003649',
    link_5_1: 'https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20',
    link_5_2: 'https://vc.ru/38891-nds-20',
    link_6: 'https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu',
    link_7: 'https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley',
    link_8: 'https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat',
};

const phraseBase = {
    prase_1: `Проверка <a class="${linkBase.classForlink}" href="${linkBase.link_1}" target="blank">обнаружила</a> просроченные продукты, но&nbsp;представители сети утверждают, что&nbsp;большая часть замечаний не коснулась их качества.`,
    prase_2: `фокусировала свет так, что он <a class="${linkBase.classForlink}" href="${linkBase.link_2}" target="blank">воспламенял</a> окружающие предметы.`,
    prase_3: `<b>могли получить акции на эту сумму</b>, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a class="${linkBase.classForlink}" href="${linkBase.link_3}" target="blank">конфликта</a> с руководством.`,
    prase_4_1: `<b>дала клиентам <a class="${linkBase.classForlink}" href="${linkBase.link_4_1}" target="blank">возможность</a> выбрать водителя славянской внешности и российского гражданства.</b> После скандала она переименовала услугу в «идеальный русский язык».`,
    prase_4_2: `Было пару раз, <a class="${linkBase.classForlink}" href="${linkBase.link_4_2}" target="blank">но не в июне</a>.`,
    prase_5: `НДС <a class="${linkBase.classForlink}" href="${linkBase.link_5_1}" target="blank">собираются</a> повысить с 18% до 20%. Кстати, <a class="${linkBase.classForlink}" href="${linkBase.link_5_2}" target="blank">вот чем</a> это грозит`,
    prase_6_1: `<b><a class="${linkBase.classForlink}" href="${linkBase.link_6}" target="blank">Верно</a></b>`,
    prase_6_2: `<b><a class="${linkBase.classForlink}" href="${linkBase.link_6}">планирует</a> заниматься проектами в сфере цифровой медицины.</b>`,
    prase_7: `и заказчик точно так же <a class="${linkBase.classForlink}" href="${linkBase.link_7}" target="blank">обязан</a> принять первый предложенный вариант.`,
    prase_8: `Вопрос был с подвохом: все эти фразы прозвучали в <a class="${linkBase.classForlink}" href="${linkBase.link_8}" target="blank">интервью</a>.`,
};

const stepBase = {
    steps: [
        {
            question: 'На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?',                  
            answers: [
                {
                    text: '6,3 млн рублей',
                    comment: `<b>Верно.</b> ${phraseBase.prase_1}`,
                    right: true,
                },
                {
                    text: '1 млн рублей',
                    comment: `<b>Нет, немного больше: 6,3 млн рублей.</b> ${phraseBase.prase_1}`,
                    right: false,
                },
                {
                    text: '50 млн рублей',
                    comment: `<b>Нет, гораздо меньше: 6,3 млн рублей.</b> ${phraseBase.prase_1}`,
                    right: false,
                },
                {
                    text: 'Не оштрафовал, а объявил выговор',
                    comment: `<b>Нет, всё же оштрафовал на 6,3 млн рублей.</b> ${phraseBase.prase_1}`,
                    right: false,
                },
            ],
        },
        {
            question: 'Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?',
            answers: [
                {
                    text: 'Дети играли ею в футбол и разбивали окна',
                    comment: `Нет, дело в её форме призмы — она ${phraseBase.prase_2}`,
                    right: false,
                },
                {
                    text: 'Она постоянно скатывалась с полок',
                    comment: `Бутылка была довольно устойчивая, но благодаря своей форме призмы ${phraseBase.prase_2}`,
                    right: false,
                },
                {
                    text: 'Её никто не покупал',
                    comment: `Её покупали, но бутылка благодаря своей форме призмы ${phraseBase.prase_2}`,
                    right: false,
                },
                {
                    text: 'Она оказалась огнеопасной',
                    comment: `Да, бутылка благодаря своей форме призмы ${phraseBase.prase_2}`,
                    right: true,
                },
            ],
        },
        {
            question: 'Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?',
            answers: [
                {
                    text: 'Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн',
                    comment: `<b>Ян Кум и Брайан Эктон</b> ${phraseBase.prase_3}`,
                    right: false,
                },
                {
                    text: 'Они лишились акций на $1,3 млрд',
                    comment: `<b>Ян Кум и Брайан Эктон действительно</b> ${phraseBase.prase_3}`,
                    right: true,
                },
                {
                    text: 'Ничего не лишились, к моменту ухода они уже получили всё вознаграждение',
                    comment: `<b>Ян Кум и Брайан Эктон</b> ${phraseBase.prase_3}`,
                    right: false,
                },
                {
                    text: 'Ничего не лишились, но получили иски за нарушение коммерческой тайны',
                    comment: `<b>Ян Кум и Брайан Эктон</b> ${phraseBase.prase_3}`,
                    right: false,
                },
            ],
        },
        {
            question: 'В какой скандал угодила компания «Газелькин» в июне 2018 года?',
            answers: [
                {
                    text: 'Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»',
                    comment: `${phraseBase.prase_4_2} <b>На самом деле компания</b> ${phraseBase.prase_4_1}`,
                    right: false,
                },
                {
                    text: 'Грузчики разбили антикварный шкаф стоимостью 163 млн рублей',
                    comment: `О таком случае не сообщалось, но зато <b>компания</b> ${phraseBase.prase_4_1}`,
                    right: false,
                },
                {
                    text: 'Предложила клиентам вызвать «водителей-славян» за дополнительную плату',
                    comment: `<b>Компания</b> ${phraseBase.prase_4_1}`,
                    right: true,
                },
                {
                    text: 'Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ',
                    comment: `О таком случае не сообщалось, но зато <b>компания</b> ${phraseBase.prase_4_1}`,
                    right: false,
                },
            ],
        },
        {
            question: 'Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?',
            answers: [
                {
                    text: '19%',
                    comment: `<b>Нет</b>, всё же именно ${phraseBase.prase_5}`,
                    right: false,
                },
                {
                    text: '20%',
                    comment: `<b>Да</b>, ${phraseBase.prase_5}`,
                    right: true,
                },
                {
                    text: '21%',
                    comment: `<b>Нет</b>, ${phraseBase.prase_5}`,
                    right: false,
                },
                {
                    text: 'Никто не собирается повышать НДС, зато повысят НДФЛ',
                    comment: `<b>Нет</b>, всё же именно ${phraseBase.prase_5}`,
                    right: false,
                },
            ],
        },
        {
            question: 'Чем займётся Герман Клименко после ухода с поста советника президента по интернету?',
            answers: [
                {
                    text: 'Проектами в сфере цифровой медицины',
                    comment: `${phraseBase.prase_6_1}`,
                    right: true,
                },
                {
                    text: 'Станет разрабатывать собственный мессенджер',
                    comment: `Это вполне возможно, но сперва он ${phraseBase.prase_6_2}`,
                    right: false,
                },
                {
                    text: 'Будет советником по медицине',
                    comment: `Нет, он ${phraseBase.prase_6_2}`,
                    right: false,
                },
                {
                    text: 'Отправится в кругосветное путешествие',
                    comment: `Он ${phraseBase.prase_6_2}`,
                    right: false,
                },
            ],
        },
        {
            question: 'Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?',
            answers: [
                {
                    text: 'Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог',
                    comment: `<b>Речь об экспресс-дизайне предметов</b>, ${phraseBase.prase_7}`,
                    right: false,
                },
                {
                    text: 'Экспресс-доставку обедов в офис',
                    comment: `<b>Речь об экспресс-дизайне предметов</b>, ${phraseBase.prase_7}`,
                    right: false,
                },
                {
                    text: 'Создание визиток за 50 тысяч рублей',
                    comment: `<b>Речь об экспресс-дизайне предметов</b>, ${phraseBase.prase_7}`,
                    right: false,
                },
                {
                    text: 'Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей',
                    comment: `<b>Да</b>, ${phraseBase.prase_7}`,
                    right: true,
                },
            ],
        },
        {
            question: 'Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?',
            answers: [
                {
                    text: 'Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»',
                    comment: `${phraseBase.prase_8}`,
                    right: false,
                },
                {
                    text: 'Чтобы быть предпринимателем, не нужно никакого образования',
                    comment: `${phraseBase.prase_8}`,
                    right: false,
                },
                {
                    text: 'Это стыдно — нанимать людей, которыми нужно управлять',
                    comment: `${phraseBase.prase_8}`,
                    right: true,
                },
                {
                    text: 'Предприниматели должны быть звёздами и элитой общества',
                    comment: `${phraseBase.prase_8}`,
                    right: false,
                },
            ],
        },
    ],
    result: [
        //Массив заполнять в порядке возрастания правильных ответов.
        {
            countRightAnswers: 0,
            text: 'Мне больше интересен футбол',
            img: 'result__img-1',
        },
        {
            countRightAnswers: 3,
            text: 'Читаю vc.ru<br>с&nbsp;экрана попутчика в&nbsp;метро',
            img: 'result__img-2',
        },
        {
            countRightAnswers: 5,
            text: 'Бизнес это интересно, но&nbsp;где взять столько времени?',
            img: 'result__img-3',
        },
        {
            countRightAnswers: 7,
            text: 'Читаю vc.ru каждый день, но&nbsp;работать тоже нужно',
            img: 'result__img-4',
        },
        {
            countRightAnswers: 8,
            text: 'Я работаю<br>в&nbsp;редакции vc.ru',
            img: 'result__img-5',
        },
    ],
};

const container = document.querySelector('.container');
const previewPlace = container.querySelector('.preview__wrap');
const stepsPlace = container.querySelector('.steps__outer-wrap');
const mainContent = document.querySelector('.main-content');
const goButtons = document.querySelector('.go__wrap');

const stepCountPlace = container.querySelector('.step-counter');
const questonPlace = container.querySelector('.question');
const answersPlace = container.querySelector('.answers__wrap');
const commentPlace = container.querySelector('.comment');
const resumePlace = container.querySelector('.resume__wrap');

const answersContent = container.querySelector('.answers');
const resumeContent = container.querySelector('.resume');

const nextButton = container.querySelector('.next');
const finalButton = container.querySelector('.final');
const againButton = container.querySelector('.again');

let countSteps = 0;
let countRightSteps = 0;
const totalSteps = stepBase.steps.length;

//Расставляем слушатели кликов
(function catchClick() {
    container.addEventListener('click', (e) => {
        if ( e.target.classList.contains('start') ) {
            start();
        };
        if ( e.target.classList.contains('check-answer') ) {
            checkAnswer(e);
        };
        if ( e.target.classList.contains('final') ) {
            showResult();
        };
    });

    container.querySelector('.next__btn').addEventListener('click', () => {
        nextStep();
    });

    container.querySelector('.final').addEventListener('click', () => {
        showResult();
    });

    container.querySelector('.again__btn').addEventListener('click', () => {
        restart();
    });
})();

function start() {
    hiddenElement(previewPlace);
    hiddenChildren (mainContent, goButtons);
    showElement(stepsPlace, stepCountPlace, questonPlace, answersPlace, nextButton);
    showStep();
};

//По тексту кликнутой кнопки ищем в базе комментарий к ней и признак правильности ответа.
function checkAnswer(event) {
    const clickedBtn = event.target;
    const textBtn = clickedBtn.innerText;
    const answersOfStep = stepBase.steps[countSteps].answers;
    for (let i=0; i<answersOfStep.length; i++) {
        if (answersOfStep[i].text === textBtn) {
            const comment = answersOfStep[i].comment;
            const right = answersOfStep[i].right;
            replaceButtons(clickedBtn);
            markButton(right, clickedBtn);
            showComment(comment);
            showGoButton();
            return;
        };
    };
};

function nextStep() {
    countSteps++;
    showStep();
};

//Перебираем базу - ищем объект с подходящим значением правильных ответов, его данными наполняем финальный интерфейс.
function showResult() {
    hiddenChildren (mainContent, goButtons);
    showElement(stepCountPlace, resumePlace, againButton);
    stepCountPlace.innerText = `${countRightSteps} из ${totalSteps} правильных ответов`;
    for(let i = 0; i<stepBase.result.length; i++) {
        if(countRightSteps <= stepBase.result[i].countRightAnswers) {
            resumeContent.innerHTML = stepBase.result[i].text;
            const imgClassName = '.' + stepBase.result[i].img;
            const imgCollection = container.querySelectorAll([imgClassName]);
            const imgArray = Array.from(imgCollection);
            imgArray.forEach( (img) => {
                img.classList.remove('hidden');
            });
            return;
        };
    };           
};

function restart() {
    hiddenElement(stepsPlace);
    hiddenChildren(container.querySelector('.img__wrap'));
    stepCountPlace.innerText = '';
    countSteps = 0;
    countRightSteps = 0;
    showElement(previewPlace);
};

//Убираем кнопки. Кликнутую кнопку делаем не кликабельной и вставляем обратно.
function replaceButtons(clickedBtn) {
    answersContent.innerHTML = '';
    clickedBtn.classList.remove('check-answer');
    answersContent.appendChild(clickedBtn);
};

function markButton(right, clickedBtn) {
    clickedBtn.classList.add('answer-button_clicked');
    if (right) {
        clickedBtn.classList.add('answer-button_right');
        countRightSteps++;
    } else {
        clickedBtn.classList.add('answer-button_wrong');
    };
};

function showComment(comment) {
    commentPlace.innerHTML = comment;
};

function showGoButton() {
    if ( (countSteps+1) === totalSteps ) {
        finalButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
    }
};  

//Очищаем интерфейс и запоняем данными нового шага.
function showStep() {
    hiddenElement(nextButton);
    cleanInterface();
    insertDataNewStep();
    showElement(commentPlace);
    showNumberStep();
};

function cleanInterface() {
    answersContent.innerHTML = '';
    commentPlace.innerHTML = '';
};

function insertDataNewStep() {
    questonPlace.innerText = stepBase.steps[countSteps].question;
    stepBase.steps[countSteps].answers.forEach( (item) => {
        const btn = createButtonWithAnswer();
        btn.innerHTML = item.text;
        answersContent.appendChild(btn);
    });
};

function showNumberStep() {
    const numberCurrentStepForHuman = countSteps + 1;
    stepCountPlace.innerText = `${numberCurrentStepForHuman}/${totalSteps}`;
};

function createButtonWithAnswer() {
    const btn = document.createElement('button');
    btn.classList.add('answer-button');
    btn.classList.add('check-answer');
    return btn;
};

function hiddenChildren() {
    const arrayOfElements = Array.from(arguments);
    arrayOfElements.forEach( (elem) => {
        const children = elem.children;
        const arrayChildren = Array.from(children);
        arrayChildren.forEach( (child) => {
            child.classList.add('hidden');
        });
    });
};

function showElement() {
    const arrayOfElements = Array.from(arguments);
    arrayOfElements.forEach( (elem) => {
        elem.classList.remove('hidden');
    });
};

function hiddenElement() {
    const arrayOfElements = Array.from(arguments);
    arrayOfElements.forEach( (elem) => {
        elem.classList.add('hidden');
    });
};