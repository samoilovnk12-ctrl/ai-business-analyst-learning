# SRC-0038 — актуальная профессиональная база предиктивного жизненного цикла и Waterfall

## Назначение

Пакет закрывает Waterfall на уровне стажёра и завершает источниковую базу INT-D-01. Дата проверки: **2 сентября 2026 года**.

## Первичные и профессиональные источники

1. Winston W. Royce, [Managing the Development of Large Software Systems](https://blog.marsen.me/assets/royce1970.pdf), IEEE WESCON, 1970. Прочитаны все 11 страниц. Исторический первоисточник не употребляет название `Waterfall` и не рекомендует наивную однонаправленную схему: он называет её рискованной и добавляет предварительный дизайн, полную документацию, пилот, тщательное тестирование и участие заказчика.
2. [ISO/IEC/IEEE 12207:2017](https://www.iso.org/standard/63712.html), процессы жизненного цикла программных систем. Стандарт задаёт процессы и терминологию, но не превращает Waterfall в обязательную универсальную модель.
3. PMI, [Matching software development life cycles to the project environment](https://www.pmi.org/learning/library/matching-software-development-life-cycles-environment-7961). Полезное различие predictive и adaptive и выбор по стабильности требований и среде проекта.
4. PMI, [One size does not fit all: Choosing the right project approach](https://www.pmi.org/learning/library/choosing-right-project-approach-9346). Подход выбирается и адаптируется по неопределённости, риску и ограничениям, а не по моде.
5. IBM, [Software Development Life Cycle](https://www.ibm.com/think/topics/sdlc). Современное профессиональное описание Waterfall, V-model, iterative, spiral и других моделей.
6. SRC-0037 — полностью прочитанная русская статья Яндекс Практикума с исправлениями.

## Независимая проверка

- Tore Dybå, Torgeir Dingsøyr, [Empirical studies of agile software development: A systematic review](https://doi.org/10.1016/j.infsof.2008.01.006), 2008. Из 1996 публикаций только 36 признаны эмпирическими исследованиями приемлемой строгости; даже громкие сравнения Agile и традиционных подходов нужно оценивать по контексту и качеству доказательств.
- [A systematic literature review of agile software development projects](https://doi.org/10.1016/j.infsof.2025.107727), 2025. Обзор 208 работ полезен для современной карты Agile, но вторичные заявления о превосходстве не превращают Waterfall в заведомо проигрышный вариант для любого проекта.
- SRC-0036 содержит научные ограничения сравнений Agile, Scrum, Kanban и гибридов.

## Книги для дальнейшего углубления

| Источник | Уникальная роль | Граница |
|---|---|---|
| Ian Sommerville, `Software Engineering` | модели процессов, требования, проектирование, V&V и эволюция | учебник шире Waterfall; полное актуальное издание не предоставлено |
| Roger Pressman, Bruce Maxim, `Software Engineering: A Practitioner's Approach` | классические и эволюционные модели, управление и качество | авторская учебная систематизация |
| Barry Boehm, `A Spiral Model of Software Development and Enhancement`, 1988 | риск-ориентированная альтернатива чистой последовательности | Spiral не равен Waterfall или Agile |
| PMI, `PMBOK Guide` | tailoring, governance и спектр development approaches | стандарт управления проектами, не инструкция разработки ПО |

Эти книги и стандарты не отмечены `deep-read`, если полный доступный текст не был предоставлен. Они используются только в пределах проверенных разделов и официальных описаний.

## Синтез

Большая русская структура Waterfall, роль BA, выбор подхода, артефакты, риски, сравнение и вопросы собеседования находятся в [заметках](../source-notes/SRC-0038-predictive-waterfall-current-notes.md).

## Решение

Принять SRC-0038 как ядро предиктивных жизненных циклов уровня стажёра. INT-D-01 теперь источниково завершён; последующая учебная последовательность будет проектироваться только по отдельному решению ученика.

