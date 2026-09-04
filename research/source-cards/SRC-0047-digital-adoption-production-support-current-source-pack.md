# SRC-0047 — актуальная база digital adoption и производственной поддержки

## Назначение

Пакет закрывает INT-D-06 на уровне стажёра: от выпуска решения до его реального освоения, поддержки, измерения результата и улучшения. Дата проверки: **2 сентября 2026 года**.

## Профессиональные источники

1. [Microsoft Power Platform adoption guidance](https://learn.microsoft.com/en-us/power-platform/guidance/) — стратегия, цели, роли, governance, безопасность, обучение, поддержка и бизнес-ценность.
2. [Power Platform adoption maturity model](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/maturity-model) и [goals](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/maturity-model-goals) — путь от разрозненного использования к измеряемой и постоянно улучшаемой практике.
3. [Prosci ADKAR](https://www.prosci.com/methodology/adkar) — Awareness, Desire, Knowledge, Ability, Reinforcement как диагностическая модель индивидуального изменения.
4. [IIBA Business Analysis Core Standard](https://www.iiba.org/globalassets/business-analysis-resources/core-standard/iiba-core-standard.pdf) — оценка работы решения, ограничений и ценности, рекомендации по улучшению.
5. [Atlassian ITSM](https://www.atlassian.com/itsm) — incident, service request, problem, change и knowledge management.
6. [KCS, Consortium for Service Innovation](https://library.serviceinnovation.org/KCS) — создание и улучшение знаний внутри потока решения обращений; Solve Loop и Evolve Loop.
7. [Google SRE: Managing Incidents](https://sre.google/sre-book/managing-incidents/) и [Postmortem Culture](https://sre.google/sre-book/postmortem-culture/) — подготовленный incident response, роли, журнал состояния и обучение без поиска виноватого.
8. SRC-0044, SRC-0045 и SRC-0046 — полностью изученные русские объяснения и практические кейсы.

## Главное решение

Выпуск функции — только техническое событие. Adoption наступает, когда целевые пользователи умеют и хотят применять решение в реальном процессе, используют его правильно и получают измеримую ценность без неприемлемого ущерба. Поддержка не заканчивается закрытием тикета: она восстанавливает услугу, сохраняет знания, выявляет повторяющиеся причины и возвращает улучшения в продукт.

Подробная русская структура, метрики, артефакты и роль бизнес-аналитика находятся в [заметках SRC-0047](../source-notes/SRC-0047-digital-adoption-production-support-current-notes.md).

## Ограничения

- Microsoft описывает прежде всего собственную экосистему; модель переносится как набор измерений, а не готовая шкала для любой компании.
- Prosci — коммерческая методология. ADKAR полезен как язык диагностики барьеров, но не доказывает, что пять букв гарантируют успех.
- Atlassian и Okdesk продают инструменты. Определения сверяются между источниками, а выбор продукта в пакет не входит.
- Google SRE описывает высоконагруженные цифровые сервисы; его практики масштабируются, но роли и формальность должны соответствовать риску.

## Решение

Принять пакет как профессиональное ядро INT-D-06. На уровне стажёра тема источниково завершена; углублённые ITIL, SRE, change portfolio и AI operations оставить для следующих уровней.

